// Closure

// Closure ek programming concept hai jahan ek inner function ko apne outer (parent) function ke variables ka access hota hai, even after outer function execute ho chuka ho. Yeh JavaScript mein function ke lexical scoping ki wajah se possible hai.

// Simple world mein: function + its outer variables = closure

// code:

// 1. basic closure
function outerFunction(x) {
  let outerVariable = x;

  // inner fn jo closure create karta hai.
  function innerFunction(y) {
    console.log(`Outer Var : ${outerVariable}`);
    console.log(`Inner Var : ${y}`);
    return outerVariable + y;
  }

  return innerFunction;
}

const myClosure = outerFunction(10); // outer fn execute ho gaya, lekin....
console.log(myClosure(5)); // inner fn abhi bhi outervar ko access kar raha hai.

//---------------

// Practical Closure-Counter Function

function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}
// usage
const counter1 = createCounter();
const counter2 = createCounter();

// console.log(counter1());
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());

// console.log(counter2());
// console.log(counter2());
// console.log(counter2());
// console.log(counter2());
// console.log(counter2());
// console.log(counter2());

//----------------------------------

// multiple functions in closure

//bank a/c simulation using closure
function createBankAccount(initialBalance) {
  let balance = initialBalance;

  // multiple fn sharing same closure
  return {
    deposit: function (amount) {
      balance += amount;
      return `Deposited amount ${amount}, New balance is : ${balance}`;
    },

    withdraw: function (amount) {
      if (amount <= balance) {
        balance -= amount;
        return `Withdrawn ${amount}, Remaining balance is : ${balance}`;
      } else {
        return `Insufficient funds! Current balance is : ${balance}`;
      }
    },
    checkBalance: function () {
      return `Current balance is : ${balance}`;
    },
  };
}

// Usage
const myAccount = createBankAccount(1000);

// console.log(myAccount.deposit(500));
// console.log(myAccount.withdraw(200));
// console.log(myAccount.checkBalance());

// console.log(myAccount.deposit(1500));

// console.log(myAccount.checkBalance());
// console.log(myAccount.withdraw(2000));
