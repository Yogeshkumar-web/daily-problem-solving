### 1. Currying and Partial Application

**Problem:** Write a `curry` function that transforms a regular function into a curried one.

- **Example:** `curry(add)(1)(2)` should return `3`.
- **Challenge:** The curried function should handle an arbitrary number of arguments and be able to be called one argument at a time or with multiple arguments.

---

### 2. Functional Composition

**Problem:** Implement a `compose` function that takes multiple functions as arguments and returns a new function.

- **Logic:** The new function should apply the input functions in reverse order (right-to-left) to an initial value.
- **Example:** `const addOne = x => x + 1; const multiplyByTwo = x => x * 2; const addOneAndMultiplyByTwo = compose(multiplyByTwo, addOne); addOneAndMultiplyByTwo(5)` should return `12` (`(5 + 1) * 2`).

---

### 3. Implementing `.map()` from Scratch

**Problem:** Without using the built-in `.map()` method, create a **generic** Higher-Order Function called `myMap` that mimics its behavior.

- **Signature:** `myMap(array, callbackFunction)`
- **Challenge:** Your `myMap` function should work for any type of array, not just numbers, and correctly return a new array with the results of the callback.

---

### 4. Advanced Array Transformation

**Problem:** Given an array of objects, use a combination of H-O-Fs (`.map()`, `.filter()`, `.reduce()`) to perform a complex transformation.

- **Scenario:** You have a list of sales transactions, each with a `product`, `price`, and `quantity`.
- **Task:** Calculate the total revenue for all products that have a quantity greater than 50.
- **Hint:** Start with `.filter()` to get the relevant transactions, then use `.map()` to get the subtotal for each, and finally use `.reduce()` to sum them up.

---

### 5. `debounce` and `throttle` (Event Handling)

**Problem:** Implement a `debounce` function.

- **Concept:** Debouncing is a technique used to limit the rate at which a function gets called. The function is executed only after a specified time interval has elapsed since the last time it was invoked. This is crucial for performance optimization, for instance, in search bar inputs or window resizing.
- **Signature:** `debounce(func, delay)`
- **Challenge:** The returned function should take an arbitrary number of arguments and correctly apply them to the original function. You will need to manage a timer (using `setTimeout` and `clearTimeout`).

---

### 6. Building a H-O-C (Higher-Order Component) in React

**Problem:** (This is more theoretical, but you can write the code) Create a Higher-Order Component (HOC) in React.

- **Goal:** A HOC is a function that takes a component and returns a new component with enhanced functionality.
- **Scenario:** Create a HOC named `withLoading` that takes a component as an argument. The returned component should display a "Loading..." message if a `isLoading` prop is `true`, otherwise it should render the original component.
- **Signature:** `const withLoading = (WrappedComponent) => { ... }`
- **Why:** This is a real-world use case of H-O-Fs in a major framework. It demonstrates how to reuse logic across different components.
