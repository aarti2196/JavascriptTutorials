// document.getElementById('id').addEventListner ('event',function(e){
// e :- event object
// })
console.log('Events in Js');
document.getElementById('heading').addEventListener('click', function (e) {

    // location.href ="https://www.amazon.com/"
    let variable;
    console.log('You have Clicked on this heading!!')
    variable = e.target;
    variable = e.target.className;
    variable = e.target.classList;
    variable = Array.from(e.target.classList);
    console.log(e.target); // will get target value 
    console.log(e.target.className);
    console.log(e.target.classList); // will get classList
    let j = e.target.id;
    j = e.offsetX; // X co-ordinate
    let k = e.offsetY; // Y co- ordinate
    console.log(j);
    console.log(k);
    let c = e.clientX; // window click
    console.log(c);
});