/**
 * JS Class Fundamentals
 */

// Pre ES6

function Animal(name) {
  this.name = name;
}

Animal.prototype.identify = function () {
  console.log('My animal name is ' + this.name);
};

var cat = new Animal('cat');
cat.identify(); // My animal name is cat

/**
 * JS Class Declaration
 */

class AnimalClass {
  constructor(name) {
    this.name = name;
  }
  identify() {
    console.log('My animal name is ' + this.name);
  }
}

var dog = new AnimalClass('dog');
dog.identify();

/**
 * Class declarations is syntactic sugar of the constructor function
 *
 * Syntactic sugar is syntax in JavaScript programming language designed to make things easier to express more clearly and concisely.
 *
 * Class declarations are no hoisted like function declarations
 */

// Class expression form

let AnimalExpression = class {
  constructor(name) {
    this.name = name;
  }
  identify() {
    console.log(this.name);
  }
};

let duck = new AnimalExpression('duck');
duck.identify();
