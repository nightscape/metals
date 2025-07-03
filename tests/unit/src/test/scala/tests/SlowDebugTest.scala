package tests

import munit.FunSuite

class SlowDebugTest extends FunSuite {
  test("slow test with breakpoint opportunity") {
    println("Starting slow test")
    val numbers = List(1, 2, 3, 4, 5)
    
    var sum = 0
    for (n <- numbers) {
      println(s"Processing number: $n")
      Thread.sleep(1000) // Sleep for 1 second
      sum += n
      println(s"Current sum: $sum")
    }
    
    assertEquals(sum, 15)
    println("Test completed")
  }
}