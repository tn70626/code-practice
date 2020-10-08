/**
 * Constructor Functions
 *
 * Functions to create objects
 * Pascal notation: uppercase every first letter
 */

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log('draw', this.radius);
  };
}

const circle = new Circle(1);

console.log(circle);
circle.draw();

// Class constructor

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  print() {
    console.log(this.name, this.email);
  }
}

const bob = new User('Bob', 'bob@email.com');
bob.print();

// Factory function
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log('draw');
    },
  };
}

const myCircle = createCircle(1);
