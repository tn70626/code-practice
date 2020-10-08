/**
 * String Reverse
 * Take a string param and return it in reverse
 *
 */

const stringA = 'you are a nice dude';
const stringB = 'write this backwards please';

const stringReverse = (string) => {
  let reverseString = '';
  // loop starting from string's length until 0, and decreases each iteration
  for (let i = string.length - 1; i >= 0; i--) {
    reverseString += string[i];
  }
  return reverseString;
};

console.log(stringReverse(stringA));
console.log(stringReverse(stringB));
