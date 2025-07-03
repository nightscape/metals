package tests

import munit.FunSuite

class SimpleDebugTest extends FunSuite {
  test("simple addition") {
    val x = 10
    val y = 20
    val result = x + y
    assertEquals(result, 30)
  }
  
  test("string concatenation") {
    val firstName = "John"
    val lastName = "Doe"
    val fullName = s"$firstName $lastName"
    assertEquals(fullName, "John Doe")
  }
}