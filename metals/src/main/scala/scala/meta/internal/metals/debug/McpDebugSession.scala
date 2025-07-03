package scala.meta.internal.metals.debug

import java.lang.{Thread => JThread}

import scala.concurrent.ExecutionContext
import scala.concurrent.Future
import scala.reflect.ClassTag
import scala.meta.internal.metals.JsonParser.*
import com.google.gson.{JsonElement, JsonObject}
import org.eclipse.lsp4j.debug._
import org.eclipse.lsp4j.jsonrpc.debug.messages.DebugRequestMessage

/**
 * Provides a Future-based API for MCP tools to interact with debug sessions.
 *
 * This wrapper converts DAP operations into Future-based calls that work well
 * with MCP's request-response pattern.
 */
class McpDebugSession(
    val sessionId: String,
    adapter: McpEndpoint,
    initialBreakpoints: List[java.util.Map[String, Object]] = Nil,
)(implicit ec: ExecutionContext) {

  @volatile private var isInitialized = false
  private val initializationLock = new Object()

  private def ensureInitialized(): Future[Unit] = {
    if (isInitialized) {
      Future.successful(())
    } else {
      initializationLock.synchronized {
        if (isInitialized) {
          Future.successful(())
        } else {
          // Perform the DAP initialization with breakpoints
          initializeWithBreakpoints().map { _ =>
            isInitialized = true
            ()
          }
        }
      }
    }
  }

  private def sendRequest[T: ClassTag](
      method: String,
      params: Any,
  ): Future[T] = {
    val request = new DebugRequestMessage()
    request.setMethod(method)
    request.setParams(params.toJson)

    adapter.sendRequest(request).map { response =>
      if (response.getError != null) {
        throw new RuntimeException(
          s"Debug request failed: ${response.getError.getMessage}"
        )
      }
      val result = response.getResult
      result match {
        case jsonObject: JsonObject => jsonObject.as[T].get
        case _ => result.asInstanceOf[T]
      }
    }
  }

  def continue(args: ContinueArguments): Future[ContinueResponse] = {
    sendRequest[ContinueResponse]("continue", args)
  }

  def stepIn(args: StepInArguments): Future[Unit] = {
    sendRequest[JsonElement]("stepIn", args).map(_ => ())
  }

  def stepOut(args: StepOutArguments): Future[Unit] = {
    sendRequest[JsonElement]("stepOut", args).map(_ => ())
  }

  def stepOver(args: NextArguments): Future[Unit] = {
    sendRequest[JsonElement]("next", args).map(_ => ())
  }

  def pause(args: PauseArguments): Future[Unit] = {
    sendRequest[JsonElement]("pause", args).map(_ => ())
  }

  def terminate(args: TerminateArguments): Future[Unit] = {
    sendRequest[JsonElement]("terminate", args).map(_ => ())
  }

  def disconnect(args: DisconnectArguments): Future[Unit] = {
    sendRequest[JsonElement]("disconnect", args).map(_ => ())
  }

  def getThreads(): Future[ThreadsResponse] = {
    ensureInitialized().flatMap { _ =>
      import scala.jdk.CollectionConverters._
      sendRequest[ThreadsResponse]("threads", Map.empty[String, Any].asJava)
    }
  }

  def getStackTrace(args: StackTraceArguments): Future[StackTraceResponse] = {
    ensureInitialized().flatMap { _ =>
      sendRequest[StackTraceResponse]("stackTrace", args)
    }
  }

  def getScopes(args: ScopesArguments): Future[ScopesResponse] = {
    ensureInitialized().flatMap { _ =>
      sendRequest[ScopesResponse]("scopes", args)
    }
  }

  def getVariables(args: VariablesArguments): Future[VariablesResponse] = {
    ensureInitialized().flatMap { _ =>
      sendRequest[VariablesResponse]("variables", args)
    }
  }

  def setBreakpoints(
      args: SetBreakpointsArguments
  ): Future[SetBreakpointsResponse] = {
    sendRequest[SetBreakpointsResponse]("setBreakpoints", args)
  }

  def setExceptionBreakpoints(
      args: SetExceptionBreakpointsArguments
  ): Future[SetExceptionBreakpointsResponse] = {
    sendRequest[SetExceptionBreakpointsResponse](
      "setExceptionBreakpoints",
      args,
    )
  }

  def evaluate(args: EvaluateArguments): Future[EvaluateResponse] = {
    sendRequest[EvaluateResponse]("evaluate", args)
  }

  def completions(args: CompletionsArguments): Future[CompletionsResponse] = {
    sendRequest[CompletionsResponse]("completions", args)
  }

  /**
   * Initialize the debug session with proper DAP handshake and breakpoints.
   * This must be called before any other debug operations.
   */
  def initializeWithBreakpoints(): Future[Unit] = {
    scribe.info(s"[McpDebugSession] Initializing debug session with ${initialBreakpoints.size} breakpoints")
    
    val initArgs = new InitializeRequestArguments()
    initArgs.setClientID("mcp-debug-client")
    initArgs.setClientName("MCP Debug Client")
    initArgs.setAdapterID("scala-debug-adapter")
    initArgs.setLocale("en-US")
    initArgs.setLinesStartAt1(true)
    initArgs.setColumnsStartAt1(true)
    initArgs.setPathFormat("uri")

    for {
      // Step 1: Send initialize request
      _ <- sendRequest[Capabilities]("initialize", initArgs)

      // Step 2: Send launch or attach request based on session type
      _ <- {
        import scala.jdk.CollectionConverters._
        if (sessionId.contains("attach-remote")) {
          // For attach sessions, send attach request
          val attachArgs = Map(
            "type" -> "scala",
            "request" -> "attach",
            "name" -> "MCP Debug Attach",
            "hostName" -> "localhost",
            "port" -> 5005,
          ).asJava
          sendRequest[JsonElement]("attach", attachArgs)
        } else {
          // For launch sessions, send launch request
          val launchArgs = Map(
            "type" -> "scala",
            "request" -> "launch",
            "name" -> "MCP Debug Launch",
            "noDebug" -> false
          ).asJava
          sendRequest[JsonElement]("launch", launchArgs)
        }
      }

      // Step 3: Set initial breakpoints if any
      _ <- if (initialBreakpoints.nonEmpty) {
        setInitialBreakpoints()
      } else {
        Future.successful(())
      }

      // Step 4: Send configurationDone
      _ <- {
        import scala.jdk.CollectionConverters._
        sendRequest[JsonElement](
          "configurationDone",
          Map.empty[String, Any].asJava,
        )
      }
    } yield {
      scribe.info(s"[McpDebugSession] Debug session initialization complete")
    }
  }

  private def setInitialBreakpoints(): Future[Unit] = {
    scribe.info(s"[McpDebugSession] Setting ${initialBreakpoints.size} initial breakpoints")
    
    // Group breakpoints by source file
    val breakpointsBySource = initialBreakpoints.groupBy { bp =>
      Option(bp.get("source")).map(_.toString).getOrElse("")
    }

    // Check for special suspend breakpoint
    val hasSuspendBreakpoint = breakpointsBySource.contains("startup://suspend")
    if (hasSuspendBreakpoint) {
      scribe.info("[McpDebugSession] Found startup://suspend breakpoint, will pause after configuration")
    }

    // Set breakpoints for each source file
    val breakpointFutures = breakpointsBySource
      .filterNot(_._1 == "startup://suspend")
      .flatMap { case (sourcePath, breakpoints) =>
        if (sourcePath.nonEmpty) {
          scribe.info(s"[McpDebugSession] Setting ${breakpoints.size} breakpoints for source: $sourcePath")
          
          val source = new org.eclipse.lsp4j.debug.Source()
          source.setPath(sourcePath)

          val args = new SetBreakpointsArguments()
          args.setSource(source)

          val sourceBreakpoints = breakpoints.map { bp =>
            val sb = new org.eclipse.lsp4j.debug.SourceBreakpoint()
            sb.setLine(bp.get("line").asInstanceOf[java.lang.Number].intValue())
            Option(bp.get("condition")).foreach(c => sb.setCondition(c.toString))
            Option(bp.get("logMessage")).foreach(m => sb.setLogMessage(m.toString))
            sb
          }.toArray

          args.setBreakpoints(sourceBreakpoints)
          Some(setBreakpoints(args).map(_ => ()))
        } else {
          None
        }
      }
      .toList

    // Wait for all breakpoints to be set
    Future.sequence(breakpointFutures).map { _ =>
      if (hasSuspendBreakpoint) {
        // Schedule a pause after configuration is done
        Future {
          try {
            JThread.sleep(500) // Give the process time to start
          } catch {
            case _: InterruptedException => // ignore
          }
          val pauseArgs = new PauseArguments()
          pause(pauseArgs)
        }
      }
      ()
    }
  }
}
