console.log('properties and methods');
const myname = 'Arati Joshi';
const greeting = 'Hello Good Morning';
console.log(myname +  ' '+  greeting);
let html;
html ="<h1>Hello Javascript</h1>"+
"<p>This is paragraph</p>"
html = html.concat('this',  'helloo');
console.log(html);
console.log(html.length);
console.log(html.toLowerCase());
console.log(html.toUpperCase());
console.log(html[1]);
console.log(html.indexOf('<'));
console.log(html.lastIndexOf('<'));
console.log(html.charAt(0));  // charAt
console.log(html.endsWith('helloo'));
console.log(html.endsWith('Arati'));
console.log(html.includes('Joshi'));
console.log(html.substring(1,4));
console.log(html.slice(0,4));
console.log(html.split(' '));