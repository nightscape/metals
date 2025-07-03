# Debug Initial Breakpoints Implementation - Complete

## Summary

Successfully implemented the `initialBreakpoints` parameter for MCP debug tools (`debug-main`, `debug-test`, `debug-attach`) in Metals. This feature allows setting breakpoints before program execution starts, solving the issue of short-lived applications that exit too quickly for manual breakpoint setting.

## Key Changes

### 1. MCP Tool Definitions (MetalsMcpServer.scala)
- Added `initialBreakpoints` parameter to `debug-main`, `debug-test`, and `debug-attach` tool schemas
- Parameter accepts an array of breakpoint objects with:
  - `source`: File path URI or special `startup://suspend` URI
  - `line`: Line number (0 for startup://suspend)
  - `condition`: Optional breakpoint condition
  - `logMessage`: Optional log message

### 2. DebugProvider.scala
- Added `initialBreakpoints` parameter to `startForMcp` method
- Implemented thread-local storage for passing breakpoints through async operations
- Breakpoints are now passed to DebugProxy constructor

### 3. DebugProxy.scala
- Added `initialBreakpoints` parameter to constructor
- Implemented `setInitialBreakpoints()` method that:
  - Converts MCP breakpoint format to DAP SetBreakpointsArguments
  - Handles special `startup://suspend` URI by sending a pause request after 500ms
  - Sets regular breakpoints via DAP protocol

### 4. Test Implementation
Created comprehensive test suites to verify functionality:
- `McpDebugInitialBreakpointsSuite.scala`: Basic tests for API acceptance
- `McpDebugBreakpointsE2ESuite.scala`: End-to-end tests that verify breakpoints actually pause execution
- `McpDebugBreakpointsPassedSuite.scala`: Simple tests to verify parameter passing

The E2E tests were specifically designed to fail when the implementation is broken (e.g., passing Nil instead of the actual breakpoints).

## Special Features

### startup://suspend
The implementation supports a special breakpoint URI `startup://suspend` with line 0 that causes the debugger to pause immediately after establishing the debug session. This is particularly useful for very short-lived applications.

### Thread-Local Storage
To pass breakpoints through the async debug session creation flow, we use thread-local storage in DebugProvider. This ensures breakpoints are available when DebugProxy is constructed.

## Testing Approach

The user specifically requested tests that would fail when the implementation is broken. We achieved this by:
1. Creating E2E tests that check if programs pause at breakpoints
2. Using file markers to verify execution flow
3. Testing that `startup://suspend` actually prevents program execution

When the implementation was intentionally broken (passing Nil), the E2E tests correctly failed, proving they properly verify the functionality.

## Usage Example

```json
{
  "tool": "debug-main",
  "arguments": {
    "mainClass": "com.example.Main",
    "initialBreakpoints": [
      {
        "source": "file:///path/to/Main.scala",
        "line": 10
      },
      {
        "source": "file:///path/to/Utils.scala",
        "line": 25,
        "condition": "x > 5"
      },
      {
        "source": "startup://suspend",
        "line": 0
      }
    ]
  }
}
```

## Future Considerations

1. The current implementation sends breakpoints after initialization. Consider if breakpoints should be sent earlier in the DAP protocol flow.
2. Error handling for invalid breakpoint locations could be improved.
3. The 500ms delay for `startup://suspend` is hardcoded and could be made configurable.
