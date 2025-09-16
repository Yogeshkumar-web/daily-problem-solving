## **1. Explanation (Hinglish mein)**

👉 Tumhe ek array `nums` aur ek integer `k` diya gaya hai.
Ek **operation** = do numbers choose karo jinka sum exactly `k` ho → aur unhe array se hata do.
Tumhe maximum number of operations batani hai.

---

### **Example 1:**

```
nums = [1,2,3,4], k = 5
```

- (1,4) = 5 → ek operation ✅
- (2,3) = 5 → ek aur operation ✅

Answer = 2

---

### **Example 2:**

```
nums = [3,1,3,4,3], k = 6
```

- (3,3) = 6 → ek operation ✅
- (2nd 3, 4) = 7 ❌
- (1,5) nahi hai ❌

Answer = 1

---

### **Daily Life Analogy:**

Socho tumhare paas ek **chocolate box** hai aur tumhe pairs banane hain jinka total weight exactly `k` ho.

- Har chocolate ek baar hi use hogi.
- Tum maximum pairs banana chahte ho.

---

## **2. Code Implementation (JavaScript + Hinglish Comments)**

👉 Yaha **HashMap (frequency counter)** best approach hai.

```javascript
function maxOperations(nums, k) {
  const map = new Map(); // frequency map
  let count = 0;

  for (let num of nums) {
    let complement = k - num; // pair banane ke liye dusra number

    if (map.has(complement) && map.get(complement) > 0) {
      // Agar complement available hai → ek valid pair bana lo
      count++;
      map.set(complement, map.get(complement) - 1); // use kar liya, to decrement karo
    } else {
      // Agar pair nahi mila toh is number ko store kar lo
      map.set(num, (map.get(num) || 0) + 1);
    }
  }

  return count;
}

// -------- Example Usage --------
console.log(maxOperations([1, 2, 3, 4], 5)); // 2
console.log(maxOperations([3, 1, 3, 4, 3], 6)); // 1
console.log(maxOperations([2, 2, 2, 2], 4)); // 2 (2 pairs of (2,2))
```

---

## **3. Time & Space Complexity (Simple Explanation)**

### **Time Complexity:**

- Har element ek hi baar process hota hai → O(n).

### **Space Complexity:**

- HashMap me worst case me saare numbers store ho jaayenge → O(n).

---

## ✅ Final Summary

- Humne frequency map (hashmap) use karke pairs banaye.
- Har number ke liye uska complement check kiya.
- Agar mila → pair bana liya; warna frequency store ki.
- Time: O(n), Space: O(n).
