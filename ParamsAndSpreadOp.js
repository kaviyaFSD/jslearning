// params and spread operator

let arg1 = [1,2,3]
let arg2 = [4,5,6,7,8,9,10]

let arg3 = [...arg1,...arg2]
console.log(arg3);


function greet(greeting = 'hello') {
    console.log(greeting);
}
greet();