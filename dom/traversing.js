const { lstat } = require('fs');

const wes = document.querySelector('.wes');

// console.log(wes.children);
// console.log(wes.firstElementChild);
// console.log(wes.lastElementChild);
// console.log(wes.previousElementSibling);
// console.log(wes.nextElementSibling);
// console.log(wes.parentElement);

const p = document.createElement('p');
p.textContent = 'I will be removed';
document.body.appendChild(p);

p.remove();

console.log(p);

document.body.appendChild(p);

// element selectors
// children
// firstElementChild
// lastElementChild
// previousElementSibling
// nextElementSibling
// parentElement

// node selectors
// childNodes
// firstChild
// lastChild
// previousSibling
// nextSibling
// parentNode
