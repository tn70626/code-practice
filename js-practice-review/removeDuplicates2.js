/**
 *  Remove Duplicates from Sorted Array
 *  https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 *
 *  Remove duplicates without additional memory, (In-place)
 */

var removeDuplicates = function (nums) {
  function remover(arr) {
    for (let i = 1; i < nums.length; i++) {
      if (arr[i] === arr[i - 1]) {
        const newArr = arr.splice(i, 1);

        remover(arr);
      }
    }
  }
  remover(nums);
};

const nums = [1, 1, 2];
const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums));
console.log(removeDuplicates(nums2));
