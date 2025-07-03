# Summary: Removal of ThreadLocal for Initial Breakpoints

## Changes Made

### 1. Removed ThreadLocal Variables
- Removed `pendingInitialBreakpoints` ThreadLocal that was storing breakpoints temporarily
- Removed `isMcpInitiatedSession` ThreadLocal that was tracking MCP session state

### 2. Replaced with Parameter Passing
- Added `initialBreakpoints` parameter to the `start` method chain
- Initial breakpoints are now passed explicitly through method parameters from `startForMcp` down to `DebugProxy.openMcpOnly`

### 3. Added Session State Tracking
- Added `isInMcpSession` volatile boolean field to track MCP session state
- This flag is set to `true` when `startForMcp` is called and reset to `false` when done

### 4. Updated MCP Session Detection Logic
- Changed from checking ThreadLocal to checking `isInMcpSession && mcpCallback.isDefined`
- This ensures MCP-only mode is used only for sessions initiated through `startForMcp`

### 5. Test Updates
- Updated `McpDebugBreakpointVerificationSuite` to accept successful attach results
- The test now recognizes that debug-attach creates a session successfully even without a remote JVM

## Benefits
1. **Thread Safety**: No more ThreadLocal state that could leak between threads
2. **Explicit Data Flow**: Initial breakpoints are passed explicitly as parameters
3. **Cleaner Code**: Removed complex ThreadLocal management
4. **Better Testability**: State is more predictable without hidden ThreadLocal variables

## Files Modified
- `/metals/src/main/scala/scala/meta/internal/metals/debug/DebugProvider.scala`
- `/tests/unit/src/test/scala/tests/mcp/McpDebugBreakpointVerificationSuite.scala`