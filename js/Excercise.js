//Use document.images and document.scripts and print the list of images and Scripts on an
// html page 
/* Create a variable which is a string containing the text which is a link you are 
interested in
Have to fetch all the links from a given page which contains this text  
*/
let a = document.links;
console.log(a);
let find = "192"
Array.from(a).forEach(function (element) {
    if (element.href.includes(find)) {
        console.log(element.href);
    }
});