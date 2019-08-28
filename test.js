const myArray = require('./myArray');

const arr = new myArray(1);


for (let i = 1; i <= 5; i++)
  arr.push(i);

console.log(arr.print());

// console.log(arr.get(1));

// console.log(arr.pop());
// console.log(arr);

arr.insert(2, 10);
console.log(arr.print());