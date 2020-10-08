/**
 * Longest Common Prefix
 * https://leetcode.com/problems/longest-common-prefix/
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  strs = strs.sort((a, b) => b.length - a.length);
  let minStr = strs[0] || '';

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(minStr) !== 0) {
      minStr = minStr.substring(0, minStr.length - 1);
    }
  }

  return minStr;
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
console.log(longestCommonPrefix(['dog', 'racecar', 'car']));
console.log(longestCommonPrefix([]));
console.log(longestCommonPrefix(['ca', 'a']));
