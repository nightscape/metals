# Debug Initial Breakpoints - Progress

## Progress Log

### 2025-07-04: Feature Planning
- Created feature documentation structure
- Analyzed two implementation approaches
- Selected Option 1: `initialBreakpoints` parameter
- Researched existing test infrastructure

## Key Findings

### Existing Test Infrastructure
1. **Debug Testing Base Classes**:
   - `BaseBreakpointDapSuite` - for breakpoint testing
   - `BaseDapSuite` - for DAP protocol testing
   - `DebugWorkspaceLayout` - for defining test workspaces

2. **MCP Testing Base Classes**:
   - `McpTestUtils` - MCP testing utilities
   - `McpTestClient` - Client for testing MCP tools
   - `McpRunTestSuite` - Example test implementation

3. **Remote Debug Testing**:
   - `RemoteServer` - Handles debug attach scenarios
   - `TestDebugger` - Test harness for debug sessions

## Implementation Checklist
- [x] Update debug tool schemas
- [x] Implement breakpoint handling in debugProvider
- [x] Add initialBreakpoints to debug-main
- [x] Add initialBreakpoints to debug-test
- [x] Add initialBreakpoints to debug-attach
- [x] Implement suspend/pause functionality
- [ ] Create comprehensive test suite
- [ ] Update documentation

## Challenges & Decisions
- Need to handle breakpoint setting before session fully initializes
- Decision: Use existing DAP setBreakpoints infrastructure
- Challenge: Testing debug-attach requires remote JVM process
- Design decision: Use special URI `startup://suspend` with line 0 for immediate suspension

## Implementation Details

### Architecture Overview
1. MCP tools (`debug-main`, `debug-test`, `debug-attach`) accept `initialBreakpoints` parameter
2. Pass breakpoints through `debugProvider.startForMcp` 
3. DebugProxy handles setting breakpoints after initialization
4. Special handling for `startup://suspend` to pause immediately

### Implementation Summary

#### Changes Made:
1. **MetalsMcpServer.scala**: 
   - Added `initialBreakpoints` parameter to `debug-main`, `debug-test`, and `debug-attach` tool schemas
   - Extract and pass breakpoints to `debugProvider.startForMcp`
   
2. **DebugProvider.scala**:
   - Added `pendingInitialBreakpoints` ThreadLocal storage
   - Updated `startForMcp` to accept initial breakpoints
   - Pass breakpoints to DebugProxy during creation
   
3. **DebugProxy.scala**:
   - Added `initialBreakpoints` parameter to constructor
   - Added `setInitialBreakpoints()` method that runs after initialization
   - Special handling for `startup://suspend` to pause execution
   - Regular breakpoints are set via SetBreakpoints requests

### Special Features:
- **startup://suspend**: Use `source: "startup://suspend"` with `line: 0` to pause immediately after starting
- **Conditional breakpoints**: Support for condition and logMessage properties
- **Multiple breakpoints**: Can set multiple breakpoints across different files