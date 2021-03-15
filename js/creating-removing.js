console.log('Creating and Removing DOM');
let element = document.createElement('li'); // Create Element
console.log(element);
let text = document.createTextNode('I am Javascript Developer');
element.appendChild(text);
console.log(text);
// Add a class name to li Elements 
element.className = 'ui';
element.id = 'MyNew';
element.setAttribute('title', 'Mytitle');
let ul = document.querySelector('ul.this'); //add element in a specific block
// ul.appendChild(element); // append this new created child in DOM
element.innerText = ('Hello this is created By Arati');
console.log(ul);
console.log(element);
let elem1 = document.createElement('h3');
elem1.id = 'new1';
elem1.class = 'myNew';
let tnode = document.createTextNode('This is For Document 2');
elem1.appendChild(tnode);
// element.replaceWith(elem1); // Replace created Node 
let this1 = document.getElementById ('this1');
this1.replaceChild(element,document.getElementById('first'));
this1.removeChild = (document.getElementById('last1'));
let pr = elem1.hasAttribute('href');
console.log(elem1,pr);
