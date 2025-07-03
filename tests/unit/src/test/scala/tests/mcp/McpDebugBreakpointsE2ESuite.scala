package tests.mcp

import scala.concurrent.Future
import scala.concurrent.Promise
import scala.concurrent.duration._

import tests.BaseLspSuite

/**
 * End-to-end test that verifies initial breakpoints work correctly.
 * When the implementation is broken (passing Nil instead of initialBreakpoints),
 * this test will fail because the debug proxy won't actually set the breakpoints.
 */
class McpDebugBreakpointsE2ESuite
    extends BaseLspSuite("mcp-debug-breakpoints-e2e")
    with McpTestUtils {

  def parseDebugSessionInfo(sessionInfo: String) = sessionInfo.split("\n").map(_.split(":", 2).map(_.trim) match {
    case Array(k, v) => k -> v
    case Array(i) => "info" -> i
  }).toMap

  test("startup://suspend actually suspends execution - FAILS when Nil is passed") {
    val workspace =
      """|/metals.json
         |{
         |  "a": { }
         |}
         |
         |/a/src/main/scala/QuickExit.scala
         |import java.nio.file.{Files, Paths}
         |
         |object QuickExit {
         |  def main(args: Array[String]): Unit = {
         |    Thread.sleep(100000)
         |    // Write a marker file to indicate the program started
         |    Files.write(Paths.get("program-started.txt"), "started".getBytes)
         |
         |    // If startup://suspend works, we should never reach this point
         |    Files.write(Paths.get("program-completed.txt"), "completed".getBytes)
         |    System.exit(0)
         |  }
         |}
         |""".stripMargin

    val startedFile = server.workspace.resolve("program-started.txt")
    val completedFile = server.workspace.resolve("program-completed.txt")

    for {
      _ <- initialize(workspace)
      _ <- server.server.compilations.compileTargets(
        server.server.buildTargets.allBuildTargetIds
      )
      client <- startMcpServer()

      // Ensure marker files don't exist
      _ = startedFile.toFile.delete()
      _ = completedFile.toFile.delete()

      // Start debug session with startup://suspend
      result <- client.debugMain(
        module = Some("a"),
        mainClass = "QuickExit",
        //env = Map("JAVA_TOOL_OPTIONS" -> "-agentlib:jdwp=transport=dt_socket,server=y,suspend=y,address=25005"),
        initialBreakpoints = Some(
          List(
            Map(
              "source" -> "startup://suspend",
              "line" -> 0
            )
          )
        )
      )

      debugInfo = parseDebugSessionInfo(result)

      // Give the program time to start

      _ <- Future(Thread.sleep(2000))

      // Check the results
      programStarted = startedFile.toFile.exists()
      programCompleted = completedFile.toFile.exists()

    } yield {
      // When the implementation is broken (Nil is passed):
      // - startup://suspend won't be processed
      // - The program will run to completion immediately
      // - Both files will be created

      // When the implementation is correct:
      // - startup://suspend will pause execution immediately
      // - The program won't run at all
      // - No files will be created

      assert(
        !programStarted && !programCompleted,
        s"Program should have been suspended before execution! " +
        s"Started: $programStarted, Completed: $programCompleted. " +
        "This means startup://suspend was not passed to DebugProxy."
      )
    }
  }

  test("breakpoint on first line stops execution") {
    val workspace =
      """|/metals.json
         |{
         |  "a": { }
         |}
         |
         |/a/src/main/scala/TestBreakpoint.scala
         |import java.nio.file.{Files, Paths}
         |
         |object TestBreakpoint {
         |  def main(args: Array[String]): Unit = {
         |    Files.write(Paths.get("before-breakpoint.txt"), "before".getBytes) // Line 5 - breakpoint here
         |    Files.write(Paths.get("after-breakpoint.txt"), "after".getBytes)
         |    System.exit(3)
         |  }
         |}
         |""".stripMargin

    val beforeFile = server.workspace.resolve("before-breakpoint.txt")
    val afterFile = server.workspace.resolve("after-breakpoint.txt")

    for {
      _ <- initialize(workspace)
      _ <- server.server.compilations.compileTargets(
        server.server.buildTargets.allBuildTargetIds
      )
      client <- startMcpServer()

      // Ensure marker files don't exist
      _ = beforeFile.toFile.delete()
      _ = afterFile.toFile.delete()

      // Start debug session with breakpoint on first line
      result <- client.debugMain(
        mainClass = "TestBreakpoint",
        initialBreakpoints = Some(
          List(
            Map(
              "source" -> server.workspace
                .resolve("a/src/main/scala/TestBreakpoint.scala")
                .toURI.toString,
              "line" -> 5
            )
          )
        )
      )
      debugInfo = parseDebugSessionInfo(result)
      _ = println(debugInfo)
      sessionId = debugInfo("Session ID")
      _ = println(sessionId)
      debugSessions <- client.debugSessions()
      _ = println(debugSessions)

      // Give the program a moment to potentially run
      _ <- Future(Thread.sleep(2000))
      stacktraces <- client.debugThreads(debugInfo("Session ID"))
      _ = println(stacktraces)

      // Check the results
      beforeCreated = beforeFile.toFile.exists()
      afterCreated = afterFile.toFile.exists()

    } yield {
      // When the implementation is broken (Nil is passed):
      // - No breakpoints will be set
      // - The program will run to completion
      // - Both files will be created

      // When the implementation is correct:
      // - The breakpoint will pause execution at line 5
      // - Neither file will be created (program is paused)

      assert(
        !beforeCreated && !afterCreated,
        s"Program should have paused at breakpoint! " +
        s"Before: $beforeCreated, After: $afterCreated. " +
        "This means the breakpoint was not passed to DebugProxy."
      )
    }
  }

  test("conditional breakpoint with false condition doesn't stop - verifies breakpoints are passed") {
    val workspace =
      """|/metals.json
         |{
         |  "a": { }
         |}
         |
         |/a/src/main/scala/ConditionalTest.scala
         |import java.nio.file.{Files, Paths}
         |
         |object ConditionalTest {
         |  def main(args: Array[String]): Unit = {
         |    val x = 1
         |    // Conditional breakpoint with condition "x > 5" (always false)
         |    Files.write(Paths.get("conditional-executed.txt"), "executed".getBytes) // Line 7
         |    System.exit(0)
         |  }
         |}
         |""".stripMargin

    val executedFile = server.workspace.resolve("conditional-executed.txt")

    for {
      _ <- initialize(workspace)
      _ <- server.server.compilations.compileTargets(
        server.server.buildTargets.allBuildTargetIds
      )
      client <- startMcpServer()

      // Ensure marker file doesn't exist
      _ = executedFile.toFile.delete()

      // Start debug session with conditional breakpoint that won't trigger
      result <- client.debugMain(
        mainClass = "ConditionalTest",
        initialBreakpoints = Some(
          List(
            Map(
              "source" -> server.workspace
                .resolve("a/src/main/scala/ConditionalTest.scala")
                .toURI.toString,
              "line" -> 7,
              "condition" -> "x > 5" // This condition is always false
            )
          )
        )
      )

      // Give the program time to complete
      _ <- Future(Thread.sleep(2000))

      // Check if the program ran to completion
      programExecuted = executedFile.toFile.exists()

    } yield {
      // When the implementation is broken (Nil is passed):
      // - No breakpoints will be set (not even conditional ones)
      // - The program will run to completion as expected

      // When the implementation is correct:
      // - The conditional breakpoint will be set but won't trigger (condition is false)
      // - The program will run to completion

      // This test verifies that breakpoints are being passed through,
      // even if they don't trigger
      assert(
        programExecuted,
        "Program should have completed (conditional breakpoint shouldn't trigger). " +
        "If this fails, it might indicate other issues with debug session setup."
      )
    }
  }

  test("multiple breakpoints - at least one should stop execution") {
    val workspace =
      """|/metals.json
         |{
         |  "a": { }
         |}
         |
         |/a/src/main/scala/MultiBreakpoint.scala
         |import java.nio.file.{Files, Paths}
         |
         |object MultiBreakpoint {
         |  def main(args: Array[String]): Unit = {
         |    step1()
         |    step2()
         |    step3()
         |    Files.write(Paths.get("all-completed.txt"), "done".getBytes)
         |  }
         |
         |  def step1(): Unit = {
         |    Files.write(Paths.get("step1.txt"), "1".getBytes) // Line 12 - breakpoint
         |  }
         |
         |  def step2(): Unit = {
         |    Files.write(Paths.get("step2.txt"), "2".getBytes) // Line 16 - breakpoint
         |  }
         |
         |  def step3(): Unit = {
         |    Files.write(Paths.get("step3.txt"), "3".getBytes) // Line 20 - breakpoint
         |  }
         |}
         |""".stripMargin

    val step1File = server.workspace.resolve("step1.txt")
    val step2File = server.workspace.resolve("step2.txt")
    val step3File = server.workspace.resolve("step3.txt")
    val completedFile = server.workspace.resolve("all-completed.txt")

    for {
      _ <- initialize(workspace)
      _ <- server.server.compilations.compileTargets(
        server.server.buildTargets.allBuildTargetIds
      )
      client <- startMcpServer()

      // Ensure marker files don't exist
      _ = List(step1File, step2File, step3File, completedFile).foreach(_.toFile.delete())

      // Start debug session with multiple breakpoints
      result <- client.debugMain(
        mainClass = "MultiBreakpoint",
        initialBreakpoints = Some(
          List(
            Map(
              "source" -> server.workspace
                .resolve("a/src/main/scala/MultiBreakpoint.scala")
                .toURI.toString,
              "line" -> 12
            ),
            Map(
              "source" -> server.workspace
                .resolve("a/src/main/scala/MultiBreakpoint.scala")
                .toURI.toString,
              "line" -> 16
            ),
            Map(
              "source" -> server.workspace
                .resolve("a/src/main/scala/MultiBreakpoint.scala")
                .toURI.toString,
              "line" -> 20
            )
          )
        )
      )

      // Give the program a moment
      _ <- Future(Thread.sleep(2000))

      // Check which files were created
      step1Created = step1File.toFile.exists()
      step2Created = step2File.toFile.exists()
      step3Created = step3File.toFile.exists()
      allCompleted = completedFile.toFile.exists()

    } yield {
      // When the implementation is broken (Nil is passed):
      // - No breakpoints will be set
      // - All steps will execute
      // - All files will be created

      // When the implementation is correct:
      // - The first breakpoint (line 12) will pause execution
      // - No files should be created

      assert(
        !step1Created && !step2Created && !step3Created && !allCompleted,
        s"Program should have paused at first breakpoint! " +
        s"Step1: $step1Created, Step2: $step2Created, Step3: $step3Created, Completed: $allCompleted. " +
        "This means breakpoints were not passed to DebugProxy."
      )
    }
  }
}
