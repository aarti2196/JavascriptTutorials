/* Primitive Data type  :- Memory allocation in stack :- strings,numbers,
 boolean,null,undefined,symbol
 Reference Data type  :- Memory allocation in heap (objects):- Arrays ,
functions, Dates */
var Vname = "Javascript";
console.log(Vname +"  "+ (typeof Vname)); // string 
var marks = 95;
console.log(marks + " " + (typeof marks));
let isdriver =true;
console.log(isdriver);
let nullvar= null;
console.log(nullvar  + "" + (typeof nullvar)); //null object
let undef= undefined;
console.log(undef + "" + (typeof undef))  // undefined
let stmarks = {
    'arati' : 23,
    'Aarya' : 28,
    'Aayush' :30
}
console.log(stmarks + "" + (typeof stmarks))
function findName() {
    
}
console.log(typeof findName)

let date = new Date();
console.log(typeof date)