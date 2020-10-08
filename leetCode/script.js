const codeOuput = document.querySelector('.code-output');

/**
 * Leet code 1. Two Sum
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var nums = [2, 7, 11, 15];

var target = 9;

var twoSum = function (nums, target) {
  var result = [];

  // loop through the array with the first variable
  for (var i = 0; i < nums.length; i++) {
    // loop through the array with second variable
    // j is equal to i + 1, to avoid duplicates
    for (var j = i + 1; j < nums.length; j++) {
      // compare if i + j = target
      if (nums[i] + nums[j] === target) {
        //add to result
        result.push(i);
        result.push(j);
      }
    }
  }

  return result;
};

// console.log('two sums: ', twoSum(nums, target));
const twoSumAnswer = document.createElement('P');
twoSumAnswer.append(`Two sums: ${twoSum(nums, target)}`);

codeOuput.append(twoSumAnswer);

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var l1 = [2, 4, 3];
var l2 = [5, 6, 4];

/**
 * Leet code 2. Add Two Numbers
 */

var addTwoNumbers = function (l1, l2) {
  // reverse the order of the array
  var newL1 = [];
  var newL2 = [];

  // ES6: newL1.reverse().join();
  // newL1 = l1.map((int) => newL1.unshift(int));
  // newL2 = l2.map((int) => newL2.unshift(int));

  for (var i = 0; i < l1.length; i++) {
    newL1.unshift(l1[i]);
  }

  for (var j = 0; j < l1.length; j++) {
    newL2.unshift(l2[j]);
  }

  // convert array to string number
  var joinL1 = newL1.join('');
  var joinL2 = newL2.join('');

  // convert string to array and sum
  var total = Number(joinL1) + Number(joinL2);

  // Array.from creates an array from string, Number will covert the string back to int
  var totalArr = Array.from(String(total), Number);
  var result = [];
  // map over the array and push to result
  for (var k = 0; k < totalArr.length; k++) {
    result.push(totalArr[k]);
  }
  return result;
};

addTwoNumbers(l1, l2);

/**
 *  Leet code 7. Reverse Integer
 */
var reverse = function (x) {
  // if negative number multiply by -1 at the end
  if (x < 0) {
    return -1 * reverse(-x);
  }
  /**
   * parsInt() - parses a string, returns an integer
   * .split - takes the number and split, in to array of individual numbers
   * .reverse() - reverses the order of the array
   * .join('') - joins the array with
   */
  const r = parseInt(`${x}`.split('').reverse().join(''), 10);

  // integer greater than 32bit should return 0
  if (r > 2 ** 31 - 1) {
    return 0;
  }

  return r;
};

const reverseAnswer = document.createElement('P');
reverseAnswer.append(
  `reverse 123: ${reverse(123)}, -123: ${reverse(-123)}}, 120: ${reverse(120)}`
);

codeOuput.append(reverseAnswer);

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

  let y = x;

  let reversed = parseInt(('' + x).split('').reverse().join(''), 10);

  // Option B
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
