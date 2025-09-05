### 1\. Problem Statement: Cancellable Timeout

Humein ek function `fn`, uske arguments `args` ka ek array, aur ek delay time `t` diya gaya hai. Humein ek `cancelFn` return karna hai.

- `fn` ko `t` milliseconds ke baad run karna hai.
- Lekin, agar `t` milliseconds ke andar `cancelFn` ko call kiya jata hai, toh `fn` ka execution **cancel** ho jana chahiye.
- Agar `cancelFn` ko call nahi kiya jata, toh `fn` apne samay par `args` ke saath execute hona chahiye.

Is problem se hum `setTimeout` aur `clearTimeout` ko ek saath use karna seekhenge, jo kisi bhi asynchronous operation ko control karne ka ek basic pattern hai.

---

### 2\. Solution: Code aur Uska Breakdown

Is problem ko solve karne ke liye, hum `setTimeout` ko call karenge aur uska reference store kar lenge. Phir, `cancelFn` ke andar, hum is reference ko `clearTimeout` mein pass karke timer ko cancel kar sakte hain.

```javascript
/**
 * @param {Function} fn
 * @param {Array<any>} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function (fn, args, t) {
  // Sabse pehle, setTimeout ka use karke fn ko schedule karte hain.
  // Hum is setTimeout call ka ID (timerId) store kar lenge.
  const timerId = setTimeout(() => {
    // Agar timer pura ho jata hai, toh fn ko call karte hain.
    // fn ko uske arguments (args) ke saath call karna hai.
    fn(...args);
  }, t);

  // Ab hum woh cancel function return karte hain.
  const cancelFn = () => {
    // clearTimeout ka use karke hum scheduled timer ko cancel kar sakte hain.
    // Isme wahi timerId pass karna hai jo setTimeout ne return kiya tha.
    clearTimeout(timerId);
  };

  return cancelFn;
};
```

#### Explanation of the Code

1.  **Scheduling with `setTimeout`**: Hum `setTimeout` ko call karke `fn` ko `t` milliseconds ke baad execute hone ke liye schedule karte hain. `setTimeout` ek unique ID (timer ID) return karta hai. Hum is ID ko `timerId` constant mein store kar lete hain.
2.  **Creating the `cancelFn`**: Hum ek naya function `cancelFn` banate hain. Is function ka ek hi kaam hai: `clearTimeout(timerId)` call karna. `clearTimeout` ek browser/Node.js function hai jo diye gaye timer ID ke corresponding scheduled execution ko rok deta hai.
3.  **Closure in Action**: Yahan bhi **closure** ka concept kaam karta hai. `cancelFn` jo ki ek inner function hai, `timerId` ko access kar sakta hai jo uske outer scope mein hai. Isse `cancelFn` ke paas woh information (timer ID) hoti hai jo usko kaam karne ke liye chahiye.
4.  **Returning `cancelFn`**: Finally, hum is `cancelFn` ko return kar dete hain. Ab jahan bhi is function ko call kiya jayega, woh `fn` ke execution ko rok sakta hai.

---

### 3\. Usage Example

Aao ek example se samajhte hain:

```javascript
const result = [];

const fn = (x) => x * 5;
const args = [2],
  t = 20,
  cancelT = 50;

const start = performance.now();

// Cancellable function ko call karte hain.
// Yeh cancel function return karega.
const cancel = cancellable(fn, args, t);

// Ek aur timer banate hain jo cancel ko 50ms ke baad call karega.
setTimeout(() => {
  // 50ms ke baad, cancel call karte hain.
  cancel();
  console.log(`Cancelled at ${performance.now() - start}ms`);
}, cancelT);

// Chinta mat karo, mai output bhi de deta hu.
// Is case mein, fn() ka execution cancel nahi hoga.
// Kyun? Kyunki fn() toh 20ms par chalna tha,
// aur cancel() 50ms par call hua.
// Toh fn() 20ms par chal jayega.
```

**Output: (approximately)**
`fn(2) executed at 20ms`
`Cancelled at 50ms`

Is problem se humne `setTimeout` aur `clearTimeout` ka powerful combination seekha, jo time-based asynchronous operations ko control karne ke liye bahut zaroori hai.

---

Tumne dekha ki kaise hum `setTimeout` aur `clearTimeout` ka use karke time-based operations ko control kar sakte hain. Iske baad, kya tum **`setInterval` aur `clearInterval`** par based ek problem solve karna chahoge, ya hum kisi dusre DSA topic par charcha karein?
