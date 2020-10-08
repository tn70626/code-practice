// any inside Function has access to the outside variables and scope

function outerFunction(outerVariable) {
  const outer = 'outer var';
  return function inner(innerVar) {
    console.log('outer var: ', outerVariable);
    console.log('inner var: ', innerVar);
    console.log(outer);
  };
}

const newFunction = outerFunction('outside');
newFunction('inner');

function getData(url) {
  // for example the variable url is accessible by the inner function
  fetch(url).then(() => {
    console.log(url);
  });
}

// holds the variables inside
let obj = function () {
  let i = 0;

  return {
    setI(k) {
      i = k;
    },
    getI() {
      return i;
    },
  };
};

let x = obj();

x.setI(2);
console.log(x.getI());
x.setI(4);
console.log(x.getI());
