- [ ] Implement approach with less MCP-specific functionality
  - [ ] Allow getting a `Debugger` from `DebugProvider` in `MetalsMcpServer`
- [ ] Allow setting initial breakpoints
  - [ ] Find out when `suspend=y` actually resumes the session, at connect or after some `configurationDone`
    - [ ] Have Perplexity create a Scala code sample to run in `scala-cli`
  - [ ] Find out where `configurationDone` is called
  - [ ] Find a place where it would be natural to insert breakpoints before session is resumed
  - [ ] Pass initial breakpoints through to the right place without `ThreadLocal`
- [ ] Break the debugger inception
  - I want Claude to attach to an MCP session X that is attached to the test execution
  - The test execution has another MCP session Y

Looking back at this debugging session, several features would have been extremely helpful:

1. Source Code Navigation During Debugging

  - Feature: Ability to see the actual source code at breakpoint locations
  - Why helpful: I had to manually search for line numbers and files. Being able to see the code context directly when at a breakpoint would have
   made understanding the execution flow much easier.

2. Conditional Breakpoints with Hit Counts

  - Feature: Set breakpoints that only trigger after N hits or when specific conditions are met
  - Why helpful: When debugging the "running same main class multiple times" test, I wanted to catch only the second or third iteration to see
  the reuse issue.

3. Call Stack with Method Arguments

  - Feature: Show method arguments and their values in the stack trace
  - Why helpful: The stack traces only showed method names. Seeing what parameters were passed (like session IDs, socket addresses) would have
  provided crucial context.

4. Execution History/Time Travel Debugging

  - Feature: Ability to step backwards or see a history of recent execution
  - Why helpful: When the test got stuck, being able to see what happened just before would have helped identify where it started hanging.

5. Thread State Visualization

  - Feature: Visual representation of thread states and their relationships (waiting on, blocked by, etc.)
  - Why helpful: All threads were "parked" but I couldn't see what they were waiting for or their dependencies.

6. Automatic Deadlock Detection

  - Feature: Detect and report deadlocks with information about the resources involved
  - Why helpful: The test appeared to be in a deadlock situation, but I had to infer this from all threads being parked.

7. Variable History/Watchers

  - Feature: Track how specific variables change over time
  - Why helpful: Monitoring the debugSessions map or socket states across multiple test iterations would have shown the pattern of the issue.

8. Better Integration Test Debugging

  - Feature: Special support for test framework debugging (showing test progress, current test method, assertions)
  - Why helpful: It was unclear which exact test was running or where in the test lifecycle we were stuck.

9. Network/Socket State Inspector

  - Feature: Show state of all sockets, connections, and their TIME_WAIT status
  - Why helpful: Since the issue was socket-related, seeing the actual socket states would have confirmed the SO_REUSEADDR fix was needed.

10. Log Correlation with Execution

  - Feature: Ability to correlate log output with specific code execution points
  - Why helpful: The debug output showed logs but I couldn't easily map them to where in the code they were generated.

11. Expression Evaluation with Side Effects Warning

  - Feature: Evaluate expressions but warn if they would cause side effects
  - Why helpful: I wanted to check various states but was concerned about affecting the running test.

12. Breakpoint Groups/Sets

  - Feature: Save and activate groups of breakpoints for different debugging scenarios
  - Why helpful: I set many breakpoints across multiple files - being able to enable/disable sets would have been more efficient.
