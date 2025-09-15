## **1. Explanation (Hinglish mein)**

👉 Tumhare paas ek array `height` hai jisme har value ek vertical line ki height batati hai. Har line apne index position pe draw hoti hai (x-axis pe).

- Tumhe 2 lines choose karni hain jo milkar ek "container" banayengi.
- Container ka **width** = dono lines ke x-coordinate ka difference.
- Container ka **height** = dono lines me se chhoti wali (kyunki paani zyada sirf chhoti wali tak hi aa sakta hai).
- Area = width × min(height\[left], height\[right])

Goal → **Max area** find karna.

---

### **Example (Simple):**

```
height = [1,8,6,2,5,4,8,3,7]
```

- Agar line\[1] (height=8) aur line\[8] (height=7) choose karte ho:

  - Width = 8-1 = 7
  - Min height = min(8,7) = 7
  - Area = 7×7 = 49 ✅ (maximum)

---

### **Daily Life Analogy:**

Socho tum ek **water tank** bana rahe ho jisme dono sides ki walls uneven hain.

- Paani utna hi store ho sakta hai jitni chhoti wall ki height hai.
- Agar walls zyada dur dur hain, tank ki capacity (width × height) aur badh sakti hai.

---

## **2. Code Implementation (JavaScript + Hinglish Comments)**

👉 Naive approach O(n²) hoti (har pair check karte). But optimized solution **Two Pointers** se hota hai.

```javascript
function maxArea(height) {
  let left = 0; // left pointer start me
  let right = height.length - 1; // right pointer end me
  let maxWater = 0;

  while (left < right) {
    // Width = distance between lines
    let width = right - left;
    // Height = chhoti wall ki height
    let h = Math.min(height[left], height[right]);
    // Area calculate karo
    let area = width * h;
    maxWater = Math.max(maxWater, area);

    // Ab pointer move karna hai
    // Chhoti wall ko move karte hain (kyunki bada move karne ka fayda nahi hoga)
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxWater;
}

// -------- Example Usage --------
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
console.log(maxArea([1, 1])); // 1
console.log(maxArea([4, 3, 2, 1, 4])); // 16
```

---

## **3. Time & Space Complexity (Simple Explanation)**

### **Time Complexity:**

- Har element ek hi baar traverse hota hai (left aur right pointer ek dusre ki taraf move karte hain).
  ✅ O(n)

### **Space Complexity:**

- Sirf kuch variables use ho rahe hain (left, right, maxWater).
  ✅ O(1)

---

## ✅ Final Summary

- Har pair check karne ki zarurat nahi.
- Two-pointer technique: left & right se start, hamesha chhoti wall ko move karo.
- Time O(n), Space O(1).
