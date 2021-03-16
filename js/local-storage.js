console.log('Local storage');
a = window.localStorage;
console.log(a);
localStorage.setItem('Name', 'AratiJ'); // setItem in localStorage
localStorage.setItem('Name2', 'Niharika');
// Name=window.localStorage.Name;
// console.log(Name);
let myname = localStorage.getItem('Name');
console.log(myname); // getItem in localstorage
let nExist = localStorage.getItem('myProfession');
console.log(nExist);  //Trying to fetch item which is not exist in local storage 
//It will give null.
// localStorage.clear(); // clears the entire localStorage 
/* clear a particular key-value pair*/
localStorage.removeItem('Name');
// Limitations in Localstorage:- we cant add array in localstorage
let imparr = ['Javascript', 'sapui5', 'reactnative'];
console.log(imparr);
localStorage.setItem('sub', JSON.stringify(imparr)); //  converted array into string
z = localStorage.getItem('sub'); // It will print string not array
console.log(z);
// so to convert that string into array 
z = JSON.parse(localStorage.getItem('sub'));//returns an object
console.log(z);