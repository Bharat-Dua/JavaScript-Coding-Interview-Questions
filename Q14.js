//? Find the Factorial of a Number in JavaScript

function factorial(n) {
  // TODO: Handle base cases for n = 0 and n = 1.
  // TODO: Handle negative input by returning a message indicating invalid input.
  // TODO: For n > 1, implement recursion to calculate factorial of n.
  if (n < 0)
    return "Invalid input. Factorial is not defined for negative numbers.";
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
