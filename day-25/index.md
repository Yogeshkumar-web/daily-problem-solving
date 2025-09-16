## **1. Explanation (Hinglish mein)**

👉 Tumhe do arrays `arr1` aur `arr2` diye gaye hain. Har object ke andar ek `id` property hai (unique identifier).

- Agar ek `id` sirf ek hi array me hai → us object ko result me as it is daalo.
- Agar ek `id` dono arrays me hai → dono objects ko merge karo. Agar koi property **common** hai, toh `arr2` ki value overwrite karegi `arr1` ki value ko.
- Final output me objects `id` ke ascending order me sorted hone chahiye.

---

### **Example 1:**

```js
arr1 = [
  { id: 1, x: 1 },
  { id: 2, x: 9 },
];

arr2 = [
  { id: 3, x: 5 },
  { id: 2, y: 10 },
];
```

👉 Step by step:

- `id=1` sirf arr1 me hai → include.
- `id=2` dono me hai → merge: `{id:2, x:9, y:10}` (y=10 arr2 se aaya).
- `id=3` sirf arr2 me hai → include.

✅ Result =

```js
[
  { id: 1, x: 1 },
  { id: 2, x: 9, y: 10 },
  { id: 3, x: 5 },
];
```

---

### **Daily Life Analogy:**

Socho tumhare paas do **attendance sheets** hain:

- Pehle sheet (arr1) me kuch students ke roll numbers aur unke details hain.
- Doosri sheet (arr2) me updated ya aur details hain.
  Tumhe final ek combined sheet banani hai jisme sabka roll number unique ho aur agar details overlap karti hain, toh **nayi wali (arr2)** details overwrite kare.

---

## **2. Code Implementation (JavaScript + Hinglish Comments)**

```javascript
function join(arr1, arr2) {
  const map = new Map();

  // Step 1: Pehle arr1 ke saare objects ko map me daal do
  for (let obj of arr1) {
    map.set(obj.id, { ...obj }); // shallow copy
  }

  // Step 2: arr2 ke objects process karo
  for (let obj of arr2) {
    if (map.has(obj.id)) {
      // Agar id already exist karti hai → merge karo
      map.set(obj.id, { ...map.get(obj.id), ...obj });
    } else {
      // Agar id nahi hai → directly insert karo
      map.set(obj.id, { ...obj });
    }
  }

  // Step 3: Map ke values ko array me convert karo aur sort by id
  return Array.from(map.values()).sort((a, b) => a.id - b.id);
}

// -------- Example Usage --------
console.log(
  join(
    [
      { id: 1, x: 1 },
      { id: 2, x: 9 },
    ],
    [
      { id: 3, x: 5 },
      { id: 2, y: 10 },
    ]
  )
);
// [
//   { id: 1, x: 1 },
//   { id: 2, x: 9, y: 10 },
//   { id: 3, x: 5 }
// ]
```

---

## **3. Time & Space Complexity (Simple Explanation)**

### **Time Complexity:**

- Insert arr1 objects into Map → O(n)
- Process arr2 objects → O(m)
- Convert Map to array + sort → O((n+m) log(n+m))
  ✅ Final: **O((n+m) log(n+m))**

### **Space Complexity:**

- Map me saare objects store hote hain.
  ✅ Space = **O(n+m)**

---

## ✅ Final Summary

- Humne `Map` use karke id-based merging kiya.
- Agar overlap hua toh arr2 ki value overwrite hui.
- Final array ko `id` ke ascending order me sort kiya.
