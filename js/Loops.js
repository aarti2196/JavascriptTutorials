console.log('Hii Loop');
// To repeat actions till condition gets false
/*
1.for loop
2.while Loop
3.Do while
*/
// for (i = 0; i < 10; i++) {
//     console.log(i);
// }
// i will start from 0 , then check i less than 10, it will print 0,1,2,3,4,5,6,7,8,9 
// while loop := Declare variable first then condition.. and after that increament
// let j = 0;
// while (j < 10) {
//     console.log(j);
//     j++;
// }
// let x = 0;
// x += 1; // compound operator  x=x+1
// x++;
// console.log(x);
/*  let j = 0;   
while(j<100){
    console.log(j);
    In this case loop will run infinite 
}    */
// let a = 110;   //  in this case at first step will get false and loop will not run
// while (a < 10) {
//     console.log(a);
//     a++;
// }
// // Do while:- so here we can use do while 
// let k = 0;   // at lease for 1 time it will run.. if condition false then also it will run for 1 time
// do {
//     if(k===5){
//         break;
//     } console.log(k+1)
// } while(k<10)  // when condition fails 
// console.log('done');

// Loop forEach in javascript

let d=0;
do{
if(d===5){
    d+=1;
    continue;
}console.log(d+1);
d+=1;
}while(d<10);


  // ForEach Loop in Javascript (Using ForEach in Functions)
 let arr = [1,2,3,4,5,6];
arr.forEach(function(element){
console.log(element)
});
console.log('done');
    // using for loop the same example 
let arr2 = [11,12,13,14,15,16,17,18,19,20];
for (let i=0;i<arr2.length;i++){
    const element = arr2[i];
    console.log(element);
    // console.log(arr2)  // this will print array 
}
// For loop syntax in javascript
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

//loop for key values pairs[Handling loop in objects]
let obj1 = {
    'Name' :'Javascript',
    'position':'Developer',
    'year':2,
    'type':'Programming Language'
}
for (let key in obj1){
    console.log(obj1[key]);
}