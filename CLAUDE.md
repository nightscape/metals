# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Metals is a Scala language server implementing the Language Server Protocol (LSP). It provides IDE features for Scala development across multiple editors including VS Code, Vim, Emacs, and others. The project is maintained by Scala Center and VirtusLab.

## Key Architecture Components

- **metals/** - Main language server module containing LSP implementation
  - `MetalsLanguageServer.scala` - Main entry point handling LSP lifecycle
  - `WorkspaceLspService.scala` - Manages multiple workspace folders
  - `MetalsLspService.scala` - Core service handling LSP requests per workspace
  - `Compilers.scala` - Client for presentation compilers
- **mtags/** - Presentation compiler for Scala 2 (cross-published for different Scala versions)
- **mtags-interfaces/** - Java interfaces for communication with presentation compiler
- **mtags-shared/** - Common utilities shared between presentation compilers
- **tests/** - Test suites organized by speed and scope (unit/, slow/, cross/)
- **sbt-metals/** - SBT plugin for BSP support and SemanticDB generation

The architecture uses SemanticDB for features like references and renames, and Build Server Protocol (BSP) for communication with build tools.

## Code Style
- **Immutable code & data-structures preferred** - Use immutable data structures by default. Use mutable if it makes the code much more concise or efficient. Same for `val` vs `var`. Shared mutable state (`var` fields on classes or `val c = collection.mutable.XYZ`) is very bad, shared global state is worst.
- **Law of Demeter** - When you see code like `a.b.c`, consider creating a method in the class of `a` that calls `b.c` to reduce coupling.
- **Don't swallow errors** - In most cases, just let exceptions be thrown. Don't program defensively, especially against programming errors.
- **Don't add unnecessary comments** - Comments are only useful if they explain something that cannot easily be derived from the code. One example is if code is written in a way that does not adhere to the usual coding style and the comment gives an explanation why (e.g. performance, work around a bug, ...)

## Essential Development Commands

### Running Tests

```bash
# Unit tests (moderately fast)
sbt unit/test
sbt "unit/testOnly tests.DefinitionSuite"
sbt 'unit/testOnly tests.DefinitionSuite -- "--tests=<test-name>"'

# Integration tests (slow)
sbt slow/test
sbt "slow/testOnly -- tests.sbt.*"

# Cross-version tests
sbt cross/test
sbt +cross/test  # All Scala versions

# Test with specific Scala version
sbt "++2.13.14 mtags/test"
```

### Local Development

```bash
# Publish locally for testing
sbt publishLocal
sbt quick-publish-local  # Faster for development

# Format code
./bin/scalafmt
./bin/scalafmt --diff --diff-branch main  # Check formatting

# Run specific module
sbt "metals/runMain scala.meta.metals.Main"
```

### Code Quality

```bash
# Run scalafix
sbt scalafixAll
sbt scalafixCheck  # Check without applying

# The project has a pre-push git hook that checks formatting
```

### Debugging

```bash
# Enable trace logging
touch .metals/lsp.trace.json   # LSP trace
touch .metals/bsp.trace.json   # BSP trace

# Watch logs
tail -f .metals/metals.log

# For JVM debugging, add to server properties:
# -agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=5005,quiet=y
```

## Test Organization

Tests are organized by category and speed:
- **unit/** - Fast LSP tests using Bloop
- **slow/** - Integration tests for different build tools (sbt, Maven, Gradle, Mill, Bazel)
- **cross/** - Cross-version tests for Scala 2 presentation compiler

Test sharding is used in CI for performance. Test workspaces are generated in `tests/.tmp/` for debugging.

## Important Project Conventions

1. **Versioning**: Uses semantic versioning. Version is in `build.sbt` as `localSnapshotVersion`
2. **Scala Versions**: Supports 2.11, 2.12, 2.13, and Scala 3
3. **Code Style**: Enforced via scalafmt 3.9.4 (config in `.scalafmt.conf`)
4. **Commit Messages**: Follow conventional commits format: `<type>[optional scope]: <description>`
5. **Logging**: Use `pprint.log()` for debugging

## Build Tool Support

Metals supports multiple build tools through BSP:
- sbt (primary)
- Maven
- Gradle
- Mill
- Bazel
- Scala CLI

Each build tool has specific integration tests in `tests/slow/src/test/scala/tests/`.

## Recent Development Focus

- MCP (Model Context Protocol) integration for AI tools
- Performance optimizations (e.g., compilation unit cleanup)
- Build tool improvements and BSP enhancements
- Documentation updates

## MCP (Model Context Protocol) Integration

Metals includes comprehensive MCP server functionality that exposes debugging capabilities to AI tools. The MCP integration allows external tools to interact with Metals' debug functionality programmatically.

### MCP Debug Tools Available

There is a `metals` MCP running which you can use to check and use the available commands.

### MCP Debug Development Workflow

When developing MCP debug features:

1. **Publish Changes**:
   ```bash
   sbt quick-publish-local
   ```

2. **Restart Metals Server**:
   ```bash
   # Kill existing Metals processes
   pkill -f "scala.meta.metals.Main" && sleep 10
   ```
3. **Terminate and auto-restart `claude` Process**

   When the `metals` command line interface has been restarted by VS Code,
   all connections to it from your `claude` process become unusable.
   To work around that the user runs your `claude` process in a auto-restart loop,
   and you can kill your parent process to be respawned.

   Here's a self-termination one-liner: `kill $PPID`

4. **Test via MCP**:
   - Use `metals` MCP tool calls to debug Metals itself
   - Check logs in `.metals/metals.log`
   - Enable DAP tracing if needed: `touch .metals/dap-server.trace.json`

### MCP Debug Resources

The MCP server provides debug output resources that can be accessed via the `ReadMcpResourceTool`:

- **`metals://debug/{sessionId}/output?outputType=stdout`** - Standard output from debug sessions
- **`metals://debug/{sessionId}/output?outputType=stderr`** - Standard error from debug sessions
- **`metals://debug/{sessionId}/output?regex=pattern`** - Filtered output matching regex pattern

These resources contain detailed logging from:
- Session initialization and workspace setup
- Bloop build server connections and compilation
- MCP server startup and tool registration
- Debug session lifecycle (creation, proxy setup, termination)
- LSP client commands like `metals-model-refresh`
- JSON-RPC message exchange for MCP protocol
- Stack traces and error information


## Key Files to Understand

1. `build.sbt` - Build configuration and custom commands
2. `project/V.scala` - All dependency versions
3. `metals/src/main/scala/scala/meta/internal/metals/MetalsLanguageServer.scala` - Main entry point
4. `metals/src/main/scala/scala/meta/internal/metals/MetalsLspService.scala` - Core LSP service
5. `tests/unit/src/test/scala/tests/BaseLspSuite.scala` - Base test infrastructure

## Test Execution Tips

- **Single Test Execution**:
  - The way to run a single test is like this `sbt unit/testOnly tests.mcp.McpDebugSuite -- "--tests=debug output persists after session ends"`
