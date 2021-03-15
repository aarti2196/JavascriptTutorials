// console.log('DOM');
a = document;
a = document.all;
// a = document.body;
console.log(a)
// array type of object
Array.from(a).forEach(function (element) {
    console.log(element)
});
// Array.from(a) it will create a array with help of a and then it will iterate elements 
a=document.links[0];
console.log(a)
