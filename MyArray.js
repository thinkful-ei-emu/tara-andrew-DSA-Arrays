const Memory = require('./memory');

const memory = new Memory();

class MyArray {
  constructor(capacity = 0) {
    // console.log(capacity);
    this.length = 0;
    this._capacity = capacity >= 0 ? capacity : 0;
    // console.log(this._capacity);
    this.ptr = memory.allocate(this._capacity);
  }

  push(value) {
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * MyArray.SIZE_RATIO);
    }

    memory.set(this.ptr + this.length, value);
    this.length++;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Invalid index');
    }
    return memory.get(this.ptr + index);
  }


  pop() {
    if (this.length === 0) {
      throw new Error('Invalid index');
    }
    let val = memory.get(this.ptr + this.length - 1);
    this.length--;

    return val;

  }

  /**
   * [1, 2, 3, 4, 5]
   * insert(2, 10);
   * []
   */

  insert(index, value) {
    if (this.length >= this.capacity) {
      this._resize((this.length + 1) * MyArray.SIZE_RATIO);
    }

    memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
    memory.set(this.ptr + index, value);

    this.length++;
  }

  remove(index) {
    if(index < 0 || index > this.length-1) {
      throw new Error('Invalid index');
    }
    memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);

    this.length--;
  }

  print() {
    let arrayString = '[ ';

    for (let i = 0; i < this.length; i++) {
      arrayString += i !== this.length - 1
        ? `${this.get(i)}, `
        : `${this.get(i)} `;
    }

    arrayString += ']';

    return arrayString;
  }

  _resize(capacity) {
    const oldPtr = this.ptr;
    this.ptr = memory.allocate(capacity);

    if (this.ptr === null) throw new Error('Out of memory');

    memory.copy(this.ptr, oldPtr, this.length);

    // "free memory"
    memory.free(oldPtr);

    this._capacity = capacity;
  }
}


MyArray.SIZE_RATIO = 3;

module.exports = MyArray;