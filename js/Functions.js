// Function and Scopes
//Functions :- Block of code 
console.log('Functions and Scopes in Js');
let Myname = 'Arati';
let myname2 = 'Dhanshree';
// If we want to send same message to myName, and so on..
// Function Definition
const greet = function (Myname, thank = "Hello Dear") {
    let msg = `Happy birthday!! ${Myname}Happy Birthday!!!  ${thank}`;
    // not returning anything 
    return msg; // Returning message 
}
greet(Myname, 'Hey arati');
// Storing function in variable
let val = greet(Myname, 'Thanks');// not storing anything 
console.log(val); // This val variable storing greet function--- what is returning 
/* const greet = function (Myname, thank = "Hello Dear"):- ** we are storing function
in greet  variable.. so after we can return value from this variable
*/

/* Objects*/
const myobj1 = {
    'Name': 'Arati Joshi',
    'position': 'Angular Developer',
    'company': 'Sapours Technology',
    'contactNo': 8605437183,
    game: function () {
        return "Horror Movie";
    }
}
console.log(myobj1.game());// access function
console.log(myobj1);

Arr1 = ['Arati', 'Dhanshree', 'Rpa', 'Developer'];
Arr1.forEach(function (element, index) {
    console.log(element, index)
});
// Scope 
var a = 289;
console.log(a);
function ui(name) {
    return `this is a ${name} ui`; // returning this 
}
ui ("Arati")
console.log(ui("Arati"), a) // giving output calling function