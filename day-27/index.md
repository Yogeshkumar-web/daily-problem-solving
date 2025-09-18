## **1. Problem Samajhna (Hinglish mein)**

- Tumhe ek **object ya array** diya gaya hai (basically JSON).
- Tumhe ek **compact object** return karna hai:

  - Jisme **falsy values** (jaise `false`, `0`, `""`, `null`, `undefined`, `NaN`) **remove** karni hain.
  - Ye removal **nested objects/arrays** ke andar bhi apply hoga (recursive cleaning).

- Arrays ko bhi object ki tarah treat karna hai (index = key).

---

### **Example 1**

```js
Input: { a: null, b: [false, 1] }
Output: { b: [1] }
```

### **Example 2**

```js
Input: [null, 0, 5, [0], false];
Output: [5, []];
```

---

### **Analogy**

Socho tumhare paas ek **almirah (object)** hai. Usme kuch boxes (keys) hain aur har box me kuch saman (values).
Tumhe sab **bekaar saman (falsy values)** nikal dena hai.
Agar box ke andar doosra chhota box (nested object/array) hai, usko bhi khol ke clean karna hai.

---

## **2. Approach**

- Har key/value traverse karo.
- Agar value falsy hai → skip kar do.
- Agar value object/array hai → recursive call karke usko bhi clean karo.
- Jo clean hua hai, usko final object/array me daalo.

---

## **3. JavaScript Code (with Hinglish Comments)**

```javascript
function compactObject(obj) {
  // Agar obj null ya falsy hai, direct return empty
  if (!obj) return obj;

  // Case 1: Agar obj ek array hai
  if (Array.isArray(obj)) {
    let result = [];
    for (let item of obj) {
      if (item) {
        // falsy skip karo
        if (typeof item === "object") {
          result.push(compactObject(item)); // nested clean
        } else {
          result.push(item); // primitive values add
        }
      }
    }
    return result;
  }

  // Case 2: Agar obj ek object hai
  if (typeof obj === "object") {
    let result = {};
    for (let key in obj) {
      if (obj[key]) {
        // falsy skip
        if (typeof obj[key] === "object") {
          result[key] = compactObject(obj[key]); // nested clean
        } else {
          result[key] = obj[key];
        }
      }
    }
    return result;
  }

  // Agar primitive value hai, direct return
  return obj;
}

// -------- Example Usage --------
console.log(compactObject({ a: null, b: [false, 1] }));
// Output: { b: [1] }

console.log(compactObject([null, 0, 5, [0], false]));
// Output: [5, []]
```

---

## **4. Time & Space Complexity**

- **Time Complexity:** O(n)

  - Har key/value ek baar visit hota hai (including nested).

- **Space Complexity:** O(n)

  - Recursion ke liye stack space + result object banane ke liye extra space.
