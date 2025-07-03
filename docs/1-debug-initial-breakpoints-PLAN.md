# Debug Initial Breakpoints Feature Plan

## Problem Statement
When using MCP debug tools (`debug-main`, `debug-test`, `debug-attach`), applications often quit too quickly to set breakpoints or pause execution, making debugging impossible for short-lived programs.

## Solution Comparison

### Option 1: `initialBreakpoints` Parameter
Add an `initialBreakpoints` parameter directly to the debug start tools.

**Pros:**
- Explicit and self-documenting API
- Atomic operation - breakpoints are guaranteed to be set before execution starts
- No state management needed between commands
- Clear error handling if breakpoints are invalid
- Follows typical debugger API patterns (similar to VS Code's launch.json)

**Cons:**
- Requires modifying three tool definitions
- More complex parameter schemas
- Duplicates some functionality from `debug-breakpoints` tool

### Option 2: Queue Commands with `next-session` Session ID
Allow `debug-pause` and `debug-breakpoints` to accept a special `next-session` ID that queues commands for the next debug session.

**Pros:**
- Reuses existing tools without modification
- More flexible - any debug command could potentially be queued
- Maintains separation of concerns
- Could extend to other pre-session commands in the future

**Cons:**
- Implicit behavior - less discoverable
- Requires state management to queue commands
- Complex error handling (what if session never starts?)
- Race conditions possible between queuing and session start
- Cleanup issues if queued commands are never used
- Unclear semantics if multiple sessions start

## Recommendation

**Recommended: Option 1 - `initialBreakpoints` Parameter**

This approach is cleaner, more predictable, and aligns with established debugger patterns. The explicit parameter makes the intent clear and ensures breakpoints are set atomically with session creation.

## Implementation Plan

### 1. Refactoring (if needed)
- Extract common breakpoint handling logic into a shared method
- Ensure debugProvider can handle initial breakpoints during session creation

### 2. Schema Updates
Add `initialBreakpoints` parameter to debug tools:
```json
{
  "initialBreakpoints": {
    "type": "array",
    "items": {
      "type": "object",
      "properties": {
        "source": {
          "type": "string",
          "description": "Source file path as URI. Use startup://suspend with a `line` of `0` to immediately suspend on startup"
        },
        "line": {
          "type": "integer",
          "description": "Line number"
        },
        "condition": {
          "type": "string",
          "description": "Optional breakpoint condition"
        },
        "logMessage": {
          "type": "string",
          "description": "Optional log message"
        }
      },
      "required": ["line"]
    },
    "description": "Breakpoints to set before starting execution"
  }
}
```

### 3. Implementation Steps
1. Modify `createDebugMainTool` to accept and process `initialBreakpoints`
2. Modify `createDebugTestTool` to accept and process `initialBreakpoints`
3. Modify `createDebugAttachTool` to accept and process `initialBreakpoints`
4. Update `debugProvider.startForMcp` to handle initial breakpoints
5. Add special handling for `startup://suspend`, line `0` breakpoints to pause immediately

### 4. Testing Requirements

#### Test Infrastructure to Reuse
- **Base Classes**: `BaseLspSuite` with `McpTestUtils` for MCP testing
- **Debug Testing**: `BaseBreakpointDapSuite` for breakpoint functionality
- **Remote Testing**: `RemoteServer` and `TestDebugger` for attach scenarios

#### Test Suite Structure
Create `/tests/unit/src/test/scala/tests/mcp/McpDebugInitialBreakpointsSuite.scala`:

```scala
class McpDebugInitialBreakpointsSuite extends BaseLspSuite("mcp-debug-initial-breakpoints")
  with McpTestUtils {

  test("debug-main with initial breakpoints") {
    val workspace = """|/a/src/main/scala/Main.scala
                       |object Main {
                       |  def main(args: Array[String]): Unit = {
                       |    println("Starting") // line 3
                       |    Thread.sleep(100)   // line 4
                       |    println("Done")     // line 5
                       |  }
                       |}""".stripMargin

    for {
      _ <- initialize(workspace)
      client <- startMcpServer()
      // Start debug session with initial breakpoints
      result <- client.callTool("debug-main", Map(
        "mainClass" -> "Main",
        "initialBreakpoints" -> List(Map(
          "source" -> "/a/src/main/scala/Main.scala",
          "line" -> 3
        ))
      ))
      sessionId <- extractSessionId(result)
      // Verify breakpoint was hit
      threads <- client.callTool("debug-threads", Map("sessionId" -> sessionId))
    } yield assert(threads.contains("stopped"))
  }
}
```

#### Specific Test Cases

1. **Short-lived Main Program**
   - Program that exits immediately without breakpoints
   - Verify initial breakpoint catches execution before exit

2. **Fast Test Suite**
   - Test that completes in milliseconds
   - Verify can pause before test execution

3. **Debug Attach Testing**
   ```scala
   test("debug-attach with initial breakpoints") {
     // Start a remote JVM process with debug port
     val remoteProcess = startRemoteJVM(
       mainClass = "RemoteApp",
       debugPort = 5005,
       suspend = false // Let it run
     )

     // Attach with initial breakpoints
     val result = client.callTool("debug-attach", Map(
       "port" -> 5005,
       "initialBreakpoints" -> List(Map(
         "source" -> "jar:file:///.../RemoteApp.class",
         "line" -> 10
       ))
     ))
   }
   ```

4. **Suspend/Pause Testing**
   ```scala
   test("initial breakpoint with suspend=true") {
     val result = client.callTool("debug-main", Map(
       "mainClass" -> "Main",
       "initialBreakpoints" -> List(Map(
         "source" -> "startup://suspend",  // Special breakpoint to pause immediately
         "line" -> 0
       ))
     ))
     // Verify execution is paused at first instruction
   }
   ```

5. **Error Cases**
   - Invalid source path
   - Invalid line numbers
   - Malformed breakpoint conditions
   - Session start failure after breakpoint setup

#### Helper Methods
```scala
// From existing test infrastructure
def startRemoteJVM(mainClass: String, debugPort: Int, suspend: Boolean): Process
def waitForBreakpoint(client: McpTestClient, sessionId: String): Future[StoppedEvent]
def verifyBreakpointSet(response: SetBreakpointsResponse, line: Int): Unit
```

### 5. Error Handling
- Invalid source paths
- Invalid line numbers
- Syntax errors in conditions
- Session start failures after breakpoints set
