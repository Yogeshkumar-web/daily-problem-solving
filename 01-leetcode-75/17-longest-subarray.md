# Longest Subarray of 1's After Deleting One Element

- Given a binary array nums, you should delete one element from it.

- Return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.

---

## 🔑 Key Observations

1. We can **delete one element**, so effectively we are looking for a window where there is **at most one 0**.
2. We use the **sliding window** technique:

   - Expand `right` pointer to include new elements.
   - Keep track of how many `0`s are in the window.
   - If there are **more than one 0**, shrink the window from the left until we have ≤1 zero.

The answer is always **window length − 1**,
because we must delete one element inside that window (the zero, ideally).

---

## ✅ Step-by-Step Plan

1. Initialize:

   - `left = 0` (start of window)
   - `zeroCount = 0`
   - `maxLen = 0`

2. Loop `right` through the array:

   - If `nums[right] == 0`, increment `zeroCount`.
   - While `zeroCount > 1`, move `left` forward and adjust `zeroCount`.
   - Update `maxLen` as `right - left` (⚡ note: **not +1**, because we delete one element).

3. Return `maxLen`.

---

## 💡 JavaScript Implementation

```javascript
function longestSubarray(nums) {
  let left = 0;
  let zeroCount = 0;
  let maxLen = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) zeroCount++;

    // Shrink window until at most one zero remains
    while (zeroCount > 1) {
      if (nums[left] === 0) zeroCount--;
      left++;
    }

    // right - left is length minus one element to delete
    maxLen = Math.max(maxLen, right - left);
  }

  return maxLen;
}

// Example Usage:
console.log(longestSubarray([1, 1, 0, 1])); // 3
console.log(longestSubarray([0, 0, 0])); // 0
console.log(longestSubarray([1, 1, 1])); // 2 (must delete one element)
```

---

## 🟢 Complexity

- **Time:** `O(n)` — Each index visited at most twice.
- **Space:** `O(1)` — Constant extra memory.

---

### ⚡ Explanation with Example

Input: `[1,1,0,1]`

```
Window expands → zeroCount = 1 → maxLen updates:
[1,1,0,1]
       ↑right
Delete one zero → longest length = 3
```
