## **1. Explanation (Hinglish mein)**

👉 Problem bol rahi hai:

- Tumhare paas ek function `fn` hai.
- Tum usko ek array of arguments `args` ke saath call karna chahte ho.
- Ye function immediately call hoga (abhi ke abhi).
- Fir har `t` milliseconds mein dobara dobara call hota rahega.
- Lekin ek `cancelFn` return karna hai jo kuch time baad (cancelTimeMs ke baad) function ko **band** (cancel) kar de.

### **Real-world Analogy:**

Socho tumhara ghar ka alarm clock ⏰ hai:

- Jaise hi tumne "Start" button dabaya, alarm turant bajta hai (immediate call).
- Fir har 5 minute baad alarm dobara bajta hai (repeat every `t` ms).
- Lekin tum ek aur timer laga dete ho ki 20 minute baad alarm system hi bandh ho jaaye (cancel after `cancelTimeMs`).

Toh alarm = `fn`,
args = jo information alarm ko chahiye bajne ke liye,
`t` = har kitne interval mein alarm bajna chahiye,
`cancelFn` = wo function jo system ko bandh kar dega.

---

## **2. Code Implementation (JavaScript + Hinglish comments)**

```javascript
/**
 * @param {Function} fn - Ye wo function hai jo hum call karna chahte hain
 * @param {Array} args - Isme wo arguments honge jo function ko chahiye
 * @param {number} t - Har kitne ms baad function repeat hoga
 * @return {Function} - Cancel karne wala function return karega
 */
function cancellable(fn, args, t) {
  // Step 1: function ko immediately call karo
  fn(...args); // args ko spread karke function ko pass kar rahe hain

  // Step 2: har t milliseconds baad function ko dobara call karo
  const intervalId = setInterval(() => {
    fn(...args); // function har t ms baad call hoga
  }, t);

  // Step 3: ek cancel function return karo
  const cancelFn = () => {
    clearInterval(intervalId); // interval ko band kar do
  };

  // Step 4: return karo cancelFn
  return cancelFn;
}

// ---------- Example usage ----------
function sayHello(name) {
  console.log("Hello, " + name + "!");
}

// cancellable ko call karo
const cancelFn = cancellable(sayHello, ["Yogee"], 1000);

// ab 3000 ms (3 sec) baad cancelFn ko call karenge
setTimeout(cancelFn, 3000);
```

### **Code Samajhna (Hinglish mein):**

1. `fn(...args)` → Jaise hi function call hua, turant `fn` ko chalaya.
2. `setInterval` → ek loop jaisa hai jo har `t` ms baad function chalata hai.
3. `clearInterval` → jab cancelFn call hota hai toh wo loop tod deta hai.
4. `setTimeout(cancelFn, cancelTimeMs)` → ye external cancel timer hai jo batata hai ki kab cancelFn call hoga.

---

## **3. Time & Space Complexity (Simple terms mein)**

👉 Har ek cheez ko samajhte hain:

### **Time Complexity:**

- Function `fn` **immediately** call hota hai → O(1).
- Fir har `t` ms baad call hota hai.
- Agar cancel hone se pehle `k` times run hua → Total work = O(k).

Matlab **jitni baar function call hoga**, utna hi time lagega. Agar cancel 3000ms pe hota hai aur `t=1000ms`, toh function 1 (immediate) + 3 (interval) = 4 times call hoga.

So **Time Complexity = O(k)** (k = number of times `fn` runs before cancel).

---

### **Space Complexity:**

- Humne sirf ek `intervalId` store kiya hai → O(1).
- Chahe function 1000 baar chale, memory usage constant hi rahegi, kyunki setInterval ek hi handle ko manage karta hai.

So **Space Complexity = O(1)**.

---

✅ To summarize:

- Function ko immediately aur har interval pe call karna hai.
- Ek cancelFn banana hai jo interval ko band kare.
- Time Complexity → O(k), Space Complexity → O(1).
