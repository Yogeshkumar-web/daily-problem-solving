## **1. Explanation (Hinglish mein)**

👉 Problem:
Hume check karna hai ki kya array `nums` ke andar aisa koi **triplet (i, j, k)** exist karta hai jisme:

- i < j < k (indices strictly increasing)
- nums\[i] < nums\[j] < nums\[k] (values strictly increasing)

### **Example 1:**

`nums = [1, 2, 3, 4, 5]`

- Triplet: (1, 2, 3) → increasing hai ✅ → return true.

### **Example 2:**

`nums = [5, 4, 3, 2, 1]`

- Koi bhi increasing triplet nahi hai ❌ → return false.

---

### **Daily Life Analogy:**

Socho tumhare paas ek **ladder** hai jisme tumhe bas **3 steps chadhne** hain increasing order mein.

- Agar tumhe 3 alag alag steps mil jaate hain jo hamesha upar ki taraf ja rahe ho, toh matlab ladder mil gaya (answer true).
- Agar steps hamesha neeche hi ja rahe ho, toh koi 3-step ladder nahi milega (answer false).

---

## **2. Approach (Optimized O(n))**

Naive method hota ki hum har triplet check karein (O(n³)) — lekin yeh inefficient hai.

Optimized strategy:

- Hum 2 variables track karenge:

  - `first` → ab tak ka sabse chhota number
  - `second` → ab tak ka second chhota number (jo first se bada hai)

- Agar hume kabhi koi number mila jo `second` se bhi bada hai → matlab increasing triplet mil gaya ✅.

---

## **3. Code Implementation (JavaScript + Hinglish comments)**

```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
function increasingTriplet(nums) {
  let first = Infinity; // sabse chhota number
  let second = Infinity; // second chhota number

  for (let num of nums) {
    if (num <= first) {
      // Agar num sabse chhote se bhi chhota hai
      first = num;
    } else if (num <= second) {
      // Agar num first se bada hai, lekin second se chhota hai
      second = num;
    } else {
      // Agar num second se bhi bada hai → triplet mil gaya
      return true;
    }
  }

  return false; // agar pura loop karke kuch nahi mila
}

// -------- Example Usage --------
console.log(increasingTriplet([1, 2, 3, 4, 5])); // true
console.log(increasingTriplet([5, 4, 3, 2, 1])); // false
console.log(increasingTriplet([2, 1, 5, 0, 4, 6])); // true
```

---

## **4. Time & Space Complexity (Simple Explanation)**

### **Time Complexity:**

- Hum ek hi loop chala rahe hain → O(n).

### **Space Complexity:**

- Sirf 2 extra variables `first` aur `second` use ho rahe hain → O(1).

✅ Bohot hi efficient solution hai.

---

## ✅ Final Summary

- Humne problem ko reduce karke "3-step ladder find karna" banaya.
- 2 variables `first` aur `second` track kiye.
- Jaise hi koi element mila jo `second` se bada hai → increasing triplet confirm.
- Time O(n), Space O(1).
