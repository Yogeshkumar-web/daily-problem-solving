## **1. Problem Breakdown (Hinglish mein)**

- Tumhe ek array `nums` diya gaya hai, aur ek integer `k`.
- Tumhe **contiguous subarray** lena hai jiska length **exactly `k`** ho.
- Fir us subarray ka **average** nikalna hai.
- Tumhe **maximum average** return karna hai.

---

### **Example 1:**

```js
(nums = [1, 12, -5, -6, 50, 3]), (k = 4);
```

Possible subarrays of length 4:

- `[1,12,-5,-6]` → avg = (1+12-5-6)/4 = 0.5
- `[12,-5,-6,50]` → avg = (12-5-6+50)/4 = 12.75 ✅ (max)
- `[-5,-6,50,3]` → avg = (-5-6+50+3)/4 = 10.5

Answer → **12.75**

---

### **Real-life Analogy**

Socho tumhare paas ek **window of size k** hai.
Tum array ke elements ko us window mein ghusa ke, window ko ek ek step slide karoge aur har baar average check karoge.
Max average waala tumhe output dena hai.

---

## **2. Approach**

### ❌ Naive Approach:

- Har possible subarray of size `k` ka sum nikal ke avg check karna.
- Time complexity: **O(n \* k)** → bada array hone pe slow.

### ✅ Optimized Approach (Sliding Window):

1. Pehle k elements ka sum nikaal lo.
2. Uske baad ek ek element slide karte jao:

   - Window se bahar jaane wala element subtract karo.
   - Naya element add karo.

3. Har step pe max sum update karo.
4. End mein max sum / k = answer.

⏱️ Time Complexity: O(n)
💾 Space Complexity: O(1)

---

## **3. JavaScript Code**

```javascript
function findMaxAverage(nums, k) {
  let n = nums.length;

  // Step 1: pehle k elements ka sum
  let windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += nums[i];
  }

  let maxSum = windowSum;

  // Step 2: window ko slide karo
  for (let i = k; i < n; i++) {
    windowSum += nums[i] - nums[i - k]; // ek naya add, ek purana remove
    maxSum = Math.max(maxSum, windowSum);
  }

  // Step 3: max average return karo
  return maxSum / k;
}

// -------- Example Usage --------
console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4)); // 12.75
console.log(findMaxAverage([5], 1)); // 5
```

---

## **4. Complexity Analysis**

- **Time:** O(n) → har element ek hi baar touch hota hai.
- **Space:** O(1) → koi extra array nahi use hua.

---

✅ Final Answer: **Sliding window with O(n) time and O(1) space.**
