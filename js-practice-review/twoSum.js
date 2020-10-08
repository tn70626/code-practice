var twoSum = function (nums, target) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    // iterate first level: 2

    for (let j = i + 1; j < nums.length; j++) {
      // iterate second level: 7, 11, 15
      // ie. 2+7, 2+11, 2+15
      if (nums[i] + nums[j] === target) {
        result = [i, j];
      }
    }
  }

  return result;
};

var nums = [7, 11, 15, 2];
var target = 9;
// var nums = [3, 3];
// var target = 6;

console.log(twoSum(nums, target));
