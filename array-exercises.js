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
}

//[1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]

function merge(array1, array2) {
  let newArray = [];

  const lengths = array1.length + array2.length;

  for (let i = 0; i < lengths; i++) {
    (array1[0] > array2[0]) ? newArray.push(array2.shift()) : newArray.push(array1.shift());
  }

  return newArray;
}

function unvowel(string) {
  const forbidden = 'aeiou';
  for (let i = 0; i < string.length; i++) {
    if (forbidden.includes(string[i])) {
      string = string.slice(0, i) + '' + string.slice(i + 1);
    }
  }
  return string;
}

function rotationChecker(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  for (let i = 0; i < str1.length; i++) {
    if (str1 === str2) {
      return true;
    }
    str1 = str1.slice(1) + str1.slice(0, 1);
  }

  return false;
}

console.log(rotationChecker('amazon', 'azonma'));
console.log(rotationChecker('amazon', 'azonam'));

function products(arr) {
  let products = [];
  for (let i = 0; i < arr.length; i++) {
    let product = 1;
    for (let j = 0; j < arr.length; j++) {
      if (j !== i)
        product *= arr[j];
    }
    products.push(product);
  }

  return products;
}


/**
 * O(n^3)
 */
function array2d(arr) {
  let result = [];

  /* n */
  for (let row of arr) {
    result.push([...row]);
  }

  /**
   * O(n^3)
   */

  /* n */
  for (let i = 0; i < arr.length; i++) {
    /* n */
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 0) {
        /* n */
        for (let k = 0; k < result.length; k++) {
          result[k][j] = 0;
        }

        /* n */
        result[i].fill(0);
      }
    }
  }

  return result;
}

let testArr = [
  [1, 0, 1, 1, 0],
  [0, 1, 1, 1, 0],
  [1, 1, 1, 1, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1]
];


// console.log(URLify('tauhida parveen'));

// console.log(filterArray([1, 2, 3, 4, 5, 6, 7, 8]));


// console.log(testArr, maxSum(testArr));

// console.log(merge([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));

// console.log(unvowel('Battle of the Vowels'));
<<<<<<< HEAD
=======

// console.log(products(testArr));

console.log(array2d(testArr));
>>>>>>> 00ca8eb0ee326181fd5c256a2ad69de3953470f5
