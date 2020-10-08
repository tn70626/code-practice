/**
 * Class w/ member functions that require closures and callbacks
 */

class Person {
  constructor(name) {
    this.name = name;
  }
  say() {
    const says = 'says Hello World';
    console.log(this.name, says);
  }
  doSomething(callback) {
    callback.call(this);
  }
  secret() {
    const length = this.name.length;
    return length;
  }
}

function somethingToDo() {
  console.log(`Hi Im the ${this.name}`);
}

let bob = new Person('Bob');
bob.say();

let paul = new Person('Paul');
// paul.custom.bind(paul);
paul.doSomething(somethingToDo);
console.log(paul.secret());
