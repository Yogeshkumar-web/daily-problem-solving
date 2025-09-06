## **1. Explanation (Hinglish mein)**

👉 Problem bol rahi hai:

- Tumhare paas ek `async fn` hai (jaise API call).
- Tum ek naya wrapper function banana chahte ho jo kehta hai:

  - Agar `fn` apna kaam **t ms ke andar complete kar le**, toh result return karo.
  - Agar `fn` us time limit se **zyada time le**, toh turant reject kar do `"Time Limit Exceeded"` ke saath.

### **Real-world Analogy:**

Socho tumne ek dost ko bola: "Yaar mujhe ek chai le aa, lekin 5 min ke andar wapas aana." ☕

- Agar dost 5 min ke andar aa gaya → tum uski chai accept karoge.
- Agar wo 5 min ke baad bhi nahi aaya → tum gussa ho jaoge aur kahoge `"Time Limit Exceeded"`. 🚫

Bas yahi logic hai — ek "deadline" laga do.

---

## **2. Code Implementation (JavaScript + Hinglish comments)**

```javascript
/**
 * @param {Function} fn - Ye async function hai jo hum time-limit ke andar run karna chahte hain
 * @param {number} t - Time limit in milliseconds
 * @return {Function} - Ye ek naya function return karega jo time-limited hai
 */
function timeLimit(fn, t) {
  return async function (...args) {
    // Step 1: Promise banate hain jo reject karega after t ms
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => {
        reject("Time Limit Exceeded"); // agar time exceed hua toh reject
      }, t);
    });

    // Step 2: Promise.race() use karte hain
    // Ye dono promises (fn(args) aur timeoutPromise) me se jo pehle complete hoga uska result lega
    return Promise.race([fn(...args), timeoutPromise]);
  };
}

// -------- Example Usage --------
const slowFunction = async (n) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Result after " + n + " ms"), n);
  });
};

// 1) Ye case pass hoga (fn complete within time)
const limitedFast = timeLimit(slowFunction, 2000);
limitedFast(1000).then(console.log).catch(console.error);
// Output: "Result after 1000 ms"

// 2) Ye case fail hoga (fn slow hai, time exceed ho gaya)
const limitedSlow = timeLimit(slowFunction, 1000);
limitedSlow(2000).then(console.log).catch(console.error);
// Output: "Time Limit Exceeded"
```

---

## **3. Time & Space Complexity**

👉 Chalo breakdown karte hain:

### **Time Complexity:**

- `Promise.race()` dono promises ko ek saath start karta hai.
- Agar `fn` jaldi complete hota hai, toh wahi result milta hai. Agar `timeoutPromise` pehle fire hota hai, toh wo reject karega.
- Execution ka time depend karta hai: `min(actual_time_of_fn, t)`

  - Best case: fn jaldi complete ho gaya → O(1) time.
  - Worst case: fn slow hai → timeout wait karega `t ms` → O(t).

So **Time Complexity = O(min(fn_time, t))**.

### **Space Complexity:**

- Humne ek extra timeout promise banaya → O(1).
- Chahe function kitna bhi bada ho, memory use constant hi hai.

So **Space Complexity = O(1)**.

---

✅ Summary:

- `Promise.race()` se ek race lagti hai `fn` aur timeout ke beech.
- Jo pehle complete kare, uska result milta hai.
- Time Complexity → O(min(fn_time, t)), Space Complexity → O(1).
