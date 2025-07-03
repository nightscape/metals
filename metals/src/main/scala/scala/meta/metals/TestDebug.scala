package scala.meta.metals

object TestDebug {
  def main(args: Array[String]): Unit = {
    println("Starting debug test")
    val x = 42
    val y = 10
    val result = add(x, y)
    println(s"Result: $result")
    
    for (i <- 1 to 5) {
      println(s"Iteration $i")
      Thread.sleep(1000)
    }
    
    println("Debug test completed")
  }
  
  def add(a: Int, b: Int): Int = {
    val sum = a + b
    println(s"Adding $a + $b = $sum")
    sum
  }
}