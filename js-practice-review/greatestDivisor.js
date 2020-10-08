/**
 * Greatest Common Divisor
 * How would you find the greatest common divisor of two numbers?
 */

function greatestCommonDivisor(a, b) {
  let greatestDivisor = 1;
  let divisor = 2;

  if (a < 2 || b < 2) {
    return 1;
  }

  // for (let i = 2; a >= i && b >= i; i++) {
  //   if (a % i === 0 && b % divisor === 0) {
  //     greatestDivisor = i;
  //   }
  // }
  while (a >= divisor && b >= divisor) {
    if (a % divisor === 0 && b % divisor === 0) {
      greatestDivisor = divisor;
    }
    divisor++;
  }

  return greatestDivisor;
}

console.log(greatestCommonDivisor(14, 21));
// 7
console.log(greatestCommonDivisor(69, 169));
// 1
console.log(greatestCommonDivisor(15, 25));
// 5
