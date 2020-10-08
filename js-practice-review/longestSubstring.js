/**
 * Longest Substring w/o repeating characters
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * @param {string} s
 *
 * Given a string s, find the length of the longest substring without repeating characters.
 */

var lengthOfLongestSubstring = function (s) {
  let max = 0;
  let currentString = '';
  let character;
  let position;

  for (let i = 0; i < s.length; i++) {
    // current string character
    character = s[i];

    // if substring contains the current character
    // -1 => substring doesn't contain the character
    // returns the position of the string in currentString
    position = currentString.indexOf(character);

    // if the substring already has current character
    if (position !== -1) {
      // cut "dv" to "v" when you see another "d"
      currentString = currentString.substr(position + 1);
    }
    // add character to string
    currentString += character;

    // math max => returns the higher value of the two
    /**
     * AKA
     * if (currentString.length > max) {
     *    max = currentString.length;
     * }
     *
     * */
    max = Math.max(max, currentString.length);
  }
  return max;
};

console.log(lengthOfLongestSubstring('abcabcbb'));
// abc => 3
console.log(lengthOfLongestSubstring('bbbbb'));
// b => 1
console.log(lengthOfLongestSubstring('pwwkew'));
// wke => 3
console.log(lengthOfLongestSubstring(''));
// '' => 0
console.log(lengthOfLongestSubstring(' '));
// ' ' => 1
console.log(lengthOfLongestSubstring('au'));
// au => 2
console.log(lengthOfLongestSubstring('dvdf'));
// vdf => 3
