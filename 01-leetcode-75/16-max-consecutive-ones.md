## **1. Problem Samajhna (Hinglish mein)**

- Tumhare paas ek **binary array** `nums` hai (sirf `0` aur `1`).
- Tum **at most `k` zeros** ko **flip** karke `1` bana sakte ho.
- Tumhe maximum length ka **continuous subarray** chahiye jisme sab `1` ban sake.

---

### **Example 1**

```js
(nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0]), (k = 2);
```

Best subarray:

- Flip 2 zeros in `[0,0,1,1,1,1]` → longest = **6**

Answer = **6**

---

### Analogy

Socho tum ek road pe chal rahe ho jisme kuch gaddhe (`0`) hain.
Tumhare paas **k cement bags** hain jo tum gaddhe bharne (flip karne) ke liye use kar sakte ho.
Tum maximum kitni lambi seedhi road (continuous 1s) bana sakte ho?

---

## **2. Approach (Sliding Window)**

👉 Idea:

- Ek window maintain karo jisme **max k zeros** ho sakte hain.
- Right pointer ko move karke window expand karo.
- Agar zeros > k ho jaye → Left pointer ko move karo (shrink window)
- Har step pe window length check karke max update karo.

⏱️ **Time Complexity:** O(n)
💾 **Space Complexity:** O(1)

---

## **3. JavaScript Code (with Hinglish Comments)**

```javascript
function longestOnes(nums, k) {
  let left = 0; // window ka start
  let zeros = 0; // current window me zeros count
  let maxLen = 0; // max length store

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) zeros++; // agar zero mila to count++

    // agar zeros allowed k se zyada ho gaye, window shrink karo
    while (zeros > k) {
      if (nums[left] === 0) zeros--; // left se zero nikala to zeros--
      left++;
    }

    // current valid window length
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

// -------- Example Usage --------
console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2)); // Output: 6
console.log(longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1], 3)); // Output: 10
```

---

## **4. Dry Run (Quick Example)**

`nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2`

| Step | right | left | zeros | Window       | maxLen   |
| ---- | ----- | ---- | ----- | ------------ | -------- |
| 0    | 0     | 0    | 0     | \[1]         | 1        |
| 1    | 1     | 0    | 0     | \[1,1]       | 2        |
| 2    | 2     | 0    | 0     | \[1,1,1]     | 3        |
| 3    | 3     | 0    | 1     | \[1,1,1,0]   | 4        |
| 4    | 4     | 0    | 2     | \[1,1,1,0,0] | 5        |
| 5    | 5     | 0    | 3 ❌  | shrink…      | …        |
| ...  | ...   | ...  | ...   | ...          | **6** ✅ |

---

## **5. Complexity Analysis**

- **Time:** O(n) → Right pointer har element max 1 baar touch karega, Left bhi max 1 baar.
- **Space:** O(1) → Sirf counters.

---

✅ Final: **Sliding Window** approach with O(n) time and O(1) space is best.
