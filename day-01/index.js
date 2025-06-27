// 27-06-2025

// variable in js

// Definition : variable means a container jismein aap data ko store karte ho.

// let name = "Yogee";

// let name2 = "Gaurav";

// console.log(name);
// console.log(name2);

// function printName() {
//   let name = "yogesh";
//   console.log(name);
// }

// let num = 50;

// num = 100;
// num = 150;

// console.log(num)

{
  // let block scope variable hota hai. Isko re-assign kar sakte hai.
  let mySalary = 45000;
  // Const bhi block scope hota hai. Isko re-assign nahin kar sakte.
  const myId = "A122";
}

// Hoisting

// Hoisting JavaScript ka ek behavior hai jismein variable aur function ke declarations ko execution se pahle Top of their scope pe move(hoist) kar diya jata hai.

console.log(abc);
var abc = "kumar";

// | Type            | Hoisting | Value assign?         | Temporal Dead Zone? |
// | --------------- | -------- | --------------------- | ------------------- |
// | `var`           | ✅ Yes    | ❌ undefined           | ❌ No                |
// | `let` / `const` | ✅ Yes    | ❌ No                  | ✅ Yes               |
// | `function`      | ✅ Yes    | ✅ Yes (fully hoisted) | ❌ No                |

// Temporal Dead Zone

// TDZ bo phase hota hai declaration se pahle jahan par variable technically exist karte hai par access karne par error dete hai.

// console.log(a); // Cannot access 'a' before initialization
let a = 55;

let x = 25;

{
  let x = 20;
  console.log(x);
}
// console.log(x);

/* var:
Student ka roll number list mein likh diya gaya (hoisting), lekin uska name ya detail blank hai (undefined). Tu poochhe toh blank response milta hai.

let/const:
Student ka naam list mein hai par usko register hone se pehle poochhna mana hai. Agar tu poochhega toh principal bolega — “Isko abhi register nahi kiya gaya, kaise access kar raha hai?”
That's Temporal Dead Zone! 

Function declarations get fully hoisted, but function expressions don’t.
*/

function test() {
  console.log(a);
  //   console.log(b);
  //   console.log(c);

  var a = "yogi";
  let b = "gaurav";
  const c = "saurav";
}

test();

// function declaration : fully hoisted

greet(); // work fine

function greet() {
  console.log("Hello Yogesh!");
}

// Declaration memory mein top pe chali jaati hai (fully hoisted).

// JavaScript isko poore function ke sath memory mein allocate karta hai execution se pehle.

sayHello(); // Cannot access 'sayHello' before initialization

let sayHello = function () {
  console.log("hello Yogesh, how are you!");
};

// sayHello(); // work here

// | Concept              | Function Declaration         | Function Expression         |
// | -------------------- | ---------------------------- | --------------------------- |
// | Hoisting             | Fully hoisted                | Only variable hoisted       |
// | Execution before def | ✅ Allowed                    | ❌ Not allowed               |
// | Error type           | None                         | ❌ `TypeError` or `RefError` |
// | Recommended when     | Reusable top-level functions | Dynamic/callback functions  |
