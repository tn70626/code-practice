/**
 * Binary Search
 */

/** 
  * 

Recursive Approach :

BASE CONDITION: If starting index is greater than ending index return false.
Compute the middle index.
Compare the middle element with number x. If equal return true.
If greater, call the same function with ending index = middle-1 and repeat step 1.
If smaller, call the same function with starting index = middle+1 and repeat step 1.
  * */

var arr = [1, 3, 5, 7, 8, 9];

var binarySearch = function (x, arr) {
  if (arr[0] > arr[arr.length]) {
    return false;
  }

  let middleIndex = Math.floor(arr.length / 2);

  if (x === arr[middleIndex]) {
    return true;
  } else if (x > arr[middleIndex]) {
    const newArr = arr.slice(middleIndex - 1, arr.length);
    binarySearch(x, newArr);
  } else if (x < arr[middleIndex]) {
    const newArr = arr.slice(0, middleIndex + 1);
    binarySearch(x, newArr);
  }
};
console.log(binarySearch(7, arr));

/**
 * Iterative Binary Search
 */

let iterativeBinarySearch = function (x, arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    // find the mid index
    let mid = Math.floor((start + end) / 2);

    // If element is present at mid, return true
    if (arr[mid] === x) {
      return true;
    }
    // look left and right accordingly
    else if (arr[mid] < x) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return false;
};

console.log(iterativeBinarySearch(10, arr));
