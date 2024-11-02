//? JavaScript Program to Generate a Random Number within a Range

function generateRandomNumber(min, max) {
  if (typeof min !== "number" || typeof max !== "number") {
    return "Both min and max should be numbers";
  }
  if (min >= max) {
    return "Min should be less than max";
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
}
