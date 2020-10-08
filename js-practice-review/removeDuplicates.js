/**
 * Remove Duplicate
 * @param {*} arr
 */

let removeDuplicates = (arr) => {
  const duplicateFree = arr.reduce((acc, curr) => {
    // if the accumulator doesn't include current value
    if (!acc.includes(curr)) {
      // add value to accumulator
      acc.push(curr);
    }
    // always return the accumulator
    return acc;
  }, []);

  return duplicateFree;
};

const chars = ['A', 'B', 'A', 'C', 'B', 'D', 'D'];
const numbers = [1, 3, 3, 3, 1, 5, 6, 7, 8, 1];
const numbers2 = [1, 1, 2];
console.log(removeDuplicates(chars));
console.log(removeDuplicates(numbers));
console.log(removeDuplicates(numbers2));
