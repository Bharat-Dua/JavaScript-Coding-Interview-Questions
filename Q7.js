//? Convert Kilometers to Miles in JavaScript

// Function to convert kilometers to miles
function kilometersToMiles(kilometers) {
  if (typeof kilometers !== "number") return "invalid input";
  const kilometersToMiles = 0.621371;
  let miles = kilometers * kilometersToMiles;
  return Math.round(miles * 1000000) / 1000000;
}
