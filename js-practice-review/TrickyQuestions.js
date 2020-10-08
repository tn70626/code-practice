/**
 * Answering Tricky JS Interview Question
 * https://www.youtube.com/watch?v=MY0UBGX2FtA
 *
 * 1. Explain event delegation.
 * JS event listeners fire not only on a single DOM element but on all it's
 * descendants.
 *
 * 2. Event bubbling.
 * Inverse of event delegation. Aka propagation, events on an element will
 * 'bubble up' and also fire on all parents
 *
 */

// 3. Explain why this IIFE doesn't work
// IIFE = Immediately Invoke Function Expression

// function foo() {
// // I'm a statement
//   console.log('IIFE doesn\'t work')
// }();

(function foo() {
  // I am now an expression
  console.log('IIFE does work');
})();

// 4. Explain the difference on the usage of Definition/Statement vs Expression

function foo() {
  // I am a definition or statement
}

var foo = function () {
  // I am an expression
  // I resolve to a value, even if it's just 'undefined'
};

/**
 * example for using IIFE set variables that are not available outside of
 * that function
 */

/**
 * 5. Why you should not use the global scope?
 *   a. Can't predict the future.
 *   b. Reduce collision
 *   c. Maintain independence,
 *   d. Easier to write your own code, because scope is self contained
 *
 * 6. Explain hoisting.
 * all variables (var) are declared at the top of any given function scope
 * whether you like it or not (include function declarations)
 *
 * Const and Let
 *   a. Not hoisted
 *   b. Scoped within the block they are in
 *   c. Gives you more control
 *
 * 7. What's the difference between a variable that is: null, undefined,
 * undeclared?
 *
 * Undeclared - trying to use a variable that hasn't been declared yet
 *   foo is declared yet
 *   const bar = foo + 1;
 *
 * Undefined
 *   a. a function that doesn't return anything
 *   b. undefined values
 *   c. const baz; Missing initializer on const declaration.
 *   d. is falsy
 *   e. check for undefined console.log(foo === undefined);
 *
 * Null
 *   a. null is value. It's value is null
 *   b. placeholder assignment
 *   c. null is "nothing" value
 *   d. falsy
 *   e. not zero, empty string, object, array
 *   f. check foo === undefined
 *
 * == checks for equality
 *
 * === checks for equality and type
 * 
 * What is the event loop?
 * 
 * What is the return type of logical operators (||, &&)? 
 * If the candidate answers 'Boolean', I ask them to explain, 
 * how does "var a = a || {};" work. 
 * 
 * How is the length of an array determined? What will be the output of this code?
 * 
 * 
 * 

 */
let a = [];
console.log((a[10] = 5));
console.log(a.length);

a.forEach((i) => {
  console.log(i);
});
