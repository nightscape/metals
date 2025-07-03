package tests.mcp

import scala.concurrent.Future

import scala.meta.internal.metals.debug.DebugStep._

import tests.QuickBuildInitializer
import tests.QuickBuildLayout

/**
 * Tests that verify MCP initial breakpoints functionality using the existing DAP test infrastructure.
 * This extends the base breakpoint test suite to add MCP-specific tests.
 */
class McpDebugBreakpointDapSuite
    extends tests.debug.BaseBreakpointDapSuite(
      "mcp-debug-breakpoint-dap",
      QuickBuildInitializer,
      QuickBuildLayout,
    )
    with McpTestUtils {

  test("mcp-initial-breakpoint-via-api") {
    val workspace =
      """|/metals.json
         |{
         |  "a": { }
         |}
         |
         |/a/src/main/scala/Main.scala
         |object Main {
         |  def main(args: Array[String]): Unit = {
         |    println("Before breakpoint")
         |    println("At breakpoint")      // Line 4 - breakpoint here
         |    println("After breakpoint")
         |    System.exit(0)
         |  }
         |}
         |""".stripMargin

    for {
      _ <- initialize(workspace)
      _ <- server.server.compilations.compileTargets(
        server.server.buildTargets.allBuildTargetIds
      )
      mcpClient <- startMcpServer()
      
      // Use MCP to start debug session with initial breakpoint
      result <- mcpClient.debugMain(
        mainClass = "Main",
        module = Some("a"),
        initialBreakpoints = Some(
          List(
            Map(
              "source" -> server.workspace
                .resolve("a/src/main/scala/Main.scala")
                .toString,
              "line" -> 4
            )
          )
        )
      )
    } yield {
      assert(result.contains("Debug session started successfully"))
      assert(result.contains("Session ID:"))
    }
  }

  test("mcp-multiple-initial-breakpoints") {
    val workspace =
      """|/metals.json
         |{
         |  "a": { }
         |}
         |
         |/a/src/main/scala/Main.scala
         |object Main {
         |  def main(args: Array[String]): Unit = {
         |    foo()
         |    bar()
         |    System.exit(0)
         |  }
         |  
         |  def foo(): Unit = {
         |    println("In foo")    // Line 9
         |  }
         |  
         |  def bar(): Unit = {
         |    println("In bar")    // Line 13
         |  }
         |}
         |""".stripMargin

    for {
      _ <- initialize(workspace)
      _ <- server.server.compilations.compileTargets(
        server.server.buildTargets.allBuildTargetIds
      )
      mcpClient <- startMcpServer()
      
      // Set multiple initial breakpoints via MCP
      result <- mcpClient.debugMain(
        mainClass = "Main",
        module = Some("a"),
        initialBreakpoints = Some(
          List(
            Map(
              "source" -> server.workspace
                .resolve("a/src/main/scala/Main.scala")
                .toString,
              "line" -> 9
            ),
            Map(
              "source" -> server.workspace
                .resolve("a/src/main/scala/Main.scala")
                .toString,
              "line" -> 13
            )
          )
        )
      )
    } yield {
      assert(result.contains("Debug session started successfully"))
    }
  }

  test("mcp-conditional-breakpoint") {
    val workspace =
      """|/metals.json
         |{
         |  "a": { }
         |}
         |
         |/a/src/main/scala/Main.scala
         |object Main {
         |  def main(args: Array[String]): Unit = {
         |    for (i <- 1 to 5) {
         |      println(s"i = $i")   // Line 4 - conditional breakpoint
         |    }
         |    System.exit(0)
         |  }
         |}
         |""".stripMargin

    for {
      _ <- initialize(workspace)
      _ <- server.server.compilations.compileTargets(
        server.server.buildTargets.allBuildTargetIds
      )
      mcpClient <- startMcpServer()
      
      // Set conditional breakpoint via MCP
      result <- mcpClient.debugMain(
        mainClass = "Main",
        module = Some("a"),
        initialBreakpoints = Some(
          List(
            Map(
              "source" -> server.workspace
                .resolve("a/src/main/scala/Main.scala")
                .toString,
              "line" -> 4,
              "condition" -> "i > 3"
            )
          )
        )
      )
    } yield {
      assert(result.contains("Debug session started successfully"))
    }
  }

  test("mcp-log-message-breakpoint") {
    val workspace =
      """|/metals.json
         |{
         |  "a": { }
         |}
         |
         |/a/src/main/scala/Main.scala
         |object Main {
         |  def main(args: Array[String]): Unit = {
         |    val name = "Metals"
         |    println(s"Hello, $name!")  // Line 4 - log message breakpoint
         |    System.exit(0)
         |  }
         |}
         |""".stripMargin

    for {
      _ <- initialize(workspace)
      _ <- server.server.compilations.compileTargets(
        server.server.buildTargets.allBuildTargetIds
      )
      mcpClient <- startMcpServer()
      
      // Set log message breakpoint via MCP
      result <- mcpClient.debugMain(
        mainClass = "Main",
        module = Some("a"),
        initialBreakpoints = Some(
          List(
            Map(
              "source" -> server.workspace
                .resolve("a/src/main/scala/Main.scala")
                .toString,
              "line" -> 4,
              "logMessage" -> "Executing with name: {name}"
            )
          )
        )
      )
    } yield {
      assert(result.contains("Debug session started successfully"))
    }
  }

  test("mcp-startup-suspend") {
    val workspace =
      """|/metals.json
         |{
         |  "a": { }
         |}
         |
         |/a/src/main/scala/Main.scala
         |object Main {
         |  def main(args: Array[String]): Unit = {
         |    println("Should pause before this")
         |    System.exit(0)
         |  }
         |}
         |""".stripMargin

    for {
      _ <- initialize(workspace)
      _ <- server.server.compilations.compileTargets(
        server.server.buildTargets.allBuildTargetIds
      )
      mcpClient <- startMcpServer()
      
      // Use startup://suspend to pause immediately
      result <- mcpClient.debugMain(
        mainClass = "Main",
        module = Some("a"),
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
}