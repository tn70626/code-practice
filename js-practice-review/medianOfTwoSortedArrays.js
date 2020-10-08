/**
 * Leetcode: Median of two sorted arrays
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * https://leetcode.com/problems/median-of-two-sorted-arrays/submissions/
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let numbers = nums1.concat(nums2);
  const middle = numbers.length / 2;
  numbers.sort(function (a, b) {
    return a - b;
  });

  if (numbers.length === 1) {
    return numbers[0];
  }

  if (numbers.length % 2 !== 0) {
    const center = Math.floor(middle);
    return numbers[center];
  }

  if (numbers.length % 2 === 0) {
    return (numbers[middle - 1] + numbers[middle]) / 2;
  }
};

// console.log(findMedianSortedArrays([1, 2], [3, 4]));
console.log(findMedianSortedArrays([3], [-2, -1]));
