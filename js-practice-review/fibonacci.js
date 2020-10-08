/**
 * Fibonacci sequence
 * Each sequential number is the sum of the current number and previous number
 * 0,1,1,2,3,5,8,13...
 */

let fibonacci = (totalNumbers) => {
  let previous = 0;
  let current = 1;
  let result = current;

  for (let i = 1; i <= totalNumbers; i++) {
    // sum of previous and current number
    result = previous + current;
    // update previous number
    previous = current;
    // update current number
    current = result;

    console.log(result);
  }
};

fibonacci(10);
