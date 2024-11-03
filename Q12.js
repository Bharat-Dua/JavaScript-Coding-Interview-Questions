//? Check If a Number is Prime in JavaScript

// Function to check if a number is prime
function isPrime(number) {
  if (Number.isNaN(number)) {
    return "enter valid input";
  }
  if (number < 2) return false;
  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      isPrime = false;
    }
  }
  return isPrime;
}
