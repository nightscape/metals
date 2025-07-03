package tests

import munit.FunSuite

class PausingDebugTest extends FunSuite {
  test("test with initial pause") {
    println("Test starting - waiting for debugger...")
    // Give time to attach debugger
    Thread.sleep(30000) // 30 seconds
    
    val x = 42
    println(s"x = $x")
    
    val y = 100
    println(s"y = $y")
    
    val result = x + y
    println(s"result = $result")
    
    assertEquals(result, 142)
  }
}