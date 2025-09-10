## **1. Explanation (Hinglish mein)**

👉 Tumhe ek input diya gaya hai jo ya toh:

- ek **object** ho sakta hai `{}`
- ek **array** ho sakta hai `[]`

Aur dono ka source **JSON.parse()** se aata hai, iska matlab:

- Input hamesha valid hoga.
- `null`, `string`, `number` aayega hi nahi.

**Empty ka matlab:**

- Object ke liye: koi key-value pair nahi.
- Array ke liye: koi element nahi.

### **Daily life analogy:**

Socho tumhare paas ek **dabba** hai:

- Agar dabba kholke dekho aur usme kuch bhi nahi hai → dabba empty hai.
- Agar ek coin bhi pada ho, toh empty nahi hai.

Bas waise hi:

- Object → check karo keys hain ya nahi.
- Array → check karo length hai ya nahi.

---

## **2. Code Implementation (JavaScript + Hinglish comments)**

```javascript
/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
function isEmpty(obj) {
  // Agar Array hai
  if (Array.isArray(obj)) {
    return obj.length === 0; // length 0 hai toh empty
  }

  // Agar Object hai
  if (typeof obj === "object") {
    return Object.keys(obj).length === 0; // koi keys nahi hain toh empty
  }

  // Extra safety (though JSON.parse guarantee karta hai ki hamesha obj/array hi aayega)
  return false;
}

// -------- Example Usage --------
console.log(isEmpty([])); // true
console.log(isEmpty([1, 2, 3])); // false
console.log(isEmpty({})); // true
console.log(isEmpty({ a: 1 })); // false
```

---

## **3. Time & Space Complexity (Simple Explanation)**

### **Time Complexity:**

- Array ke liye: `length` check O(1).
- Object ke liye: `Object.keys(obj)` → O(k), jahan k = number of keys.
  (Worst case agar n keys hain toh O(n)).

✅ **Time Complexity = O(n)** (n = number of keys/elements).

### **Space Complexity:**

- Array ke liye: O(1).
- Object ke liye: `Object.keys()` ek array return karta hai → O(n).

✅ **Space Complexity = O(n)** (worst case when many keys).

---

## ✅ Final Summary

- Array → check `length === 0`.
- Object → check `Object.keys(obj).length === 0`.
- Time: O(n), Space: O(n).
