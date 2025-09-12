## **1. Explanation (Hinglish mein)**

👉 Tumhe ek integer array `nums` diya hai.
Tumhe karna kya hai:

- Saare `0`s ko end mein bhejna hai.
- Baaki non-zero elements ka **relative order same rehna chahiye**.
- In-place karna hai (matlab extra copy array nahi banana).

---

### **Example 1:**

`nums = [0,1,0,3,12]`

- Pehle non-zeros ka order maintain karte hue: \[1,3,12]
- Saare 0s ko end mein daal do: \[1,3,12,0,0]

👉 Final Output: `[1,3,12,0,0]`

### **Example 2:**

`nums = [0]`
👉 Output: `[0]`

---

### **Daily Life Analogy:**

Socho tumhare paas ek **queue** hai jisme kuch log (non-zero) hain aur kuch khali kursiyan (zero).

- Tumhe logon ka order disturb nahi karna.
- Sirf saari khali kursiyan ko line ke end mein shift karna hai.

---

## **2. Approach (Optimized Two-Pointer)**

👉 Hum ek pointer `pos` rakhenge jisme next non-zero element place karna hai.

- Loop chalao: agar element non-zero hai → usko `pos` pe shift karo aur `pos++`.
- Jab saare non-zeros place ho jaayein, bache huye positions ko `0` se fill kar do.

---

## **3. Code Implementation (JavaScript + Hinglish comments)**

```javascript
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
  let pos = 0; // non-zero ko yaha place karenge

  // Step 1: Non-zero elements ko front me shift karo
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[pos] = nums[i];
      pos++;
    }
  }

  // Step 2: Bachi hui positions ko zero se fill karo
  while (pos < nums.length) {
    nums[pos] = 0;
    pos++;
  }
}

// -------- Example Usage --------
let nums1 = [0, 1, 0, 3, 12];
moveZeroes(nums1);
console.log(nums1); // [1,3,12,0,0]

let nums2 = [0];
moveZeroes(nums2);
console.log(nums2); // [0]
```

---

## **4. Time & Space Complexity (Simple Explanation)**

### **Time Complexity:**

- Loop ek baar traverse hota hai → O(n).
- Extra while loop bacha hua part fill karta hai → O(n).
  ✅ Overall = **O(n)**

### **Space Complexity:**

- Sirf ek variable `pos` use hua hai → O(1).
  ✅ In-place solution.

---

## ✅ Final Summary

- Two-pointer technique use kiya.
- Non-zeros ko pehle shift kiya, fir end mein zeros fill kiye.
- Time: O(n), Space: O(1).
