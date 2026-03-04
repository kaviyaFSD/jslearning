// new methods in ES6 in the string and the number
let string = 'example for the string and the number methods'

console.log(string.length);
console.log(string.startsWith('example')); //true
console.log(string.endsWith('for')); //false
console.log(string.includes('for')); //true
console.log((string+" ").repeat(3));
console.log((string + "\n").repeat(3));
console.log(string.indexOf('the'));
console.log(string.lastIndexOf('the'));
console.log(string.search('the'));


// hexa decimal number
console.log(0xFF);
// Binary number
console.log(0b10101010);
// octal number
console.log(0o755);

console.log(Number.isFinite("string"));
console.log(Number.isFinite(NaN));
console.log(Number.isFinite(2));
console.log(Number.isFinite(-6));


console.log(Number.isNaN(2));
console.log(Number.isInteger(2.8));
console.log(Number.isInteger(2.0));
console.log(Number.isInteger(2));




