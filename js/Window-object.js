console.log('window objects');
var a = window;
window.alert("Hey Arati!!!")
console.log(a);
// dont need to write window.alert beacause window is global object
alert('Hii Javascript');
b = prompt('Type your Name??'); // input (window object)
console.log(b);
if (b == 'Arati') {
    console.log('Correct You can enter');
}
else {
    console.log('You are not allowed');
}
c = confirm('Are you sure you want to delete??')  // assign boolean variable 
console.log(c)
i = window.innerHeight;
i = innerWidth;
i = scrollX
console.log(i);
k = window.document; // created document of index.html
console.log(k)
l = window.location;
console.log(l);
// r = location.reload;
// console.log(r)
p = location.href;
console.log(p);
h = window.history;
console.log(h)
// history.length