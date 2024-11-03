//? Print Prime Numbers in a Given Range Using JavaScript

// Function to check if a number is prime
function isPrime(num) {
  // Your code here
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Function to return all prime numbers in the given range [start, end]
function getPrimeNumbersInRange(start, end) {
  // Your code here
  let primes = [];
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}

// Example usage
console.log(getPrimeNumbersInRange(10, 30)); // Expected output: [11, 13, 17, 19, 23, 29]
