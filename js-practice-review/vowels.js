/**
 * Vowels
 *
 * Find all the number of vowels in the string
 * a, e, i, o, u
 */

let vowelsCount = (string) => {
  const vowels = 'aeiou';
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      count++;
    }
  }
  return count;
};

console.log(vowelsCount('hello')); // => 2
console.log(vowelsCount('why')); // => 0
console.log(vowelsCount('thao tru')); // => 3
