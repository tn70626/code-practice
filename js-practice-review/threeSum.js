/**
 * Three sum
 * @param {number[]} nums
 * @return {number[][]}
 * 
 * Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Notice that the solution set must not contain duplicate triplets.
 */
// brute force O(n^3)
var threeSum = function (nums) {
  let result = [];
  if (nums.length < 3) {
    return result;
  }

  for (let i = 0; i < nums.length; i++) {
    // nums[i] = -1
    for (let j = i + 1; j < nums.length; j++) {
      //nums[j] = 0
      for (let k = j + 1; k < nums.length; k++) {
        // nums[k] = 1
        if (nums[i] + nums[j] + nums[k] === 0) {
          const answer = [nums[i], nums[j], nums[k]];
          const sortedAnswer = answer.sort((a, b) => a - b);
          const stringAnswer = JSON.stringify(sortedAnswer);
          const found = result.find((arr) => arr === stringAnswer);
          if (!found) {
            result.push(stringAnswer);
          }
        }
      }
    }
  }
  // bring back the array
  const uniqueArray = Array.from(result, JSON.parse);

  return uniqueArray;
};

// https://dev.to/rygelxvi/3sum-algorithm-499j
var threeSumB = function (nums) {
  let result = [];
  if (nums.length < 3) {
    return result;
  }
  if (nums.length === 3) {
    let sum = nums.reduce((acc, curr) => {
      return acc + curr;
    }, 0);
    return sum === 0 ? [nums] : [];
  }
  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    let j = i + 1;
    let k = nums.length - 1;
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    while (j < k) {
      if (nums[i] + nums[j] + nums[k] === 0) {
        result.push([nums[i], nums[j], nums[k]]);
        while (nums[k] === nums[k - 1]) {
          k--;
        }
        while (nums[j] === nums[j + 1]) {
          j++;
        }
        j++;
        k--;
      } else if (nums[i] + nums[j] + nums[k] < 0) {
        j++;
      } else {
        k--;
      }
    }
  }

  return result;
};

var nums = [-1, 0, 1, 2, -1, -4];
var numsA = [
  12,
  5,
  -12,
  4,
  -11,
  11,
  2,
  7,
  2,
  -5,
  -14,
  -3,
  -3,
  3,
  2,
  -10,
  9,
  -15,
  2,
  14,
  -3,
  -15,
  -3,
  -14,
  -1,
  -7,
  11,
  -4,
  -11,
  12,
  -15,
  -14,
  2,
  10,
  -2,
  -1,
  6,
  7,
  13,
  -15,
  -13,
  6,
  -10,
  -9,
  -14,
  7,
  -12,
  3,
  -1,
  5,
  2,
  11,
  6,
  14,
  12,
  -10,
  14,
  0,
  -7,
  11,
  -10,
  -7,
  4,
  -1,
  -12,
  -13,
  13,
  1,
  9,
  3,
  1,
  3,
  -5,
  6,
  9,
  -4,
  -2,
  5,
  14,
  12,
  -5,
  -6,
  1,
  8,
  -15,
  -10,
  5,
  -15,
  -2,
  5,
  3,
  3,
  13,
  -8,
  -13,
  8,
  -5,
  8,
  -6,
  11,
  -12,
  3,
  0,
  -2,
  -6,
  -14,
  2,
  0,
  6,
  1,
  -11,
  9,
  2,
  -3,
  -6,
  3,
  3,
  -15,
  -5,
  -14,
  5,
  13,
  -4,
  -4,
  -10,
  -10,
  11,
];
console.log(threeSumB(numsA));

// console.log(threeSum([0]));
