## 🔹 1. Explanation (Hinglish)

Pivot index woh position hai jahan:

-   **Left side ka total sum** = **Right side ka total sum**

### Example

`nums = [1, 7, 3, 6, 5, 6]`

-   Index 3 pe check karo (value = 6):

    -   Left sum = 1 + 7 + 3 = **11**
    -   Right sum = 5 + 6 = **11**
        👉 Perfect balance → Pivot index = **3**

### Real-life Analogy

Socho tum ek **seesaw** (jhoola) par baithe ho aur har position par wazan (numbers) rakha hai.
Pivot wahi point hai jahan dono sides ka weight **barabar** ho.

---

## 🔹 2. JavaScript Implementation (with Hinglish Comments)

```javascript
function pivotIndex(nums) {
    const totalSum = nums.reduce((acc, n) => acc + n, 0); // total of all numbers
    let leftSum = 0; // left side ka sum start mein 0

    for (let i = 0; i < nums.length; i++) {
        // right sum = total - left - current number
        let rightSum = totalSum - leftSum - nums[i];

        if (leftSum === rightSum) {
            return i; // pivot mil gaya
        }

        leftSum += nums[i]; // current ko left mein add karo
    }

    return -1; // agar pivot nahi mila
}

// 🔹 Example Runs
console.log(pivotIndex([1, 7, 3, 6, 5, 6])); // Output: 3
console.log(pivotIndex([1, 2, 3])); // Output: -1
console.log(pivotIndex([2, 1, -1])); // Output: 0
```

💡 Explanation for `[2,1,-1]`:

-   Total = 2 + 1 + (-1) = **2**
-   Index 0 → Left = 0, Right = 1 + (-1) = **0** ✅

---

## 🔹 3. Time & Space Complexity

-   **Time Complexity:** **O(n)**

    -   Pehle total sum nikalne ke liye ek pass (O(n)).
    -   Dusre pass mein pivot check (O(n)).
    -   Total ~ **2n → O(n)**.

-   **Space Complexity:** **O(1)**

    -   Sirf `leftSum` aur `totalSum` variables extra use ho rahe hain.
