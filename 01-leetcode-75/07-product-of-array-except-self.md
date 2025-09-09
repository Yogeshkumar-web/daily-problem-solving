## **1. Explanation (Hinglish mein)**

👉 Problem:
Tumhe ek array `nums` diya hai. Tumhe ek naya array `answer` banana hai jisme:

- `answer[i] = nums` ke saare elements ka product **except** `nums[i]`.

⚠️ Conditions:

- Time complexity O(n).
- **Division allowed nahi hai**.

### **Example:**

`nums = [1, 2, 3, 4]`

- `answer[0] = 2*3*4 = 24`
- `answer[1] = 1*3*4 = 12`
- `answer[2] = 1*2*4 = 8`
- `answer[3] = 1*2*3 = 6`
  👉 Output: `[24, 12, 8, 6]`

---

### **Daily life analogy:**

Socho tumhare paas 4 dabbas hain, aur tum chahte ho ki har ek dabbe ko alag karke baaki 3 dabbas ka multiplication karo. Tumhe har ek position pe "baaki sabka product" chahiye.

---

## **2. Approach (without division)**

Hum 2 arrays (ya prefix + suffix logic) use karenge:

1. **Prefix Product:** har index ke left side ka product.
2. **Suffix Product:** har index ke right side ka product.

Phir:
`answer[i] = prefix[i] * suffix[i]`

---

## **3. Code Implementation (JavaScript + Hinglish comments)**

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
function productExceptSelf(nums) {
  const n = nums.length;
  const answer = new Array(n).fill(1);

  // Step 1: Prefix products
  let prefix = 1;
  for (let i = 0; i < n; i++) {
    answer[i] = prefix; // answer[i] mein abhi tak ka left product store karo
    prefix *= nums[i]; // prefix ko update karo
  }

  // Step 2: Suffix products (multiply with existing prefix)
  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    answer[i] *= suffix; // prefix * suffix
    suffix *= nums[i]; // suffix ko update karo
  }

  return answer;
}

// -------- Example Usage --------
console.log(productExceptSelf([1, 2, 3, 4])); // [24, 12, 8, 6]
console.log(productExceptSelf([2, 3, 4, 5])); // [60, 40, 30, 24]
```

---

## **4. Time & Space Complexity (Simple Explanation)**

### **Time Complexity:**

- Prefix loop → O(n).
- Suffix loop → O(n).
  Total = **O(n)**

### **Space Complexity:**

- Output array → O(n).
- Prefix & suffix handled via variables (not extra arrays).
  So extra space = **O(1)** (ignoring output).

✅ Efficient solution mil gaya!

---

## ✅ Final Summary

- Prefix \* Suffix method use kiya.
- Har index ke left aur right products combine kiye.
- Time → O(n), Space → O(1) (output ko chhodkar).
