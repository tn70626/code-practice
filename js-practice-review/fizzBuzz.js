/**
 * 
 * 
 Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
 * 
 */

const fizzBuzz = () => {
  for (i = 1; i <= 100; i++) {
    // if multiple of 3 or 5
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    }
    // if multiple of 3
    else if (i % 3 === 0) {
      console.log('Fizz');
    }
    // if multiple of 5
    else if (i % 5 === 0) {
      console.log('Buzz');
    }
    // print number
    else {
      console.log(i);
    }
  }
};

fizzBuzz();
