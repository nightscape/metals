# Debug Initial Breakpoints - Feature Complete

## Overview
Successfully implemented the ability to set initial breakpoints when starting debug sessions through MCP tools (`debug-main`, `debug-test`, `debug-attach`). This solves the problem of short-lived applications terminating before breakpoints can be set manually.

## Feature Description
The `initialBreakpoints` parameter allows users to specify breakpoints that will be automatically set immediately after the debug session initializes but before the program starts executing. This ensures that even fast-terminating programs can be debugged effectively.

### Special Features
1. **Regular Breakpoints**: Standard line-based breakpoints with optional conditions and log messages
2. **Immediate Suspension**: Special `startup://suspend` URI with line 0 to pause execution immediately after starting

## API Changes

### MCP Tool Schema Updates
All three debug tools now accept an `initialBreakpoints` parameter:

```json
{
  "initialBreakpoints": {
    "type": "array",
    "items": {
      "type": "object",
      "properties": {
        "source": {
          "type": "string",
          "description": "Source file path as URI. Use startup://suspend with a line of 0 to immediately suspend on startup"
        },
        "line": { "type": "integer", "description": "Line number" },
        "condition": { "type": "string", "description": "Optional breakpoint condition" },
        "logMessage": { "type": "string", "description": "Optional log message" }
      },
      "required": ["line"]
    },
    "description": "Breakpoints to set before starting execution"
  }
}
```

## Usage Examples

### Setting Initial Breakpoints
```javascript
// Debug-main with breakpoints
{
  "mainClass": "com.example.Main",
  "initialBreakpoints": [
    {
      "source": "/workspace/src/main/scala/Main.scala",
      "line": 10
    },
    {
      "source": "/workspace/src/main/scala/Utils.scala",
      "line": 25,
      "condition": "x > 100",
      "logMessage": "x value is {x}"
    }
  ]
}
```

### Immediate Suspension
```javascript
// Pause immediately on startup
{
  "mainClass": "com.example.QuickExit",
  "initialBreakpoints": [
    {
      "source": "startup://suspend",
      "line": 0
    }
  ]
}
```

### Debug Attach with Breakpoints
```javascript
{
  "port": 5005,
  "module": "core",
  "initialBreakpoints": [
    {
      "source": "jar:file:///path/to/lib.jar!/com/example/Service.class",
      "line": 42
    }
  ]
}
```

## Implementation Details

### Architecture
1. **MCP Layer** (MetalsMcpServer.scala): Extracts breakpoints from tool arguments
2. **Provider Layer** (DebugProvider.scala): Stores breakpoints in thread-local storage
3. **Proxy Layer** (DebugProxy.scala): Sets breakpoints after DAP initialization

### Key Design Decisions
1. **Thread-Local Storage**: Used to pass breakpoints through the async debug session creation
2. **Post-Initialization Setting**: Breakpoints are set after the debug adapter initializes
3. **Special URI Handling**: `startup://suspend` triggers a pause request after 500ms delay

## Testing Recommendations
1. Create test cases for short-lived applications
2. Test conditional breakpoints and log messages
3. Verify attach scenarios with JAR sources
4. Test the immediate suspension feature
5. Ensure breakpoints work across multiple files

## Related Files
- [PLAN.md](1-debug-initial-breakpoints-PLAN.md) - Original design and planning
- [PROGRESS.md](1-debug-initial-breakpoints-PROGRESS.md) - Implementation progress tracking

## Future Enhancements
1. Support for function breakpoints
2. Support for exception breakpoints
3. Better handling of invalid breakpoint locations
4. Integration with VS Code's stopOnEntry configuration