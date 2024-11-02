//? Solve a Quadratic equation in javascript

// Function to solve a quadratic equation of the form ax^2 + bx + c = 0
function solveQuadratic(a, b, c) {
  if (a === 0) return "Not a quadratic equation.";
  const discriminant = b * b - 4 * a * c;

  if (discriminant > 0) {
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return [parseFloat(root1.toFixed(10)), parseFloat(root2.toFixed(10))];
  } else if (discriminant === 0) {
    const root = -b / (2 * a);
    return [parseFloat(root.toFixed(10))];
  } else {
    return "No real roots.";
  }
}
