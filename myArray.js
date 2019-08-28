const Memory = require('./memory');

const memory = new Memory();

class myArray {
  constructor(capacity = 0) {
    this.length = 0;
    this._capacity = capacity >= 0 ? capacity : 0;
    this.ptr = memory.allocate(this.length);
  }

  push(value) {
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * myArray.SIZE_RATIO);
    }

    memory.set(this.ptr + this.length, value);
    this.length++;
  }

  get(index) {
    if (index < this.ptr || index > this.ptr + this.length) {
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
      this._resize((this.length + 1) * myArray.SIZE_RATIO);
    }

    memory.copy(index + 1, index, this.length - index);
    memory.set(index, value);

    this.length++;
  }

  print() {
    let arrayString = '[ ';

    for (let i = 0; i < this.length; i++) {
      arrayString += i !== this.length - 1
        ? `${this.get(i)}, `
        : `${this.get(i)} `;
    }

    arrayString += ' ]';

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


myArray.SIZE_RATIO = 3;

module.exports = myArray;