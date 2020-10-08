/**
 * Flatten the nested Array
 *
 * https://medium.com/better-programming/solving-facebooks-2020-front-end-engineering-interview-f34dd6b2a977
 * @param {array} arr
 */

const flattenArray = (arr) => {
  let newArray = [];

  const flattenHelper = (currentArr) => {
    for (let i = 0; i < currentArr.length; i++) {
      if (Array.isArray(currentArr[i])) {
        // recursion
        flattenHelper(currentArr[i]);
      } else if (currentArr[i] !== null) {
        newArray.push(currentArr[i]);
      }
    }
  };

  flattenHelper(arr);

  return newArray;
};

const arrA = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
const arrB = [1, [[2], 3, 4, null], [[5]]];
console.log(flattenArray(arrA));
console.log(flattenArray(arrB));
