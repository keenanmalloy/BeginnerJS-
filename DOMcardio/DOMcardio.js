// Make a div
const div = document.createElement('div');

// add a class of wrapper to it

div.classList.add('wrapper');

// put it into the body
document.body.appendChild(div);
// make an unordered list
const ul = document.createElement('ul');
div.appendChild(ul);

// add three list items with the words "one, two, three" in them
const li1 = document.createElement('li');
li1.textContent = 'one';
const li2 = document.createElement('li');
li2.textContent = 'two';
const li3 = document.createElement('li');
li3.textContent = 'three';
// put that list into the above wrapper
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
// create an image
const img = document.createElement('img');
// set the source to an img
img.src =
  'https://www.petmd.com/sites/default/files/2020-11/picture-of-golden-retriever-dog_0.jpg';
// set the width to 250
img.width = 250;
// add a class of cute
img.classList.add('cute');
// add an alt of Cute Puppy
img.alt = 'Cute Puppy';
// Append that image to the wrapper
div.appendChild(img);
// with HTML string, make a div, with two paragraphs inside of it
const myHTML = `<div class='myDiv'>
<p>Paragraph 1</p>
<p>Paragraph 2</p>
</div>`;
// put this div before the unordered list from above
const ulElement = div.querySelector('ul');
ulElement.insertAdjacentHTML('beforebegin', myHTML);

// add a class to the second paragraph called warning
const myDiv = div.querySelector('.myDiv');
myDiv.children[1].classList.add('warning');
// remove the first paragraph
myDiv.firstElementChild.remove();
// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
const generatePlayerCard = (name, age, height) => {
  const html = `<div class="playerCard">
    <h2>${name} — ${age}</h2>
    <p>Their height is ${height} and ${age} years old. In Dog years this person would be ${
    age * 7
  }. That would be a tall dog!</p>
  <button class='delete' type='button'>&times; Delete</button>
    </div>`;
  return html;
};
// make a new div with a class of cards
const newDiv = document.createElement('div');
newDiv.classList.add('cards');
// make 4 player cards using generatePlayerCard
let cardsHTML = generatePlayerCard('roscoe', 2, 150);
cardsHTML += generatePlayerCard('summer', 1, 120);
cardsHTML += generatePlayerCard('snickers', 3, 140);
cardsHTML += generatePlayerCard('jake', 4, 110);
// append those cards to the div
newDiv.innerHTML = cardsHTML;
// put the div into the DOM just before the wrapper element
div.insertAdjacentElement('beforebegin', newDiv);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed
// select all the buttons!
const buttons = document.querySelectorAll('.delete');
// make out delete function
function deleteCard(event) {
  const buttonThatGotClicked = event.currentTarget;
  //   buttonThatGotClicked.parentElement.remove();
  buttonThatGotClicked.closest('.playerCard').remove();
}
// loop over them and attach a listener
buttons.forEach((button) => button.addEventListener('click', deleteCard));
