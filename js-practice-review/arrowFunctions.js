/**
 * Arrow Functions
 * https://www.youtube.com/watch?v=h33Srr5J9nY
 */

function sum(a, b) {
  return a + b;
}

let sum2 = (a, b) => a + b;

function isPositive(number) {
  return number >= 0;
}

// with only one param, you can remove parentheses
let isPositive2 = (number) => number >= 0;

let randomNumber2 = () => Math.random;

// document.addEventListener('click', () => {
//   console.log('click');
// });

// arrow functions redefine the "this" keyword

class Person {
  constructor(name) {
    this.name = name;
  }
  // "this" doesn't get redefined
  // "this" is define where the function is declared
  printNameArrow() {
    setTimeout(() => {
      console.log('Arrow: ' + this.name);
    }, 100);
  }

  // "this" is redefine where the function is called line 48 below
  // redefined in the scope of where the function is called
  printNameFunction() {
    setTimeout(function () {
      console.log('Function: ' + this.name);
    }, 100);
  }
}

let person = new Person('Tru');
person.printNameArrow();
person.printNameFunction();
