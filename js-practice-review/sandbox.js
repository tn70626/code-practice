// let val = 'bar';

// const func = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(val);
//     }, 0);
//   });
// };

// val = 'wut';

// const promise1 = func();

// val = 'wiz';

// promise1
//   .then((value) => {
//     console.log(value + 'baz');
//   })
//   .catch((err) => {
//     console.log(err + 'bat');
//   });

// console.log('foo');

// const func = (val) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(val);
//     }, 0);
//   });
// };

// func('foo')
//   .then(
//     (result) => 'bar',
//     (error) => 'wut'
//   )
//   .then((result) => console.log(result));
// func('baz')
//   .then((result) => {
//     throw new Error(result);
//   })
//   .then(
//     (result) => 'bat',
//     (error) => 'beep'
//   )
//   .then((result) => console.log(result));

let convertInput = (s) => {
  s = s + ' ';
  currentLetter = s[0];
  count = 1;
  result = '';
  for (let i = 1; i < s.length; i++) {
    // ignore lowercase letters
    if (s[i] !== s[i].toUpperCase()) {
      continue;
    }

    if (currentLetter === s[i]) {
      // if letter match, increment count
      count += 1;
    } else {
      // add to the result
      result = result + currentLetter + count;

      // out with old and in with the new
      currentLetter = s[i];
      count = 1;
    }
  }
  return result;
};


convertInput('AAAAAAaBBBIIKKK'); // A6B3I2K3
