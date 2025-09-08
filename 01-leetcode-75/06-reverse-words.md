## **1. Explanation (Hinglish mein)**

👉 Tumhe ek string `s` di gayi hai jisme:

- Words separated hote hain spaces se.
- Extra spaces ho sakti hain (leading, trailing, ya multiple spaces between words).

Tumhara kaam hai:

- Sab extra spaces hatao.
- Words ko reverse order mein arrange karo.
- Output ek clean string banao jisme **sirf ek space** ke beech mein words ho.

### **Daily life analogy:**

Socho tumhare paas ek line mein dost khade hain photo ke liye. Lekin kuch jagah beech mein khali gaps hain, aur kuch dost side mein extra space le rahe hain.
Tumhe karna hai:

- Sab extra gaps hatao.
- Line ko ulta kar do.

---

## **2. Code Implementation (JavaScript + Hinglish comments)**

```javascript
/**
 * @param {string} s
 * @return {string}
 */
function reverseWords(s) {
  // Step 1: Trim karo (leading/trailing spaces hatao)
  // Step 2: Split by one/more spaces (regex /\s+/)
  // Step 3: Reverse the array
  // Step 4: Join with single space
  return s.trim().split(/\s+/).reverse().join(" ");
}

// -------- Example Usage --------
console.log(reverseWords("  the sky   is blue  ")); // "blue is sky the"
console.log(reverseWords("hello world")); // "world hello"
console.log(reverseWords("a good   example")); // "example good a"
```

---

## **3. Time & Space Complexity (Simple Explanation)**

### **Time Complexity:**

- `trim()` → O(n) (n = string length).
- `split(/\s+/)` → O(n) to parse words.
- `reverse()` → O(k) (k = number of words, ≤ n).
- `join(" ")` → O(n).

Overall: **O(n)**.

### **Space Complexity:**

- Array of words banega → O(n).
- Final string bhi O(n).
  So **Space Complexity = O(n)**.

---

## ✅ Final Summary

- Extra spaces remove karo, words split karo.
- Words ko reverse karo aur single-space join karo.
- Time → O(n), Space → O(n).
