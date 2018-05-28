// Recursion in computer science is a method where the solution to
// a problem depends on solutions to smaller instances of
// the same problem (as opposed to iteration).
// The approach can be applied to many types of problems,
// and recursion is one of the central ideas of computer science.(src: wiki)

// Basically, A function calling itself.

// You should define a base case and termination condition.
// Your function should move towards the base condition.
// Else you may get a stack overflow error.

// Fibonacci example using recursion.
function fibonacci(n) {
  return n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2)
}

// Factorial
function factorial(n) {
  return n < 2 ? 1 : n * factorial(n - 1)
}

// Date difference
// Go to: https://github.com/amalshehu/date-difference/blob/master/date-difference.js

// Print n numbers
function count(n) {
  n > 0 ? count(n - 1) : null
  console.log(n)
}

// GCD
function gcd(a, b) {
  if (a == 0) return b
  return gcd(b % a, a)
}

console.log(gcd(10, 15))
