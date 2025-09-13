## **1. Explanation (Hinglish mein)**

👉 Tumhe **Array.prototype.groupBy** implement karna hai.

- Matlab: ab har array pe tum `.groupBy(fn)` call kar paoge.
- Jo bhi `fn` return karega, usko ek **key** banaoge.
- Us key ke andar saare items collect karoge jo us key se map hote hain.

---

### **Example:**

```js
[1, 2, 3, 4, 5, 6].groupBy(String);
```

➡️ Yaha `fn = String`, toh har number ko string mein convert karenge.
Result:

```js
{
  "1": [1],
  "2": [2],
  "3": [3],
  "4": [4],
  "5": [5],
  "6": [6]
}
```

---

Another Example:

```js
[6.1, 4.2, 6.3].groupBy(Math.floor);
```

➡️ `Math.floor` se key banegi:

- 6.1 → 6
- 4.2 → 4
- 6.3 → 6

Result:

```js
{
  "6": [6.1, 6.3],
  "4": [4.2]
}
```

---

### **Daily Life Analogy:**

Socho tum ek classroom mein students ko **group karna** chahte ho:

- Agar grouping "by house" hai → saare "Red House" wale ek bucket mein, "Blue House" wale dusre mein.
- Agar grouping "by gender" hai → saare boys ek group, saare girls ek group.

Bas waise hi hum array ke elements ko `fn` ke basis pe group kar rahe hain.

---

## **2. Code Implementation (JavaScript + Hinglish comments)**

```javascript
// Step 1: Array prototype enhance karte hain
Array.prototype.groupBy = function (fn) {
  const result = {};

  // Step 2: Har element iterate karo
  for (let item of this) {
    const key = fn(item); // key banao callback se

    // Agar key pehle se exist karti hai toh push karo, warna naya array banao
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(item);
  }

  return result;
};

// -------- Example Usage --------
console.log([1, 2, 3, 4, 5, 6].groupBy(String));
// { "1": [1], "2": [2], "3": [3], "4": [4], "5": [5], "6": [6] }

console.log([6.1, 4.2, 6.3].groupBy(Math.floor));
// { "6": [6.1, 6.3], "4": [4.2] }

console.log(["apple", "ant", "bat"].groupBy((word) => word[0]));
// { "a": ["apple", "ant"], "b": ["bat"] }
```

---

## **3. Time & Space Complexity (Simple Explanation)**

### **Time Complexity:**

- Har element pe `fn` call hota hai aur ek object insert hota hai.
- Total elements = n.
  ✅ Time = **O(n)**

### **Space Complexity:**

- Output object ke andar saare elements group hoke store honge.
- Worst case: har element alag group ho → space bhi O(n).
  ✅ Space = **O(n)**

---

## ✅ Final Summary

- Humne `Array.prototype.groupBy` implement kiya.
- Har element pe callback `fn` se key banayi, us key ke array mein push kiya.
- Time: O(n), Space: O(n).
