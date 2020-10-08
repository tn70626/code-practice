/**
 * Leetcode - Roman to Integer
 *
 * https://leetcode.com/problems/roman-to-integer/
 */

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romanMap = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000],
  ]);
  var num = romanMap.get(s[0]);

  s = s.split('');

  for (let i = 1; i < s.length; i++) {
    const prev = s[i - 1];
    const curr = s[i];
    if ((prev === 'I' && curr === 'V') || (prev === 'I' && curr === 'X')) {
      // check if I was placed before V (5) or X (10), subtract 1
      num = num + romanMap.get(curr) - 2;
    } else if (
      (prev === 'X' && curr === 'L') ||
      (prev === 'X' && curr === 'C')
    ) {
      // check if x is placed before L(50) and C (100), subtract 10
      num = num + romanMap.get(curr) - 20;
    } else if (
      (prev === 'C' && curr === 'D') ||
      (prev === 'C' && curr === 'M')
    ) {
      // check if C is placed before D (500) and M (1000), subtract 100
      num = num + romanMap.get(curr) - 200;
    } else {
      num = num += romanMap.get(curr);
    }
  }

  return num;
};

// console.log(romanToInt('III')); // 3
console.log(romanToInt('IV')); // 4
console.log(romanToInt('IX')); // 9
console.log(romanToInt('XL')); // 40
// console.log(romanToInt('LVIII')); // 58
console.log(romanToInt('MCMXCIV')); // 1994
