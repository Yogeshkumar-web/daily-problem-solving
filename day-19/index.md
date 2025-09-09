## **1. Explanation (Hinglish mein)**

👉 Tumhare paas ek **array of functions** hai.

- Har ek function ek **Promise return karta hai**.
- Tumhe in sabko ek saath (parallel) execute karna hai.
- Output ek naya Promise hoga jo:

  1. **Resolve** karega → jab sab promises success ho jaayein. Result ek array hoga values ka, **same order** jaisa input functions ka tha.
  2. **Reject** karega → agar koi ek promise fail ho jaata hai, toh turant reject kar do (aur usi error ke saath).

### **Daily life analogy:**

Socho tumne apne 3 doston ko ek kaam diya:

- Dost A: Chai le aao 🍵
- Dost B: Samosa le aao 🥟
- Dost C: Cold drink le aao 🥤

Tum ek hi baar sabko kaam bolte ho (parallel).

- Agar teeno wapas aa gaye toh tum khush (resolve with \[chai, samosa, cold drink]).
- Agar ek dost fail ho gaya (jaise samosa shop band thi), toh tum turant naraz ho jaate ho (reject with reason).

---

## **2. Code Implementation (JavaScript + Hinglish comments)**

```javascript
/**
 * @param {Array<Function>} functions - Har function ek Promise return karta hai
 * @return {Promise}
 */
function promiseAll(functions) {
  return new Promise((resolve, reject) => {
    const results = new Array(functions.length); // results store karne ke liye
    let completed = 0; // count of successfully completed promises

    functions.forEach((fn, index) => {
      try {
        fn()
          .then((res) => {
            results[index] = res; // result ko sahi position pe rakho
            completed++;

            // Agar sab complete ho gaye, resolve karo
            if (completed === functions.length) {
              resolve(results);
            }
          })
          .catch((err) => {
            // Jaise hi koi fail hua, turant reject
            reject(err);
          });
      } catch (err) {
        // Agar fn() hi galat hai aur promise return nahi karta
        reject(err);
      }
    });

    // Edge case: Agar empty array diya hai
    if (functions.length === 0) {
      resolve([]);
    }
  });
}

// -------- Example Usage --------
const fn1 = () => new Promise((res) => setTimeout(() => res("A"), 200));
const fn2 = () => new Promise((res) => setTimeout(() => res("B"), 100));
const fn3 = () => new Promise((res) => setTimeout(() => res("C"), 300));

promiseAll([fn1, fn2, fn3])
  .then((results) => console.log("Resolved:", results)) // ["A","B","C"]
  .catch((err) => console.error("Rejected:", err));

const fnFail = () =>
  new Promise((_, rej) => setTimeout(() => rej("Error"), 150));

promiseAll([fn1, fnFail, fn3])
  .then((results) => console.log("Resolved:", results))
  .catch((err) => console.error("Rejected:", err)); // "Error"
```

---

## **3. Time & Space Complexity (Simple Explanation)**

### **Time Complexity:**

- Sab functions ek saath call hote hain → Parallel execution.
- Tumhe wait karna padta hai max duration tak (jo sabse slow promise hai).
- Agar `n` functions hain: **O(n)** for iteration, aur runtime = max promise time.
  ✅ **Time Complexity = O(n)**

### **Space Complexity:**

- Tumne ek `results` array banaya jisme n results store hote hain.
  ✅ **Space Complexity = O(n)**

---

## ✅ Final Summary

- Ye custom `promiseAll` kaam karta hai bilkul JS ke built-in `Promise.all()` ki tarah.
- Sab parallel run hote hain.
- Sab success → resolve with results array.
- Koi ek fail → reject with first error.
- Time: O(n), Space: O(n).
