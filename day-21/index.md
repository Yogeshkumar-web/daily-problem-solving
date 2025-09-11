## **1. Explanation (Hinglish mein)**

👉 Tumhe ek array `arr` aur ek number `size` diya gaya hai.

- Tumhe original array ko **subarrays** mein todna hai jinka length = `size`.
- Agar last mein elements kam bache toh bhi ek chhota subarray banana hai.

---

### **Example:**

`arr = [1,2,3,4,5], size = 2`

- Output = `[[1,2], [3,4], [5]]`

`arr = [1,2,3,4,5,6], size = 3`

- Output = `[[1,2,3], [4,5,6]]`

---

### **Daily Life Analogy:**

Socho tumhare paas ek **line mein students** khade hain aur tumhe unhe **groups of size 3** banana hai.

- Pehle 3 students → Group 1.
- Agle 3 students → Group 2.
- Agar last mein 2 hi bach gaye → Group 3 un 2 students ka.

---

## **2. Code Implementation (JavaScript + Hinglish comments)**

### 🔹 Method 1: Using slicing

```javascript
/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
function chunk(arr, size) {
  const result = [];

  // Step 1: Loop over array in jumps of 'size'
  for (let i = 0; i < arr.length; i += size) {
    // Step 2: slice from i to i+size
    result.push(arr.slice(i, i + size));
  }

  return result;
}

// -------- Example Usage --------
console.log(chunk([1, 2, 3, 4, 5], 2)); // [[1,2],[3,4],[5]]
console.log(chunk([1, 2, 3, 4, 5, 6], 3)); // [[1,2,3],[4,5,6]]
```

---

### 🔹 Method 2: Building manually (without slice)

```javascript
function chunk(arr, size) {
  const result = [];
  let current = [];

  for (let num of arr) {
    current.push(num); // element add karo current group mein

    if (current.length === size) {
      result.push(current); // ek full group ban gaya
      current = []; // naya group start karo
    }
  }

  // Agar last group incomplete bacha ho toh usko bhi add karo
  if (current.length > 0) {
    result.push(current);
  }

  return result;
}

console.log(chunk([1, 2, 3, 4, 5], 2)); // [[1,2],[3,4],[5]]
```

---

## **3. Time & Space Complexity (Simple Explanation)**

### **Time Complexity:**

- Har element ko ek hi baar process karte hain → **O(n)**

### **Space Complexity:**

- Output mein sab elements store karne padenge → **O(n)**
- Thoda sa extra space temporary array ke liye (`current`) → negligible (O(1)).

✅ Efficient and clean solution.

---

## ✅ Final Summary

- Array ko groups of `size` mein todna hai.
- Do methods possible:

  - Index jump + slice.
  - Manual build using `current` group.

- Time: O(n), Space: O(n).
