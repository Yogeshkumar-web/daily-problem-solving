## **1. Explanation (Hinglish mein)**

👉 Problem bol rahi hai:
Tumhe ek wrapper function banana hai jo original function `fn` ko tabhi execute karega jab uske baad **t ms ke andar dobara call nahi aaya**. Agar dobara call aa gaya within `t`, toh pehla cancel ho jaayega aur naya schedule ho jaayega.

### **Daily life analogy:**

Socho tumhara dost tumhe baar-baar bula raha hai:

- "Yogee, chalo movie chalte hain!" 🎬
- Agar tumne socha ki agar wo 5 second tak aur nahi bulata, toh main ready ho jaunga.
- Lekin wo har 2 second mein chillata hai, toh tum wait karte rehte ho.
- Jab finally wo 5 second ke liye chup ho jaata hai, tab tum decide karte ho: "Chalo ab ready ho jaata hoon."

Yani ke last call hi execute hota hai.

Diagram (jo tumne bheja) bhi yehi dikhata hai: Input events bohot frequent hain, lekin debounce karne ke baad output events **kam aur gap ke saath** aate hain.

---

## **2. Code Implementation (JavaScript + Hinglish comments)**

```javascript
/**
 * @param {Function} fn - Jo function debounce karna hai
 * @param {number} t - debounce delay in milliseconds
 * @return {Function} - debounced version of fn
 */
function debounce(fn, t) {
  let timeoutId; // last scheduled function ka reference rakhenge

  return function (...args) {
    // Agar already koi scheduled function hai, usko cancel karo
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    // Naya timeout schedule karo
    timeoutId = setTimeout(() => {
      fn(...args); // t ms ke baad function execute hoga
    }, t);
  };
}

// -------- Example Usage --------
function logMessage(msg) {
  console.log("Executed:", msg, "at", Date.now());
}

const debouncedLog = debounce(logMessage, 1000);

// Rapid calls
debouncedLog("first"); // Cancelled
debouncedLog("second"); // Cancelled
debouncedLog("third"); // Only this will run (after 1s from last call)
```

---

## **3. Time & Space Complexity (Simple Explanation)**

### **Time Complexity:**

- Har call pe sirf `clearTimeout()` aur `setTimeout()` chal raha hai. Ye dono O(1) hai.
- Chahe tum 1000 baar rapid fire karo, per call cost O(1) hi hai.
  ✅ **Time Complexity = O(1)** per call.

### **Space Complexity:**

- Sirf ek `timeoutId` store ho raha hai → O(1).
  ✅ **Space Complexity = O(1)**.

---

## ✅ Final Summary

- Debounced function ek hi baar trigger hoga after **last call + t ms**.
- Har new call purana cancel karke naya schedule banata hai.
- Time Complexity: O(1) per call, Space Complexity: O(1).
