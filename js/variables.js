// Variable in Javascript 
// var,let,const keywords
var Myname = 'Arati';
console.log(Myname);
var sub;// this is declaration of variable 
sub = 'Javascript'; // this is assign for that variable 
console.log(sub);
console.log(Myname, sub);
//  If you dont assign value to a variable it will give undefined 
var marks = "86"; // it will give you string
console.log(marks);
/*1. Cannot start with numbers
2.can start with _, $, 
3.are case sensitive 
*/
var $company = 'Sapours Technology';
console.log($company);
// const and let use for code readablity 
const ownersName = 'Arati';
console.log(ownersName);
// ownersName = 'Joshi';
// console.log(ownersName); You cannot reassigned const variable 
/* let keyword  :-  Block level Scope */
{
    let city = "Aurangabad";//local variable 
    city = "pune";
    console.log(city);
}
// } console.log(city);    // uncaught error city is not defined 
// let has only block level scope, so outside the bracket let does not have scope 
const arr1 = [11, 12, 13, 14, 15];
arr1.push(23);
console.log(arr1)
/* Most common case types in programming language
1.camel case :-  nameFirstName
2.kabaab case:- name-fisrt
3.snake-case :- snake_case
4.pascal case:-PascalCase
*/