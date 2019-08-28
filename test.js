const myArray = require('./myArray');

const arr = new myArray(1);

console.log(arr);

arr.push(3);
arr.push(4);

console.log(arr);
console.log(arr.get(1));
console.log(arr.pop());
console.log(arr);