/**
 * Leet code 9. Palindrome Number
 * Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  // check if the number is negative
  if (x < 0) {
    return false;
  }
  // reverse the number: convert to string, to array, reverse array, join back to string, then parse string to integer
  let reversed = parseInt(('' + x).split('').reverse().join(''), 10);

  // Option B

  // let y = x;
  // let reversed = 0;
  // reversing the integer
  // while (y > 0) {
  //   // getting the last digit
  //   const lastDigit = y % 10;

  //   // add the last digit to reverse
  //   reversed = reverse * 10 + lastDigit;

  //   y = (y / 10) | 0;
  // }
  return x === reversed;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));

let palindrome = (word) => {
  const reversed = word.split('').reverse().join('');
  return word === reversed;
};

console.log(palindrome('racecar'));
console.log(palindrome('redder'));
console.log(palindrome('wisdomw'));

let palindromeAlt = (value) => {
  // convert to string
  value = value + '';
  // reverse value
  let reversed = '';

  for (let i = value.length - 1; i >= 0; i--) {
    reversed += value[i];
    console.log(value[i]);
  }
  return value === reversed;
};

console.log(palindromeAlt('racecar'));
console.log(palindromeAlt(12321));
console.log(palindromeAlt('wisdom'));
