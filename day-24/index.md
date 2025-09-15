## **1. Explanation (Hinglish mein)**

👉 Tumhe ek array `arr` aur ek function `fn` diya gaya hai.

- Tumhe `arr` ko sort karna hai lekin normal value ke basis pe nahi, balki `fn(element)` ke output ke basis pe.
- Matlab jo bhi `fn(x)` return karega, wahi us element ki "priority" ya "order key" hogi sorting ke liye.

---

### **Example 1:**

```js
arr = [5, 4, 1, 2, 3];
fn = (x) => x;
```

Yaha `fn` normal value return kar raha hai, toh simple ascending order:
✅ `[1, 2, 3, 4, 5]`

---

### **Example 2:**

```js
arr = ["apple", "banana", "cherry"];
fn = (word) => word.length;
```

- "apple" → 5
- "banana" → 6
- "cherry" → 6

But question kehta hai: "You may assume fn will never duplicate numbers".
Toh maan lo input hoga `"bat"(3), "apple"(5), "cherry"(6)`
✅ Sorted = `["bat", "apple", "cherry"]`

---

### **Daily Life Analogy:**

Socho tumhare paas ek list of students hai.

- Agar `fn = student.age`, toh students ko unki age ke basis pe sort karoge.
- Agar `fn = student.rollNumber`, toh roll number ke basis pe sort karoge.

`fn` tumhe decide karne ka power deta hai ki kis property pe sorting karni hai.

---

## **2. Code Implementation (JavaScript + Hinglish Comments)**

```javascript
function sortBy(arr, fn) {
  // sort method use karenge aur comparison fn output pe hoga
  return arr.sort((a, b) => fn(a) - fn(b));
}

// -------- Example Usage --------
console.log(sortBy([5, 4, 1, 2, 3], (x) => x));
// [1, 2, 3, 4, 5]

console.log(sortBy(["apple", "bat", "cherry"], (word) => word.length));
// ["bat", "apple", "cherry"]

console.log(
  sortBy(
    [
      { id: 1, age: 30 },
      { id: 2, age: 20 },
      { id: 3, age: 25 },
    ],
    (obj) => obj.age
  )
);
// [{id:2, age:20}, {id:3, age:25}, {id:1, age:30}]
```

---

## **3. Time & Space Complexity (Simple Explanation)**

### **Time Complexity:**

- Sorting algorithm (JavaScript ka `.sort()`) average O(n log n) hota hai.
- Har comparison ke liye `fn` call hota hai.
- Total complexity = **O(n log n)**

### **Space Complexity:**

- Sorting algorithms typically in-place hote hain (but JS engine implementation pe depend karta hai).
- Extra space negligible hota hai.
  ✅ **O(1) to O(n)** worst case, but usually **O(1)** consider karte hain.

---

## ✅ Final Summary

- Problem ek **custom sort by function key** ka hai.
- Humne `.sort((a,b) => fn(a)-fn(b))` se solve kiya.
- Time = O(n log n), Space = O(1).
