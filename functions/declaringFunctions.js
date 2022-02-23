// Function Declaration
// function doctorize(name) {
//   return `Dr. ${name}`;
// }

// Anon Function
// function (name) {
//   return `Dr. ${name}`;
// }

// Function Expression
// const doctorize = function (name) {
//   return `Dr. ${name}`;
// };

// explicit return
// const inchToCM = (inches) => {
//   return inches * 2.54;
// };

// implicit return (if only one param, then remove parenthesis)
// const inchToCM = inches => inches * 2.54;

// explicit return
// function add(a, b = 3) {
//   const total = a + b;
//   return total;
// }

// implicit return (if only one param, then remove parenthesis)
// const add = (a,b = 3) => a + b;

// explicit return
// function makeABaby(first, last) {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0,
//   };
//   return baby;
// }

// implicit return (if only one param, then remove parenthesis)
// const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });

// IIFE
// IIFE
// Immediately Run Function Expression
// Immediately Invoked Function Expression

(function (age) {
  return `You are cool and age ${age}`;
})(10);

// Methods !!!
const wes = {
  name: 'wes bos',
  //    Method!
  //   sayHi: function() {
  //     console.log('hey wes');
  //     return 'hey wes';
  //   },
  //
  //   Short hand method
  yellHi() {
    console.log('Hey Wessss');
  },
  //   Arrow Function
  wisperHi: () => {
    console.log('Hi wess');
  },
};

// Callback Functions
// Click Callback
const button = document.querySelector('.click');

function handleClick() {
  console.log('Great Clicking!!!');
}

button.addEventListener('click', () => {
  console.log('Nice Job!!!');
});

// Timer Callback
setTimeout(() => console.log('Done, time to eat!'), 1000);
