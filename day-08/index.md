## 1. **Explanation (Hinglish mein)**

Socho tumhare paas teen kaam hain:

- `h(x)` = x + 1 (ek number ko +1 karna)
- `g(x)` = x \* 2 (ek number ko 2 se multiply karna)
- `f(x)` = x - 3 (ek number ko 3 subtract karna)

Aur ab tumhe karna hai:
👉 `f(g(h(x)))`

- Pehle h(x) lagao (number +1 ho jaata hai).
- Uska result g(x) me jaata hai (double ho jaata hai).
- Phir uska result f(x) me jaata hai (3 subtract ho jaata hai).

Yeh hi hota hai **function composition**.
Matlab functions ek pipeline banate hain, jisme data ek se nikal ke dusre me jaata hai.

⚡ Example:
Input = `x = 2`

- h(2) = 2 + 1 = 3
- g(3) = 3 \* 2 = 6
- f(6) = 6 - 3 = 3

Final answer = 3 ✅

---

## 2. **Code Implementation (JavaScript)**

```javascript
// Function to compose array of functions
function compose(functions) {
  // Agar array khali hai toh identity function return karo
  if (functions.length === 0) {
    return function (x) {
      return x; // identity function: jo input hai wahi output
    };
  }

  // Otherwise ek function return karo jo chain banayega
  return function (x) {
    let result = x; // start input se
    // functions ko ulte order me apply karna hai (last se start)
    for (let i = functions.length - 1; i >= 0; i--) {
      result = functions[i](result);
    }
    return result;
  };
}

// Example usage
const fn = compose([
  (x) => x + 1, // h(x)
  (x) => x * 2, // g(x)
  (x) => x - 3, // f(x)
]);

console.log(fn(2)); // Output: 3
```

---

### **Line by Line Explanation (Hinglish comments)**

```javascript
function compose(functions) {
  if (functions.length === 0) {
    // agar koi function hi nahi diya, to identity function return
    return function (x) {
      return x;
    };
  }

  return function (x) {
    let result = x; // input ko result me store kar diya
    // functions ko right se left apply karna hoga
    for (let i = functions.length - 1; i >= 0; i--) {
      result = functions[i](result); // current function ko apply karo
    }
    return result; // final result return
  };
}
```

---

## 3. **Time and Space Complexity**

### **Time Complexity: O(n)**

- `n` = functions ki count.
- Har ek function ko ek baar apply karna hai input pe.
- Agar 5 functions hain toh 5 operations lagenge.
  👉 Linear time → **O(n)**

### **Space Complexity: O(1)**

- Humne sirf ek variable `result` use kiya hai jo update hota rehta hai.
- Chahe kitne bhi functions ho, extra space wahi ek variable rahega.
  👉 Constant space → **O(1)**

---

✅ Final takeaway:

- Time → O(n) (jitne functions, utne steps)
- Space → O(1) (sirf ek result variable extra)
