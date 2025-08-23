// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
// The returned array should be created such that returnedArray[i] = fn(arr[i], i).
// Please solve it without the built-in Array.map method.

const map = function (arr, fn) {
  // ek empty array for store result
  const returnedArray = [];

  // for lop for iterate arr elements
  // loop 0 index se shuru hoga aur arr.length tak chalega.
  for (i = 0; i < arr.length; i++) {
    // fn call
    const transformedElement = fn(arr[i], i);
    // ab fn se jo result mila hai usko returnedArray mai push karo
    returnedArray.push(transformedElement);
  }
  // jab loop pura ho jaye to final transformed array ko return kar do
  return returnedArray;
};

const arr = [1, 2, 3];

const plusone = (element) => {
  return element + 1;
};
const newArray = map(arr, plusone);
console.log(newArray);

///----------------

const addByIndex = (element, index) => {
  return element + index;
};

const newArray1 = map(arr, addByIndex);
console.log(newArray1);

//------------

const constant = () => {
  return 42;
};

const newArray2 = map(arr, constant);
console.log(newArray2);
