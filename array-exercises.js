function URLify(string) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      string = string.slice(0, i) + '%20' + string.slice(i + 1);
    }
  }
  return string;
}

function filterArray(arr) {
  let newArr = [];

  for (let n of arr)
    if (n >= 5) newArr.push(n);

  return newArr;
}

/**
 * [ INFINITY, -1, 1, 2, 3, ... ]
 */

function maxSum(arr) {
  if (arr.length < 2) throw new Error('array must have at least 2 numbers');

  let max = arr[0] + arr[1];

  /**
   * O(n^2)
   */

  /* n times */
  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i];
    /* n - i times */
    for (let j = i + 1; j < arr.length; j++) {
      sum += arr[j];
      if (sum > max) max = sum;
    }
  

  return max;
}

console.log(URLify('tauhida parveen'));

console.log(filterArray([1, 2, 3, 4, 5, 6, 7, 8]));

let testArr = [50, -10, 5];

console.log(testArr, maxSum(testArr));