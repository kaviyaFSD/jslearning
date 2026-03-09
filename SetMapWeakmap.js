// set 
// which is used to store unique values
// it is stored a only the values
let newArray = [1,2,3,4];
let newSet = new Set(newArray);
console.log(newSet);
console.log(newSet.add('100'));
console.log(newSet.has('100'));
console.log(newSet.delete('100'));
console.log(newSet.add({a:1,b:2}));
console.log(newSet.size);

// Map
// which is used with key value pair
// key can be any data type
// value can be any data type
// which is used in the object

let newMap = new Map([['a1','hello'],['b1','world']]);
newMap.set('c1','bye');
console.log(newMap);
newMap.delete('c1');
console.log(newMap);

/*
its a map method in array not a data strucutre
const nums = [1,2,3];

const result = nums.map(n => n * 2);

console.log(result);
*/


// WeakMap
// it only allows to store a obj


let carset = new WeakSet(); //creat a new weakset
let car2 = {  //new object
  name: "BMW",
  price: 100000
};
carset.add(car2);  // add the car to the weakset
console.log(carset);

// let weakset = new WeakSet();

// let car1 = { name: "BMW" };

// weakset.add(car1);

// console.log(weakset.has(car1)); 

/*
weakMap is used to store key value pair
*/
let weakmap = new WeakMap();

let car1 = {
  name: "BMW"
};

weakmap.set(car1, 100000);

console.log(weakmap.get(car1));




