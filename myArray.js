const Memory = require('./memory');

const memory = new Memory();

class myArray {
  constructor(capacity = 0) {
    this.length = 0;
    this._capacity = capacity >= 0 ? capacity : 0;
    this.ptr = memory.allocate(this.length);
  }

  push(value) {
    if(this.length >= this._capacity) {
      this._resize((this.length + 1) * myArray.SIZE_RATIO);
    }

    memory.set(this.ptr + this.length, value);
    this.length++;
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