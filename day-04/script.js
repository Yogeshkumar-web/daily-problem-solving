// Ek function banao, createCalculator, jo ek initial value leta hai aur ek object return karta hai jismein teen functions honge: add, subtract, aur getValue.

function createCalculator(val) {
  return {
    add: function (num) {
      return val + num;
    },
    subtract: function (num) {
      return val - num;
    },
    getValue: function () {
      return val;
    },
  };
}

const calculator = createCalculator(45);

console.log(calculator.add(41));
console.log(calculator.subtract(41));
console.log(calculator.getValue());

// ---
// Ek function banao createCounter jo ek initial integer n leta hai aur ek object return karta hai jismein teen functions hain: increment, decrement, aur reset.

function createCounter(initialVal) {
  let currentVal = initialVal;
  return {
    increment: function () {
      currentVal++;
      return currentVal;
    },
    decrement: function () {
      currentVal--;
      return currentVal;
    },
    reset: function () {
      currentVal = initialVal;
      return currentVal;
    },
  };
}

const counter = createCounter(0);
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.decrement());
console.log(counter.decrement());
console.log(counter.reset());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.reset());
