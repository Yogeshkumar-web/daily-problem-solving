## **1. Explanation (Hinglish mein)**

👉 Tumhare paas ek **multi-dimensional array** hai (array ke andar array ke andar array ...).

- Tumhe ek **flattened version** return karna hai, but sirf **depth n tak**.
- Depth = nesting level.

  - First array ke elements depth = 0.
  - Uske andar wale array ke elements depth = 1.
  - Aur aage waisa hi.

---

### **Example 1:**

```js
(arr = [1, [2, [3, [4]]]]), (n = 1);
```

- Depth 0 → `[1, [2, [3, [4]]]]`
- Flatten depth=1 tak → `[1, 2, [3, [4]]]` ✅

---

### **Example 2:**

```js
(arr = [1, [2, [3, [4]]]]), (n = 2);
```

- Depth 0 → `[1, [2, [3, [4]]]]`
- Flatten depth=2 tak → `[1, 2, 3, [4]]` ✅

---

### **Daily Life Analogy:**

Socho tum ek **folder structure** dekh rahe ho.

- Tum keh rahe ho: “Main sirf n levels tak subfolders open karunga, uske andar ke subfolders ko main as it is rehne dunga.”
- Matlab tum selective flatten kar rahe ho.

---

## **2. Code Implementation (JavaScript + Hinglish Comments)**

```javascript
function flat(arr, n) {
  // Helper recursive function
  function helper(array, depth) {
    let result = [];

    for (let item of array) {
      if (Array.isArray(item) && depth < n) {
        // Agar element ek array hai aur abhi flatten karna allowed hai
        result.push(...helper(item, depth + 1));
      } else {
        // Normal value ya depth limit exceed → as it is daal do
        result.push(item);
      }
    }

    return result;
  }

  return helper(arr, 0); // Start with depth = 0
}

// -------- Example Usage --------
console.log(flat([1, [2, [3, [4]]]], 1));
// [1, 2, [3, [4]]]

console.log(flat([1, [2, [3, [4]]]], 2));
// [1, 2, 3, [4]]

console.log(flat([1, [2, [3, [4]]]], 3));
// [1, 2, 3, 4]
```

---

## **3. Time & Space Complexity (Simple Explanation)**

### **Time Complexity:**

- Har element ek baar visit hota hai.
  ✅ O(m), where m = total elements (including nested ones).

### **Space Complexity:**

- Recursion stack depth = n (at most).
- Output array size = m.
  ✅ O(m).

---

## ✅ Final Summary

- Humne recursion se **depth-controlled flatten** banaya.
- Sirf tab flatten karte hain jab `depth < n`.
- Time: O(m), Space: O(m).
