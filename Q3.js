//?  Program to Calculate the Square Root of a Number

function findSquareRoot(number) {
  if (typeof number !== "number" && number < 0) return NaN;
  return Math.sqrt(number);
}
