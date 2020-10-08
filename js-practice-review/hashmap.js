/**
 * Hash Map
 *
 * https://medium.com/@martin.crabtree/javascript-tracking-key-value-pairs-using-hashmaps-7de6df598257#:~:text=While%20JavaScript%20doesn't%20have,to%20organizing%20key%2Fvalue%20pairs.
 */

// Declare the hash map
let firstHashmap = new Map();

// Declare and initializing a new hashmap object
let secondHashmap = new Map([
  [1, 'first'],
  [2, 'second'],
  [5, 'fifth'],
]);

// console.log('firstHashmap: ', firstHashmap);
// console.log('secondHashmap: ', secondHashmap);

/**
 * Useful methods and properties
 *
 * hashmap.size() returns # of elements
 * hashmap.get(<key>) return the value of the element of the given key
 * hashmap.has(<key>) checks to see if the hashmap contains the key that is passed as the argument
 * hashmap.set(<key>,<value>) accepts 2 arguments and creates a new element to the hashmap
 * hashmap.delete(<key>) deletes the k/value pair that matches the key that is passed in as an argument
 * hashmap.clear() clears all elements from the hashmap
 */

// get the value of key 2
console.log(secondHashmap.get(2));

// check to see if key 2 and key 3 are in the hashmap
console.log(secondHashmap.has(2));
console.log(secondHashmap.has(3));

// add a new key/value pair

console.log(secondHashmap.set(3, 'third'));

// deletes key/value pair
secondHashmap.delete(5);

// clears the hashmap
firstHashmap.clear();

// hash maps can accept any type as keys
secondHashmap.set('green', 4);

// undefined
// console.log(secondHashmap.get('yellow'));

// overrides key 5
secondHashmap.set(5, 'new fifth');
console.log(secondHashmap);

/**
 * Weak Maps
 * Weak maps accepts objects as keys
 */

const foo = { name: 'foo' };
const bar = { name: 'bar' };

// declare the weak map
const mapOfObjects = new WeakMap();

// set elements to weak map
mapOfObjects.set(foo, 'Foo related data');
mapOfObjects.set(bar, 'Bar related data');

// get the key using object
console.log(mapOfObjects.get(foo));

/**
 * Iterate over the hashmap
 */

// spread the has map
console.log([...secondHashmap]);

// for loops

for (const [key, value] of secondHashmap) {
  console.log(key, value);
}
