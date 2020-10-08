/**
 * Prime Number Function
 * Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
 * Prime number can only be divisable by itself or 1
 */

let isPrime = (n) => {
  if (n <= 1) {
    return false;
  }

  for (let i = 2; i < n; i++) {
    // remainder of n divided by i equals 0
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

console.log(isPrime(2));
console.log(isPrime(14));
console.log(isPrime(15));
console.log(isPrime(19));
