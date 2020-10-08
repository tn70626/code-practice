/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  var num = romToInt(s.charAt(0));
  var pre, curr;

  for (var i = 1; i < s.length; i++) {
    // convert current char to int
    curr = romToInt(s.charAt(i));

    // convert to previous char
    pre = romToInt(s.charAt(i - 1));

    // current is less than the previous
    if (curr <= pre) {
      // add to the number
      num += curr;
    } else {
      // IV = 4
      // I can be placed before V (5) and X (10) to make 4 and 9.
      // X can be placed before L (50) and C (100) to make 40 and 90.
      // C can be placed before D (500) and M (1000) to make 400 and 900.

      // subtract the number from current number times 2 and add the current number
      // 1 - 1 * 2 + 5
      num = num - pre * 2 + curr;
    }
  }

  return num;
};

function romToInt(c) {
  switch (c) {
    case 'I':
      return 1;
    case 'V':
      return 5;
    case 'X':
      return 10;
    case 'L':
      return 50;
    case 'C':
      return 100;
    case 'D':
      return 500;
    case 'M':
      return 1000;
    default:
      return -1;
  }
}
