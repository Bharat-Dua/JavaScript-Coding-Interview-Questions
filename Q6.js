//? Swap Two Variables in JavaScript

// Swap two variables using a temporary variable
function swapWithTemp(a, b) {
  // Your code here
  let c = a;
  a = b;
  b = c;
  return [a, b];
}

// Swap two variables using array destructuring
function swapWithDestructuring(a, b) {
  // Your code here
  [a, b] = [b, a];
  return [a, b];
}

// Swap two variables using arithmetic operations (without temporary variable)
function swapWithArithmetic(a, b) {
  // Your code here
  a = a + b;
  b = a - b;
  a = a - b;
  return [a, b];
}
