/**
 * Objects review
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
 */

// objects and properties
// you can access objects using dot notation

// objectName.propertyName;

// creating new objects
var myCar = new Object();
// adding properties
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;

// Object initializer variation
var myCar = {
  make: 'Ford',
  model: 'Mustang',
  year: 1969,
};

// unassigned properties of an object are undefined

//Properties of JavaScript objects can also be accessed or set using a bracket notation

myCar['make'] = 'Ford';
myCar['model'] = 'Mustang';
myCar['year'] = 1969;

// Any property name that is not a valid JavaScript identifier (for example, a property name that has a space or a hyphen, or that starts with a number) can only be accessed using the square bracket notation.

var myObj = new Object(),
  str = 'myString',
  rand = Math.random(),
  obj = new Object();

myObj.type = 'Dot syntax';
myObj['date created'] = 'String with space';
myObj[str] = 'String value';
myObj[rand] = 'Random Number';
myObj[obj] = 'Object';
myObj[''] = 'Even an empty string';
// console.log(myObj);

// You can also access properties by using a string value that is stored in a variable:
var propertyName = 'make';
myCar[propertyName] = 'Ford';

propertyName = 'model';
myCar[propertyName] = 'Mustang';

// For...in to iterate over all the enumerable properties of an object

function showProps(obj, objName) {
  var result = '';

  for (var i in obj) {
    // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain

    if (obj.hasOwnProperty(i)) {
      result += `${objName}.${i} = ${obj[i]}\n`; // \n => newline
    }
  }
  return result;
}

//So, the function call showProps(myCar, "myCar") would return the following:
// myCar.make = Ford
// myCar.model = Mustang
// myCar.year = 1969

// console.log(showProps(myCar, 'myCar'));

/**
 * Enumerate the properties of an object
 *
 * 1. for...in => for(var i in obj)
 * This method traverses all enumerable properties of an object and its prototype chain.
 *
 * 2. Object.keys(obj)
 * This method returns an array with all the own (not in the prototype chain) enumerable properties' names ("keys") of an object obj.
 *
 * 3. Object.getOwnPropertyNames(obj)
 *
 * This method returns an array containing all own properties' names (enumerable or not) of an object o.
 */

const objKeys = Object.keys(myCar);
// console.log(objKeys);

function logKeys() {
  objKeys.forEach((key) => {
    console.log(myCar[key]);
  });
}

const objOwnProps = Object.getOwnPropertyNames(myCar);
// console.log(objOwnProps);

/**
 * Constructor functions
 *
 * 1. There is a strong convention, with good reason, to use a capital initial letter.
 * 2. Create an instance of the object with new.
 */

function Car(make, model, year, person) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.person = person;
  this.displayCar = displayCar;
}
// You can create any number of Car objects by calls to new. For example,
var mycarA = new Car('Eagle', 'Talon TSi', 1993);
var kenscar = new Car('Nissan', '300ZX', 1992);
var vpgscar = new Car('Mazda', 'Miata', 1990);

function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}

var rand = new Person('Rand McKinnon', 33, 'M');
var ken = new Person('Ken Jones', 39, 'M');

var car1 = new Car('Eagle', 'Talon TSi', 1993, rand);
var car2 = new Car('Nissan', '300ZX', 1992, ken);

/**
 * Using the Object.create method
 *
 * This method can be very useful, because it allows you to choose the prototype object for the object you want to create, without having to define a constructor function.
 */

// Animal properties and method encapsulation
var Animal = {
  type: 'Invertebrates', // Default value of properties
  displayType: function () {
    // Method which will display type of Animal
    console.log(this.type);
  },
};
// Create new animal type called animal1
var animal1 = Object.create(Animal);
animal1.displayType(); // Output:Invertebrates

// Create new animal type called Fishes
var fish = Object.create(Animal);
fish.type = 'Fishes';
fish.displayType(); // Output:Fishes

/**
 * Defining properties for an object type
 * You can add a property to a previously defined object type by using the prototype property.
 * This defines a property that is shared by all objects of the specified type, rather than by just one instance of the object.
 */

Car.prototype.color = null;
car1.color = 'black';

/**
 * Defining methods
 * A method is a property of an object that is a function
 * Methods are defined the way normal functions are defined, except that they have to be assigned as the property of an object.
 */

// external function example

function displayCar() {
  var result = `A Beautiful ${this.year} ${this.make} ${this.model}`;
  console.log(result);
}

// add "this.displayCar = displayCar;" to the Car object above

// we can bind the external function the Car object
car1.displayCar();
car2.displayCar();

/**
 * Using "this" for object references
 *
 * "this" is used with a method to refer to the current object;
 */

const Manager = {
  name: 'John',
  age: 27,
  job: 'Software Engineer',
};
const Intern = {
  name: 'Ben',
  age: 21,
  job: 'Software Engineer Intern',
};

const Thao = {
  name: 'Thao',
  age: 23,
  job: 'student dentist',
};

function sayHi() {
  // this.name refers to the value from that specific object
  console.log('Hello, my name is', this.name);
}

// add sayHi function to both objects
Thao.sayHi = sayHi;
Manager.sayHi = sayHi;
Intern.sayHi = sayHi;

Thao.sayHi(); // Hello, my name is Thao
Manager.sayHi(); // Hello, my name is John'
Intern.sayHi(); // Hello, my name is Ben'

function howOldAmI() {
  console.log('I am ' + this.age + 'years old');
}
// add function to the object
Thao.howOldAmI = howOldAmI;
Thao.howOldAmI();

/**
 * Defining getters and setters
 * A getter is a method that gets the value of a specific property.
 * A setter is a method that sets the value of a specific property.
 */

var o = {
  a: 7,
  get b() {
    return this.a + 1;
  },
  set c(x) {
    this.a = x / 2;
  },
};

console.log(o.a); // 7
console.log(o.b); // 8 <-- At this point the get b() method is initiated.
o.c = 50; //   <-- At this point the set c(x) method is initiated
console.log(o.a); // 25

// Getters and setters can also be added to an object at any time after creation using the Object.defineProperties method.

Object.defineProperties(o, {
  d: {
    get: function () {
      return this.a + 1;
    },
  },
  e: {
    set: function (x) {
      this.a = x / 2;
    },
  },
});

o.e = 10;
console.log(o.d);

/**
 * Deleting properties
 * You can remove a non-inherited property by using the delete operator.
 */
// Creates a new object, myobj, with two properties, a and b.
var myobj = new Object();
myobj.a = 5;
myobj.b = 12;

// Removes the a property, leaving myobj with only the b property.
delete myobj.a;
console.log('a' in myobj); // output: "false"

/**
 * Comparing objects
 * Two distinct objects are never equal, even if they have the same properties. Only comparing the same object reference with itself yields true.
 */
// Two variables, two distinct objects with the same properties
var fruit = { name: 'apple' };
var fruitbear = { name: 'apple' };

fruit == fruitbear; // return false
fruit === fruitbear; // return false
