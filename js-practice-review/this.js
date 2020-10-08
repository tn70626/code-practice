/**
 * This keyword
 *
 * This = The object that owns the js code
 * The value of this, when used in function is the object that owns the function.
 * The value of this, when used in object itself.
 */

// the global object
console.log(this.document === document);

// in browser = window
console.log(this === window);

this.a = 37;
console.log(window.a);

// the function returns this is equal to the window
function f1() {
  return this;
}
console.log(f1() === window);

// the value of this remains what it was set to when entering the execution context
// this will equal undifined
function f2() {
  'use strict';
  return this;
}
console.log(f2() === window);

function add(c, d) {
  return this.a + this.b + c + d;
}

/**
 * Call and Apply methods to apply "this"
 */
var o = { a: 1, b: 3 };
// the first parameter in call/apply is the object to use as "this"
// call accepts an argument lists
add.call(o, 5, 7);

// apply accepts a single array of arguments
add.apply(o, [10, 20]);

/**
 * Bind Methods
 *
 * When you call the bind method on a function and pass in an object, it creates a new function with the same body and scope as the original function.
 *
 * In the new function, "this" is permanently bound to the first argument of bind
 */

function funcF() {
  return this.a;
}
// this will refer to a = unicycle
var g = f.bind({ a: 'unicycle' });
console.log(g());

// you can't bind something that already created with bind
var h = g.bind({ a: 'cereal' }); // won't work a second time

var i = { a: 8, f: funcF, g: g, h: h };
console.log(i.f(), i.g(), i.h());
// logs: 8, "unicycle", "unicycle"
// i.funcF() will return 8, this will refer to the context of the object i.a
// i.g() will return unicycle because we bound it to a new context
// i.h() will return unicycle because we can bind it a second time

/**
 * Arrow Functions
 *
 * With arrow functions, "this" is bound to the enclosing scope at creation time and cannot be changed.
 * Bind, call, apply have no effect on "this"
 */

var l = {
  traditionalFunc: function () {
    console.log(this); // this => l
  },
  arrowFunc: () => {
    console.log(this); // this => window
  },
};

l.traditionalFunc();
// this is bound here, during creation time, hence logs window
// created in scope of window and ran in the scope of l
o.arrowFunc();

/**
 * When a function is called as a method of an object, its "this" is set to the object the method is called on.
 *
 */

var m = {
  prop: 37,
  f: function () {
    return this.prop;
  },
};
// this is not affected where the function was defined
console.log(m.f()); // logs 37
