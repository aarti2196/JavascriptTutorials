console.log('Web page Crawler');
//Use document.images and document.scripts and print the list of images and Scripts on an
// html page 
/* Create a variable which is a string containing the text which is a link you are 
interested in
Have to fetch all the links from a given page which contains this text  
*/
let str = 'python';
let links = document.links;
let href;
console.log(links);
Array.from(links).forEach(function (element) {
    href = element.href;
    if (href.includes(str)) {
        console.log(href);
    }
});