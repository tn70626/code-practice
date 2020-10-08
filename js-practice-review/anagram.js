/**
 * Anagram
 *
 * A word is an anagram of another word if both use the same
 * letters in the same quantity, but arranged differently.
 */

let isAnagram = (a, b) => {
  a = a.toLowerCase();
  b = b.toLowerCase();
  let result = true;

  if (a.length !== b.length) {
    return false;
  }

  for (let i = 0; i < b.length; i++) {
    if (result) {
      // set the result
      result = a.includes(b[i]);
      // remove the letter from a
      a = a.replace(b[i], '');
    }
  }
  return result;
};

console.log(isAnagram('bye', 'Hello'));
console.log(isAnagram('finder', 'Friend'));
