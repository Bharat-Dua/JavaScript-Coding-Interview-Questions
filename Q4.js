//? Calculate the Area of a Triangle in JavaScript

function calculateTriangleArea(base, height) {
  if (
    typeof base !== "number" ||
    typeof height !== "number" ||
    Number.isNaN(base) ||
    Number.isNaN(height)
  )
    return NaN;
  const area = (base * height) / 2;
  return area;
}
