## 1. **Explanation (Hinglish mein)**

Socho tumhare paas ek line me plots hain (jaise `flowerbed = [1,0,0,0,1]`).

- `1` ka matlab hai already flower planted.
- `0` ka matlab khali plot.

⚠️ Rule: Adjacent plots me flowers **nahi** lag sakte.

Ab tumhare paas `n` extra flowers hain, aur tum check karna chahte ho ki kya unhe rule todhe bina lagaya ja sakta hai.

### Example 1:

`flowerbed = [1,0,0,0,1], n = 1`

- Index1 pe `0` hai → check karo uske left (index0 = 1) aur right (index2 = 0). Left pe already flower hai ❌ → skip.
- Index2 pe `0` hai → left (index1=0), right (index3=0) → dono khali ✅ → flower lagao → `[1,0,1,0,1]`.
- Ek flower laga diya → n=0 ho gaya → **return true**.

### Example 2:

`flowerbed = [1,0,0,0,1], n = 2`

- Jaise hi ek flower lagate ho (index2 pe), aur koi safe spot bachta hi nahi.
- n=2 ki requirement puri nahi hoti → **return false**.

---

## 2. **Code Implementation (JavaScript)**

```javascript
function canPlaceFlowers(flowerbed, n) {
  let count = 0; // flowers planted so far
  let len = flowerbed.length;

  for (let i = 0; i < len; i++) {
    if (flowerbed[i] === 0) {
      // check left and right plots
      let emptyLeft = i === 0 || flowerbed[i - 1] === 0;
      let emptyRight = i === len - 1 || flowerbed[i + 1] === 0;

      if (emptyLeft && emptyRight) {
        // flower lagao
        flowerbed[i] = 1;
        count++;

        if (count >= n) return true; // requirement puri ho gayi
      }
    }
  }

  return count >= n;
}

// Example usage
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1)); // true
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2)); // false
```

---

### **Line by Line Explanation (Hinglish comments)**

```javascript
function canPlaceFlowers(flowerbed, n) {
  let count = 0; // abhi tak kitne flowers lagaye hain
  let len = flowerbed.length; // array ki length

  for (let i = 0; i < len; i++) {
    // har plot pe check karenge
    if (flowerbed[i] === 0) {
      // agar current plot khali hai
      let emptyLeft = i === 0 || flowerbed[i - 1] === 0; // left safe hai ya nahi
      let emptyRight = i === len - 1 || flowerbed[i + 1] === 0; // right safe hai ya nahi

      if (emptyLeft && emptyRight) {
        // dono taraf safe hai toh flower laga do
        flowerbed[i] = 1; // flower laga diya
        count++; // count badha diya

        if (count >= n) return true; // agar requirement puri ho gayi toh true
      }
    }
  }

  return count >= n; // loop ke baad bhi check
}
```

---

## 3. **Time and Space Complexity**

### **Time Complexity: O(n)**

- Har ek plot ek baar check hota hai.
- `n` = number of plots.
- Worst case me pura array traverse karna padta hai → **O(n)**.

### **Space Complexity: O(1)**

- Sirf kuch extra variables (`count`, `len`, `emptyLeft`, `emptyRight`) use ho rahe hain.
- Input array ko modify kar rahe hain, koi extra array nahi bana rahe.
- Isliye → **O(1)**.

---

✅ Final:

- Time → O(n)
- Space → O(1)
