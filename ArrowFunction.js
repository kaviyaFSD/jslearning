// Arrow function is the simplest way to create a function in JavaScript.
// It is a shorter way to write a function.
// It is also known as lambda function.
// It is also known as anonymous function.
// it will reduce the keystroke and make the code more readable.

let add =(a,b) => {
    console.log(a + b);
     
}
add(2,3);
// console.log(add(2,3));


// promises is used for the Asyncronous, which is not completed yet but it the future it will be completed
// which is also used to fetch any api
/*Promise = Future result
resolve() → success
reject() → failure
.then() → success handle
.catch() → error handle */

var myPromise = new Promise(function(resolve,reject){
    let success = true;
    if(success){
    setTimeout(function(){
        resolve("Hello");
    },1000);
}
else{
    reject("Error");
}
});

myPromise
.then(function(value){
    console.log(value);
})
.catch(function(error){
    console.log(error);
});

// Generator which is used for the pause, resume and the return value
function* g1(){
    yield 1;
    yield 2;
    yield 3;
}
let g2 = g1();
console.log(g2.next());
console.log(g2.next());
console.log(g2.next());
console.log(g2.next());

// normal function vs generator function
/*
  normal function excutes all the same time but generator function excutes one by one which , resume and pause 
  normal function use the return keyword but generator function use the yield keyword
  normal function once return it will not excute the rest of the code but generator function will excute the rest of the code
*/

