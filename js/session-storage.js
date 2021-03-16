console.log('Session Storage in JS');
let myarr = ['ui5','Developer','Angular'];
sessionStorage.setItem('Name', 'Arati');
sessionStorage.setItem('Name2', 'Angular');
sessionStorage.setItem('Key3',myarr); // it will store as a string 
sessionStorage.setItem("key4",JSON.stringify(myarr)); // it will store as an array
a= sessionStorage.getItem('key4',myarr);
console.log(a); // it will give string 
b= JSON.parse(sessionStorage.getItem('key4'));
console.log(b); // it will give an arary elements
