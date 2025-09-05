### 1\. Problem Statement: Sleep Function

Humein ek positive integer `millis` diya gaya hai. Humein ek asynchronous function banana hai jo itne milliseconds ke liye "soye" (yani, wait kare). Yeh function kisi bhi value ke saath resolve ho sakta hai.

Essentially, humein ek `delay` function banana hai jo `setTimeout` aur Promises ko use karke kaam karega. Real-world applications mein, aisi functionality aksar APIs se data fetch karne ya UI updates ko delay karne ke liye istemal hoti hai.

---

### 2\. Solution: Code aur Uska Breakdown

Is problem ko solve karne ke liye, hum `new Promise` constructor aur `setTimeout` ka use karenge. `new Promise` ek promise object banata hai, aur `setTimeout` us promise ko ek specific time ke baad resolve karne ke liye use hota hai.

```javascript
/**
 * @param {number} millis
 * @return {Promise<void>}
 */
async function sleep(millis) {
  // Ek naya Promise banate hain.
  return new Promise((resolve) => {
    // setTimeout ka use karke, hum promise ko
    // 'millis' milliseconds ke baad resolve karte hain.
    setTimeout(() => {
      // resolve() call karne par promise complete hota hai.
      resolve();
    }, millis);
  });
}
```

#### Explanation of the Code

1.  **`async` Keyword**: Function ko `async` mark karna ek good practice hai jab hum `await` ka use karne wale ho, although is case mein yeh optional hai. Yeh function ko automatically ek promise return karne ke liye enable karta hai.
2.  **`new Promise(resolve => ...)`**: Hum ek naya promise create karte hain. `Promise` constructor ek callback function leta hai jisme `resolve` aur `reject` functions hote hain. `resolve` function ko call karne se promise successfully complete hota hai.
3.  **`setTimeout(() => { ... }, millis)`**: `setTimeout` ek built-in JavaScript function hai jo ek function ko ek specified time interval ke baad run karta hai. Hum yahaan `resolve()` ko `millis` milliseconds ke baad call kar rahe hain.
4.  **Promise Resolution**: Jab `setTimeout` ka timer khatam hota hai, toh uske andar ka arrow function run hota hai, aur `resolve()` call hota hai. Isse hamara promise complete ho jata hai. Kyunki hum `resolve()` ko koi value nahi de rahe, yeh `undefined` ke saath resolve hota hai. Problem statement ke anusaar, yeh koi bhi value ho sakti hai, so `undefined` is acceptable.

---

### 3\. Usage Example

Is `sleep` function ka use hum `async/await` ke saath is tarah kar sakte hain:

```javascript
// Example usage:
console.log("Start!"); // Pehle "Start!" print hoga
const t = Date.now();

// 100 milliseconds tak wait karte hain
sleep(100).then(() => {
  // Yeh code 100ms ke baad hi run hoga
  console.log(Date.now() - t); // Delay print karega
  console.log("Done waiting!");
});
```

Yahaan, `sleep(100)` ek promise return karega, aur `.then()` block tabhi run hoga jab woh promise resolve ho jayega, jo ki 100 milliseconds ke baad hoga.

---

tumne dekha ki kaise `setTimeout` aur Promises ko combine karke hum powerful asynchronous utilities bana sakte hain. Yeh concept **event loop** aur **non-blocking I/O** ko samajhne ke liye bhi crucial hai.

Ab jab tumne promise-based delays ko implement karna seekh liya hai, hum agle LeetCode problem par ja sakte hain ya fir main tumhe **`Promise.all` aur `async/await`** ke beech ke difference ko samjhaun? Isse tumhe asynchronous code likhne mein aur clarity milegi.
