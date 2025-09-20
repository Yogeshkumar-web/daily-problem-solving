## **1. Problem Samajhna (Hinglish mein)**

Tumhe ek `ArrayWrapper` class banani hai jo:

1. **Constructor** me ek integer array accept kare.
2. Jab **do instances ko + se add karo**, tab dono arrays ke elements ka **total sum** mile.
3. Jab `String(instance)` call ho, to output ek **string of array** ho jisme numbers comma separated aur square brackets ke andar ho.
   Example: `[1,2,3]`

---

### **Example**

```js
const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);
console.log(obj1 + obj2); // 10 (1+2+3+4)
console.log(String(obj1)); // "[1,2]"
console.log(String(obj2)); // "[3,4]"
```

---

### Analogy

Socho tumhare paas do **gift boxes (ArrayWrapper)** hain.

- Agar tum in boxes ko **add (+)** karte ho, tumhara matlab hai andar ke **gifts ki total price (sum)**.
- Agar tum box ko **string** banate ho, tum sirf box ka **andar ka list (array)** dekhna chahte ho.

---

## **2. Key JavaScript Concept**

JS me jab tum **+ operator** use karte ho objects ke saath:

- Pehle `valueOf()` call hota hai → number chahiye to numeric conversion.
- Agar `valueOf` number nahi deta, tab `toString()` call hota hai.

Hum yaha `valueOf` override karke **sum return** karenge
aur `toString` override karke **string representation**.

---

## **3. JavaScript Code (with Hinglish Comments)**

```javascript
class ArrayWrapper {
  constructor(arr) {
    this.arr = arr; // input array ko store kar rahe hain
  }

  // Jab + operator use hoga, JS pehle valueOf() call karega
  valueOf() {
    // array ka total sum return karo
    return this.arr.reduce((sum, num) => sum + num, 0);
  }

  // Jab String() ya template literal use hoga
  toString() {
    // array ko string format "[1,2,3]" me return karo
    return `[${this.arr.join(",")}]`;
  }
}

// -------- Example Usage --------
const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);

console.log(obj1 + obj2); // 10   -> (1+2) + (3+4)
console.log(String(obj1)); // "[1,2]"
console.log(String(obj2)); // "[3,4]"
console.log(`${obj1}`); // "[1,2]"  (template literal bhi toString use karega)
```

---

## **4. Complexity Analysis**

| Operation         | Time Complexity             | Space Complexity |
| ----------------- | --------------------------- | ---------------- |
| `valueOf()` (sum) | **O(n)** (reduce karta hai) | O(1)             |
| `toString()`      | **O(n)** (join karta hai)   | O(n) string      |

`n` = array length.

---

✅ **Summary:**

- `valueOf()` → numeric conversion ke liye **sum of elements**.
- `toString()` → human-readable **string representation**.
