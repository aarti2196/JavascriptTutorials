console.log('Parent Traversing DOM');
let cont = document.querySelector('.no');
cont = document.querySelector('.container')
// console.log(cont.childNodes); // new line converted into text (In child Nodes)
// console.log(cont.children);  // only contains children (Elements)
let nodeName = cont.childNodes[1].nodeName; // To access node Name
console.log(nodeName);
/*Nodes Type
1.Element
2.Attribute
3.Text Node
8.Comment
9.Document
10.doctype
*/
let nodeType = cont.childNodes[4].nodeType;
console.log(nodeType);
let container = document.querySelector('div.container');
console.log(container.children[1].children[2]);
console.log(container.firstChild);  //firstChild
console.log(container.firstElementChild);//firstElementChild
console.log(container.lastElementChild); // lastElementChild
console.log(container.childElementCount); //childElementCount
console.log(container.firstElementChild.parentNode); // parent node is div container
console.log(container.firstElementChild.nextElementSibling); // Next sibling 