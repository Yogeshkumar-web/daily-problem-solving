## **1. Explanation (Hinglish mein)**

👉 Problem:

- Tumhe har array pe ek naya method `.last()` add karna hai.
- Agar array empty hai → return `-1`.
- Agar array mein elements hain → return last element.

---

### **Daily Life Analogy:**

Socho tumhare paas ek **line mein students** khade hain.

- Agar line mein koi student hi nahi hai → tum keh doge `-1` (koi last hi nahi hai).
- Agar line mein students hain → jo sabse peeche khada hai, wahi "last".

Waise hi har array ka "last" element nikalna hai.

---

## **2. Code Implementation (JavaScript + Hinglish comments)**

```javascript
// Step 1: Array prototype enhance karte hain
Array.prototype.last = function () {
  // Agar array empty hai
  if (this.length === 0) {
    return -1;
  }

  // Agar array mein elements hain toh last element return karo
  return this[this.length - 1];
};

// -------- Example Usage --------
console.log([1, 2, 3].last()); // 3
console.log([].last()); // -1
console.log(["a", "b"].last()); // "b"
```

---

## **3. Time & Space Complexity (Simple Explanation)**

### **Time Complexity:**

- `this.length` access karna O(1).
- `this[this.length - 1]` access karna O(1).
  ✅ Overall: **O(1)**

### **Space Complexity:**

- Koi extra space nahi lagta, bas ek function prototype mein add hota hai.
  ✅ Overall: **O(1)**

---

## ✅ Final Summary

- Humne `Array.prototype.last` banaya.
- Agar array empty → return `-1`.
- Warna → last element return karo.
- Time O(1), Space O(1).
