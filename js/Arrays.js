console.log('Array object in Javascript');
let marks = [92,86,87,98,91];
const fruits = ['banana','Mango','orange','Apple'];
const mixed = ['str',89,32,[3,5]];
console.log(mixed);
const arr = new Array(23,121,'Orange');
console.log(arr);
console.log(arr.length); //property 
console.log(Array.isArray(arr)); //method
arr[0] ='AratiJ';
let arrange = arr[0];
console.log('element : ', arrange);
console.log(arr)
let value = marks.indexOf(92);
console.log(value);
marks.push(1000);  // adding element at last 
console.log(marks);
marks.unshift(23);  // adding element in start 
console.log(marks);
marks.pop();  // remove last element
console.log(marks);
marks.shift(); // remove starting element 
console.log(marks);
marks.splice(1,2) // removing element
console.log(marks);
marks.reverse();  // reverse elements
console.log(marks);
let marks2 = [11,13,15];
marks= marks.concat(marks2);
console.log(marks);
//        Objects    : collection of strings,numbers, array (Key Value paires stores)
let myobj = {
    'Name': 'Arati',
    'position':'Javascript Developer',
    'isactive': true,
    'myarray' : [1,2,3,4]

}
console.log(myobj.myarray);