class ArrayWrapper {
  constructor(arr) {
    this.arr = arr;
  }

  valueOf() {
    return this.arr.reduce((sum, num) => sum + num, 0);
  }

  toString() {
    return `[${this.arr.join(",")}]`;
  }
}
