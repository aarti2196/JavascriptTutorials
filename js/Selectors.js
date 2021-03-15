console.log('Selectors in Js');
/* 1.Single Element Selector
2.Multi Element Selector
*/
// 1.Single Element Selector
let element = document.getElementById('first');
// element = element.className;  // class Name 
// element = element.childNodes; // child Nodes
// element = element.parentNode; // parent Node
element.style.color = 'red'; // change css using javascript
element.innerText = "Arati is javascript Developer"; // inner text(to change inner text)
element.innerHTML = '<b>Hey Arati!!</b>'; // to change innerHTML can use it with tags
console.log(element.innerHTML); // track inner html 
let sel = document.querySelector('#first'); // use # for id 
sel = document.querySelector('.child'); // use . for class
sel = document.querySelector('div');
sel.style.color = 'green'
console.log(sel);
//2.Multi Element Selector
let elem = document.getElementsByClassName('child');
elem = document.getElementsByClassName('container');
elem = document.getElementsByTagName('div');
// console.log(elem[0].getElementsByClassName('child'));
console.log(elem);
// Loop  In DOM 
Array.from(elem).forEach(element => {
    element.style.color = 'blue';
    console.log(elem);

});
// loop using for Loop
for (let index = 0; index < elem.length; index++) {
    const element = elem[index];
    element.style.color = 'red';
    console.log(elements);
}