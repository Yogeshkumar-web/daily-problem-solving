// HOC

// A Higher-Order-Function ek aisa function hai jo ek ya ek se jyada functions ko arguments ke roop mein leta hai ya ek function ko return karta hai, ya dono kam karta hai. Aisa karne se JavaScript functions ko "first-class citizen" ka darja milta hai, matlab unhein variables ki tarah treat kiya ja sakta hai.

// a. Function as an Arguments: Same logic ko alag-alag functionalities ke saath reuse kar sakte hai.

// fn jo as an argument pass hoga(these fn are called callback fn.)
function greet(name) {
  return `Hello, ${name}`;
}

// HOC
function sayHelloWithCallback(callbackFn, name) {
  const greeting = callbackFn(name);
  console.log(greeting);
}

sayHelloWithCallback(greet, "yogesh");
/*



*/

// b. Function as a Return Value: ek fn dusre fn ko return karta hai. Ye concept "closure" ke saath closely related hai, ye useful hota hai jab aapko dynamic functions create karne hote hai.

// HOC
function multiplyBy(factor) {
  return function (number) {
    return number * factor;
  };
}

// ab ham multiplyBy KOC ko use karke nai fn bana sakte hai
const multyplyByTwo = multiplyBy(2);
const multyplyByTen = multiplyBy(10);

// use
console.log(multyplyByTwo(25)); // 50
console.log(multyplyByTen(25)); // 250

// built in HOC in JS
/*

1. map()
2. filter()
3. reduce()
4. forEach()

*/

// Why

/*/

HOC

1. Code Reuseability: Aap ek generic logic bana sakte hai aur usmein alag-alag fn pass karke alag-alag result pa sakte hai.

2. Abstraction: HOFs complex logic ko chhupa dete hai, jaise .map() internally kaise kam karta hai ye hamein nahin pata magar ham daily use karte hai.

3. Declarative Style: HOFs code ko 'what to do' style mein likhne mein madad karte hai, bajaye 'how to do'.

4. Cleaner & More Readable Code: Yeh functional programming paradign ko promote karta hai, jisse code chhota, saaf aur samajhne mai aashani hoti hai.

*/

//  Simple Array Filter Tool
const numbers = [10, 25, 30, 45, 50, 75];

function filterArray(arr, callback) {
  const filteredResult = [];

  for (let i = 0; i < arr.length; i++) {
    const currentNumber = arr[i];

    // har element ko callback mai pass karenge.
    // agar callback true return karta hai, toh element ko naye array mai dalenge.
    if (callback(currentNumber)) {
      filteredResult.push(currentNumber);
    }
  }
  return filteredResult;
}

// callback 1: check if a number is even
function isEven(number) {
  return number % 2 === 0;
}

// callback 2: check if a number is greater than 50
function isGreaterThan50(number) {
  return number > 50;
}

console.log("Original Array :", numbers);

// isEven
const evenNumbers = filterArray(numbers, isEven);
console.log("Filtered Even Number :", evenNumbers);

// isGreaterThan50
const greaterThan50Numbers = filterArray(numbers, isGreaterThan50);
console.log("Numbers greater than 50 :", greaterThan50Numbers);
