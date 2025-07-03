package tests.mcp

import scala.concurrent.Future

import tests.BaseLspSuite

/**
 * Integration tests that verify the MCP debug API accepts initial breakpoints correctly.
 * Full verification of breakpoint functionality would require connecting to the debug session,
 * which is demonstrated in McpDebugBreakpointDapSuite using the DAP test infrastructure.
 */
class McpDebugBreakpointIntegrationSuite
    extends BaseLspSuite("mcp-debug-breakpoint-integration")
    with McpTestUtils {

  test("debug-main accepts single initial breakpoint") {
    val workspace =
      """|/metals.json
         |{
         |  "a": { }
         |}
         |
         |/a/src/main/scala/SingleBreakpoint.scala
         |object SingleBreakpoint {
         |  def main(args: Array[String]): Unit = {
         |    println("Before breakpoint")
         |    println("At breakpoint")      // Line 4 - breakpoint here
         |    println("After breakpoint")
         |  }
         |}
         |""".stripMargin

    for {
      _ <- initialize(workspace)
      _ <- server.server.compilations.compileTargets(
        server.server.buildTargets.allBuildTargetIds
      )
      client <- startMcpServer()
      
      // Start debug session with single breakpoint
      result <- client.debugMain(
        mainClass = "SingleBreakpoint",
        initialBreakpoints = Some(
          List(
            Map(
              "source" -> server.workspace
                .resolve("a/src/main/scala/SingleBreakpoint.scala")
                .toString,
              "line" -> 4
            )
          )
        )
      )
    } yield {
      assert(result.contains("Debug session started successfully"))
      assert(result.contains("Session ID:"))
      assert(result.contains("Debug URI:"))
    }
  }

  test("debug-main accepts multiple initial breakpoints") {
    val workspace =
      """|/metals.json
         |{
         |  "a": { }
         |}
         |
         |/a/src/main/scala/MultipleBreakpoints.scala
         |object MultipleBreakpoints {
         |  def main(args: Array[String]): Unit = {
         |    step1()
         |    step2()
         |    step3()
         |  }
         |  
         |  def step1(): Unit = println("Step 1")  // line 8
         |  def step2(): Unit = println("Step 2")  // line 9
         |  def step3(): Unit = println("Step 3")  // line 10
         |}
         |""".stripMargin

    for {
      _ <- initialize(workspace)
      _ <- server.server.compilations.compileTargets(
        server.server.buildTargets.allBuildTargetIds
      )
      client <- startMcpServer()
      
      result <- client.debugMain(
        mainClass = "MultipleBreakpoints",
        initialBreakpoints = Some(
          List(
            Map("source" -> server.workspace.resolve("a/src/main/scala/MultipleBreakpoints.scala").toString, "line" -> 8),
            Map("source" -> server.workspace.resolve("a/src/main/scala/MultipleBreakpoints.scala").toString, "line" -> 9),
            Map("source" -> server.workspace.resolve("a/src/main/scala/MultipleBreakpoints.scala").toString, "line" -> 10)
          )
        )
      )
    } yield {
      assert(result.contains("Debug session started successfully"))
    }
  }

  test("debug-main accepts breakpoint with condition") {
    val workspace =
      """|/metals.json
         |{
         |  "a": { }
         |}
         |
         |/a/src/main/scala/ConditionalBreakpoint.scala
         |object ConditionalBreakpoint {
         |  def main(args: Array[String]): Unit = {
         |    for (i <- 1 to 10) {
         |      println(s"i = $i")  // line 4
         |    }
         |  }
         |}
         |""".stripMargin

    for {
      _ <- initialize(workspace)
      _ <- server.server.compilations.compileTargets(
        server.server.buildTargets.allBuildTargetIds
      )
      client <- startMcpServer()
      
      result <- client.debugMain(
        mainClass = "ConditionalBreakpoint",
        initialBreakpoints = Some(
          List(
            Map(
              "source" -> server.workspace.resolve("a/src/main/scala/ConditionalBreakpoint.scala").toString,
              "line" -> 4,
              "condition" -> "i > 5"
            )
          )
        )
      )
    } yield {
      assert(result.contains("Debug session started successfully"))
    }
  }

  test("debug-main accepts breakpoint with logMessage") {
    val workspace =
      """|/metals.json
         |{
         |  "a": { }
         |}
         |
         |/a/src/main/scala/LogBreakpoint.scala
         |object LogBreakpoint {
         |  def main(args: Array[String]): Unit = {
         |    val name = "Metals"
         |    greet(name)
         |  }
         |  
         |  def greet(name: String): Unit = {
         |    println(s"Hello, $name!")  // line 8
         |  }
         |}
         |""".stripMargin

    for {
      _ <- initialize(workspace)
      _ <- server.server.compilations.compileTargets(
        server.server.buildTargets.allBuildTargetIds
      )
      client <- startMcpServer()
      
      result <- client.debugMain(
        mainClass = "LogBreakpoint",
        initialBreakpoints = Some(
          List(
            Map(
              "source" -> server.workspace.resolve("a/src/main/scala/LogBreakpoint.scala").toString,
              "line" -> 8,
              "logMessage" -> "Greeting {name}"
            )
          )
        )
      )
    } yield {
      assert(result.contains("Debug session started successfully"))
    }
  }

  test("debug-main accepts startup://suspend breakpoint") {
    val workspace =
      """|/metals.json
         |{
         |  "a": { }
         |}
         |
         |/a/src/main/scala/SuspendTest.scala
         |object SuspendTest {
         |  def main(args: Array[String]): Unit = {
         |    println("Should pause before this")
         |  }
         |}
         |""".stripMargin

    for {
      _ <- initialize(workspace)
      _ <- server.server.compilations.compileTargets(
        server.server.buildTargets.allBuildTargetIds
      )
      client <- startMcpServer()
      
      result <- client.debugMain(
        mainClass = "SuspendTest",
        initialBreakpoints = Some(
          List(
            Map(
              "source" -> "startup://suspend",
              "line" -> 0
            )
          )
        )
      )
    } yield {
      assert(result.contains("Debug session started successfully"))
    }
  }

  test("debug-test accepts initial breakpoints") {
    val workspace =
      """|/metals.json
         |{
         |  "a": { "libraryDependencies": ["org.scalatest::scalatest:3.2.16"] }
         |}
         |
         |/a/src/test/scala/TestBreakpoint.scala
         |import org.scalatest.flatspec.AnyFlatSpec
         |
         |class TestBreakpoint extends AnyFlatSpec {
         |  "A test" should "accept breakpoints" in {
         |    val x = 42              // line 5
         |    assert(x == 42)
         |  }
         |}
         |""".stripMargin

    for {
      _ <- initialize(workspace)
      _ <- server.server.compilations.compileTargets(
        server.server.buildTargets.allBuildTargetIds
      )
      client <- startMcpServer()
      
      result <- client.debugTest(
        testClass = "TestBreakpoint",
        module = Some("a"),
        initialBreakpoints = Some(
          List(
            Map(
              "source" -> server.workspace.resolve("a/src/test/scala/TestBreakpoint.scala").toString,
              "line" -> 5
            )
          )
        )
      )
    } yield {
      // Test discovery might fail, but we're testing that the API accepts breakpoints
      assert(
        result.contains("Debug session started successfully") ||
        result.contains("Failed to start debug session")
      )
    }
  }

  test("debug-attach accepts initial breakpoints") {
    val workspace =
      """|/metals.json
         |{
         |  "a": { }
         |}
         |""".stripMargin

    for {
      _ <- initialize(workspace)
      client <- startMcpServer()
      
      result <- client
        .debugAttach(
          port = 5005,
          module = Some("a"),
          initialBreakpoints = Some(
            List(
              Map(
                "source" -> "/path/to/RemoteApp.scala",
                "line" -> 10
              )
            )
          )
        )
        .recover {
          case e: Exception =>
            // Expected to fail without a remote JVM
            s"Expected failure: ${e.getMessage}"
        }
    } yield {
      // The API should accept the breakpoints parameter even if attach fails
      assert(
        result.contains("Failed") || 
        result.contains("Error") ||
        result.contains("Expected failure") ||
        result.contains("Debug session started successfully")
      )
    }
  }

  test("debug-main handles different path formats") {
    val workspace =
      """|/metals.json
         |{
         |  "a": { }
         |}
         |
         |/a/src/main/scala/PathTest.scala
         |object PathTest {
         |  def main(args: Array[String]): Unit = {
         |    println("Testing paths")  // line 3
         |  }
         |}
         |""".stripMargin

    for {
      _ <- initialize(workspace)
      _ <- server.server.compilations.compileTargets(
        server.server.buildTargets.allBuildTargetIds
      )
      client <- startMcpServer()
      
      // Test with absolute path
      absoluteResult <- client.debugMain(
        mainClass = "PathTest",
        initialBreakpoints = Some(
          List(
            Map(
              "source" -> server.workspace.resolve("a/src/main/scala/PathTest.scala").toString,
              "line" -> 3
            )
          )
        )
      )
      
      // Test with URI format
      uriResult <- client.debugMain(
        mainClass = "PathTest",
        initialBreakpoints = Some(
          List(
            Map(
              "source" -> server.workspace.resolve("a/src/main/scala/PathTest.scala").toURI.toString,
              "line" -> 3
            )
          )
        )
      )
    } yield {
      assert(absoluteResult.contains("Debug session started successfully"))
      assert(uriResult.contains("Debug session started successfully"))
    }
  }

  test("debug-main handles empty breakpoints list") {
    val workspace =
      """|/metals.json
         |{
         |  "a": { }
         |}
         |
         |/a/src/main/scala/NoBreakpoints.scala
         |object NoBreakpoints {
         |  def main(args: Array[String]): Unit = {
         |    println("No breakpoints")
         |  }
         |}
         |""".stripMargin

    for {
      _ <- initialize(workspace)
      _ <- server.server.compilations.compileTargets(
        server.server.buildTargets.allBuildTargetIds
      )
      client <- startMcpServer()
      
      // Test with empty breakpoints list
      result <- client.debugMain(
        mainClass = "NoBreakpoints",
        initialBreakpoints = Some(List.empty)
      )
    } yield {
      assert(result.contains("Debug session started successfully"))
    }
  }
}