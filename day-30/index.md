## 🔑 Key Points

1. **Method Chaining**

   - Every operation method (`add`, `subtract`, etc.) must return `this` (the current Calculator instance).
   - This allows calls like:

     ```js
     new Calculator(10).add(5).multiply(2).getResult();
     ```

2. **Division**

   - If `value` is `0`, throw an `Error("Division by zero is not allowed")`.

3. **Precision**

   - Results within `1e-5` of correct value are acceptable (normal floating-point JS arithmetic is fine).

---

## ✅ Step-by-Step Implementation

```javascript
class Calculator {
  constructor(value) {
    this.result = value; // initial value
  }

  add(value) {
    this.result += value;
    return this; // enable chaining
  }

  subtract(value) {
    this.result -= value;
    return this;
  }

  multiply(value) {
    this.result *= value;
    return this;
  }

  divide(value) {
    if (value === 0) throw new Error("Division by zero is not allowed");
    this.result /= value;
    return this;
  }

  power(value) {
    this.result = Math.pow(this.result, value);
    return this;
  }

  getResult() {
    return this.result;
  }
}
```

---

## 🔹 Example Usage

```javascript
const calc = new Calculator(10);

const answer = calc
  .add(5) // 10 + 5 = 15
  .subtract(3) // 15 - 3 = 12
  .multiply(2) // 12 * 2 = 24
  .divide(4) // 24 / 4 = 6
  .power(3) // 6^3 = 216
  .getResult();

console.log(answer); // 216
```

### Division by Zero Example

```javascript
try {
  const fail = new Calculator(10).divide(0);
} catch (e) {
  console.error(e.message); // "Division by zero is not allowed"
}
```

---

## ⚡ Complexity

- **Time:** O(1) per operation
- **Space:** O(1)

---

✅ With this design, you can **chain unlimited operations** safely and clearly:

```js
new Calculator(2).power(3).multiply(4).subtract(5).getResult();
```
