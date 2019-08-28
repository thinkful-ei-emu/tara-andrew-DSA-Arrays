const MyArray = require('./MyArray');

const arr = new MyArray();

for (let i = 1; i <= 5; i++)
  arr.push(i);


console.log(arr);
console.log(arr.print());

arr.insert(2, 10);
console.log(arr.print());

while(arr.length > 0) arr.pop();

arr.push('tauhida');

console.log(arr);
console.log(arr.print());