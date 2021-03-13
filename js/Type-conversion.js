console.log('Type Conversion');
let myvar = 34;
myvar = String(34);// convert it into string
console.log(myvar);
let booleanVar = String(true);
console.log(booleanVar + "" + (typeof booleanVar));
let date = String(new Date());
console.log(date,(typeof date));
let str1 = Number("3434");
console.log(str1, typeof str1)
str1 = Number("34d342");
console.log(str1, typeof str1)
str1 = Number(true)
console.log(str1, typeof str1)
str1 =Number([1,2,3,4,5,6])
console.log(str1, typeof str1)
//parseInt
let number = parseInt('34.23');
console.log(number, (typeof number))
//parseFLoat
let mynum = parseFloat('23.2333');
console.log(mynum)
//tofixed
let num1 = parseFloat('23.2333');
console.log(number.toFixed(9));
