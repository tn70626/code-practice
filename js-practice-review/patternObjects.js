/**
 * Common Patterns To Create Objects
 *
 * https://www.javascripttutorial.net/create-objects-in-javascript/
 *
 * 1. Factory Pattern
 * 2. Constructor Pattern
 * 3. Prototype Pattern
 * 4. Constructor/Prototype Pattern
 * 5. Parasitic constructor Pattern
 * 6. Durable constructor Pattern
 *
 */

//
// Factory Pattern
//
/**
 * Factory pattern uses a function to abstract away the process of creating specific objects/
 */

function createAnimal(name) {
  var o = new Object();
  o.name = name;
  o.indentify = function () {
    console.log("I'm a " + o.name);
  };

  return o;
}

// creating the new object dog
var dog = createAnimal('dog');

// perform object methods
dog.indentify(); // I'm a dog

/**
 *
 * Constructor Pattern
 *
 * Javascript allows you to create a custom constructor function that defines the properties and methods of user-defined objects.
 *
 * By convention, the name of a constructor function in JavaScript starts with an uppercase letter.
 *
 */

function Animal(name) {
  this.name = name;
  this.identify = function () {
    console.log("I'm a " + this.name);
  };
}

var cat = new Animal('cat');
cat.identify(); // I'm a cat

/**
 * Unlike factory pattern, properties and methods of animal object are assigned directly to the "this" object inside the constructor function.
 * Javascript engine creates the Animal() function and an anonymous object.
 * The Animal() function has the prototype property reference an anonymous object and the anonymous object has the constructor property reference the Animal() function.
 *
 */

/**
 *
 * Prototype Pattern
 * The prototype pattern adds properties of the object to the prototype object.
 */

function AnimalProto() {
  // properties are added to prototype
}

AnimalProto.prototype.name = 'Noname';
AnimalProto.prototype.identify = function () {
  console.log("I'm a " + this.name);
};

var zebra = new AnimalProto();
zebra.name = 'zebra';
zebra.identify(); // I'm a zebra

/**
 *
 * Constructor / Prototype Pattern
 *
 * The constructor pattern defines object properties, while the prototype patter defines methods and shared properties.
 */

function AnimalA(name) {
  this.name = name;
}

AnimalA.prototype.identify = function () {
  console.log("I'm a " + this.name);
};

var hamster = new AnimalA('hamster');
hamster.identify(); // I'm a hamster

/**
 *
 * Parasitic constructor pattern
 *
 * In a parasitic constructor pattern, you create a constructor function that creates an object and returns that object.
 *
 */

function AnimalB(name) {
  // creates the object
  var o = new Object();

  // assign properties
  o.name = name;
  o.identify = function () {
    console.log("I'm a " + o.name);
  };

  // returns the object
  return o;
}

var lion = new AnimalB('lion');
lion.identify();

/**
 *
 * Durable Constructor Pattern
 *
 * A durable object is an object that does not have a public properties and its methods don't reference to the "this" object
 *
 * Durable object are often used in secure environments where accessing "this" and "new" are not allowed
 *
 */

function secureAnmial(name) {
  var o = new Object();

  o.identify = function () {
    console.log("I'm a " + name);
  };

  return o;
}

var shark = secureAnmial('shark');

shark.identify();

/**
 *
 * Own properties of an Object
 *
 * An Object is a collection of properties, each property is a key-value pair.
 *
 * JS uses prototypal inheritance. Therefore, a property of an object can be either own or inherited.
 *
 * A property that is defines on an object is own while a property that the object receives from its prototype is inherited
 *
 */

const person = {
  firstName: 'Tru',
  lastName: 'Nguyen',
};

// an object called employee is created and inherits from the person object
const employee = Object.create(person, {
  job: {
    value: 'JS Developer',
    experience: true,
  },
});

// The employee object has its own property job, and inherits firstName and lastName properties from its prototype person.
