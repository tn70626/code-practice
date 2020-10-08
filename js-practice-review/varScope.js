const codeOutput = document.querySelector('.code-output');

function startLet() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }

  // i is not not accessible
  console.log(i);
}

// var => function scoped variables
// ES6: let, const => block-scoped variables

function startVar() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }

  // i function scope
  console.log(i);
}

startLet();
startVar();

// this variable is is created to the window object
var color = 'red';

// let is not attached to the window object
let age = 30;

/**
 * attaching variable to the window is bad.
 * there is only on window instance
 *
 * vars get hoisted to the top
 *
 * avoid using the keyword because it creates variables that are function scoped and not blocked scoped
 */

// BAD: function is available by window.sayHi() => global scope
function sayHi() {
  console.log('hi');
}

/**
 *
 * '==' and '===' comparison operators
 *
 * let vs const
 *
 * const is a variable that can't be reassigned
 *
 * const c; missing initializer, however value is equal to
 * undefined
 *
 */
