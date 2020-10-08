/**
 * Array/Object Destructure
 * https://www.youtube.com/watch?v=NIq3qLaHCIs
 */

/**
 * Array Destructuring
 */
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F'];
const numbers = ['1', '2', '3', '4', '5', '6'];

// ,, will skip the number in that array
const [a, , c, ...rest] = alphabet;
console.log(a);
console.log(c);
// rest of the array
console.log(rest);

// combining array
const newArray = [...alphabet, ...numbers];
// alternatively
const newerArray = alphabet.concat(numbers);
console.log(newArray);

function sumAndMultiply(a, b) {
  return [a + b, a * b];
}
// you can destructure the result of the function
// division default value
const [sum, multiply, division = 'No division'] = sumAndMultiply(2, 3);
console.log(sum);
console.log(multiply);

const personOne = {
  name: 'Tru',
  age: 25,
  address: {
    city: 'Some city',
    state: 'Some state',
  },
  favColor: 'red',
};
/**
 * Object Destructing
 */
const personTwo = {
  name: 'Sally',
  age: 32,
  address: {
    city: 'Some city',
    state: 'Some state',
  },
  favColor: 'green',
};

// rename a variable like firstName & default value as well
const {
  name: firstName = 'John',
  age,
  address: { city },
  ...restName
} = personTwo;

console.log(firstName);

// rest of the object
console.log(restName);

// get nested object values
console.log(city);

// add everything from personOne then overwrite with personTwo
personThree = { ...personOne, ...personTwo };
console.log(personThree);

// function arguments can be destructured too!
// you can even set argument fallback like favoriteFood!
function printUser({ name, age, favoriteFood = 'Watermelon' }) {
  console.log(`Name is: ${name}. Age is ${age}. Fav food is ${favoriteFood}`);
}

printUser(personOne);
