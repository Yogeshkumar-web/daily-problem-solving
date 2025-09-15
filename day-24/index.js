function sortBy(arr, fn) {
  return arr.sort((a, b) => fn(a) - fn(b));
}

console.log(sortBy([5, 4, 1, 2, 3], (x) => x));

console.log(sortBy(["apple", "bat", "cherry"], (word) => word.length));

console.log(
  sortBy(
    [
      { id: 1, age: 30 },
      { id: 2, age: 20 },
      { id: 3, age: 25 },
    ],
    (obj) => obj.age
  )
);
