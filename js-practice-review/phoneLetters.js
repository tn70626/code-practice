/**
 * Letter Combinations of a Phone Number
 * 
 * Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.


 */

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits.length === 0) {
    return [];
  }
  const letterMap = new Map([
    ['2', ['a', 'b', 'c']],
    ['3', ['d', 'e', 'f']],
    ['4', ['g', 'h', 'i']],
    ['5', ['j', 'k', 'l']],
    ['6', ['m', 'n', 'o']],
    ['7', ['p', 'q', 'r', 's']],
    ['8', ['t', 'u', 'v']],
    ['9', ['w', 'x', 'y', 'z']],
  ]);

  let combinations = [''];

  // for as many times as there are digits ie. 2, 3
  for (let i = 0; i < digits.length; i++) {
    let digit = digits[i];
    let letters = letterMap.get(digit);
    let tempArray = [];

    // skip invalid digit
    if (!letters) {
      continue;
    }

    // for as many times as there are letter ie 'abc' -> 3 times
    for (let j = 0; j < letters.length; j++) {
      let letterToAdd = letters[j]; // a -> b -> c

      // for as many times as there are existing combinations
      // ie ['a', 'b', 'c'] -> 9 times
      for (let k = 0; k < combinations.length; k++) {
        let combination = combinations[k];
        tempArray.push(combination + letterToAdd);
      }
    }
    combinations = tempArray;
    console.log(combinations);
  }

  return combinations;
};

// console.log(letterCombinations('23'));
console.log(letterCombinations('234'));
