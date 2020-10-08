const codeOutput = document.querySelector('.code-output');

/**
 * Promises
 * https://www.youtube.com/watch?v=DHvZLI7Db8E
 */
let p = new Promise((resolve, reject) => {
  let a = 1 + 1;

  if (a === 2) {
    resolve('Success');
  } else {
    reject('Failed');
  }
});

function markup(message) {
  const markup = `
  <h2>Promises</h2>
  <h3>Tutorial: <a href="https://www.youtube.com/watch?v=DHvZLI7Db8E">https://www.youtube.com/watch?v=DHvZLI7Db8E</a>
  <p>Promises output: ${message}</p>
  `;
  codeOutput.innerHTML = markup;
}

p.then((message) => {
  markup('This is in the then ' + message);
}).catch((message) => {
  markup('This is in the catch ' + message);
});

const userLeft = false;
const userWatchingCatMeme = true;

function watchTutorialPromise() {
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: 'User Left',
        message: ':(',
      });
    } else if (userWatchingCatMeme) {
      reject({
        name: 'User Watching Cate Meme',
        message: 'Cats are better',
      });
    } else {
      resolve('Thumbs up! This is the resolve');
    }
  });
}

watchTutorialPromise()
  .then((message) => {
    console.log('Success: ' + message);
  })
  .catch((error) => {
    console.log('Error: ' + error.name + ' ' + error.message);
  });

/**
 * Promises.all
 */

const promiseOne = new Promise((resolve, reject) => {
  resolve('Video 1 Recorded');
});

const promiseTwo = new Promise((resolve, reject) => {
  resolve('Video 2 Recorded');
});

const promiseThree = new Promise((resolve, reject) => {
  resolve('Video 3 Recorded');
});

// waits for all promises to complete
Promise.all([promiseOne, promiseTwo, promiseThree]).then((message) => {
  console.log(message);
});

// executes as soon as one of the promises resolves
Promise.race([promiseOne, promiseTwo, promiseThree]).then((message) => {
  console.log(message);
});
