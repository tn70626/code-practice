/**
 * Module Import and Exports tutorial
 * https://www.youtube.com/watch?v=cRHQNNcYf6s
 */

// this variable and function is scoped to this file

export default class user {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

export function printName(user) {
  console.log(`User's name is ${user.name}`);
}

export function printAge(user) {
  console.log(`User's age is ${user.age}`);
}

// alternately
// can only have one export default
// export default User;

// alternatively exporting functions
// export { printName, printAge };
