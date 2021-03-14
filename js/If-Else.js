console.log('Javascript If Else Statement');
var input = prompt("Please enter number to check condition");  // to get input from user 
const age = '50';
const doesdrive = false;  // use of boolean directly in IF ELSE STATEMENT
if (age == 22) {
    console.log('You are Elligible for Loan!!');
}
else if (age === 50) {
    console.log('Hello You are too elligible for loan');  // Else If to check condition and 
    //stop checking after matching value 
}
else {
    console.log('Sorry you are not Elligible!!');
}
// use triple equals to === to check condition and type of that particular variable 
const Myage = 23;
if (Myage !== 23) {                  //use ! == to check its type also 
    console.log('enter valid age');
}
else {
    console.log('You Have Entered Valid Age');
}
if (typeof Myage !== 'undefined') {
    console.log('Myage is defined');   // Myage is defined 
}
else{
    console.log('Myage is not defined');
}
if(doesdrive){
    console.log('You Can drive');
}
else{
    console.log('You cannot drive');
}

// Switch statement 
switch (input){
    case 18:
        console.log('You are 18')
        break;
        case 22:
            console.log('You are 22')
        default:
            console.log('not matching!!')
            break
}