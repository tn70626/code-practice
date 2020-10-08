/**
 * Modules
 */

import User, { printName, printAge } from './logger.js';
import user from './logger.js';

const bob = new User('Bob', 25);
console.log(bob);

const thao = new user('Thao', 23);
console.log(thao);

printName(thao);
printAge(bob);
