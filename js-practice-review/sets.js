/**
 * Set
 */

let mySet = new Set(['a']);

mySet.add(1); // Set ['a', 1]
mySet.add(5); // Set ['a', 1, 5]
mySet.add(5); // Set ['a', 1, 5]
mySet.add('some text'); // Set ['a', 1, 5, 'some text']

let o = { a: 1, b: 2 };
mySet.add(o);

mySet.has(1); // true
mySet.has(3); // false, since 3 has not been added to the set
mySet.has(5); // true
mySet.has(Math.sqrt(25)); // true
mySet.has('Some Text'.toLowerCase()); // true
mySet.has(o); // true

mySet.size; // number of values

mySet.delete(5); // removes 5 from the set
mySet.has(5); // false

// Iterating sets

for (let item of mySet) {
  console.log(item);
}
// keys
// for (let item of mySet.values()) console.log(item);

// values
// for (let item of mySet.values()) console.log(item);

// forEach()
// mySet.forEach((value) => {
//   console.log(value);
// })

// convert between Set and Array
let myArr = [1, 2, 3, 4];
mySet2 = new Set(myArr);
let newArr = [...mySet2];
console.log(newArr);
