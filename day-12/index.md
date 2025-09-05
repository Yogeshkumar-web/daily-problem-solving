### 1\. Problem Statement: Sum of Two Promises

Humein do promises diye gaye hain: `promise1` aur `promise2`. Dono promises ek number ke saath resolve honge. Humein ek naya promise return karna hai jo in dono numbers ka sum return kare.

Yeh problem asynchronous programming, khaaskar **Promises**, ko samajhne ke liye bahut fundamental hai. Real-world applications mein, humein aksar ek se zyada asynchronous tasks ke complete hone ka wait karna padta hai, jaise do alag-alag APIs se data fetch karna, aur phir un data par koi operation perform karna.

---

### 2\. Solution: Code aur Uska Breakdown

Is problem ko solve karne ke liye, hum JavaScript ke built-in `Promise.all()` method ka use karenge. Yeh method ek array of promises ko as input leta hai aur ek naya promise return karta hai. Yeh naya promise tabhi resolve hota hai jab input array ke **saare promises** successfully resolve ho jaate hain.

```javascript
/**
 * @param {Promise<number>} promise1
 * @param {Promise<number>} promise2
 * @return {Promise<number>}
 */
var addTwoPromises = async function (promise1, promise2) {
  // 1. Dono promises ke resolve hone ka wait karte hain.
  // await Promise.all() dono promises ka result ek array mein dega.
  const [value1, value2] = await Promise.all([promise1, promise2]);

  // 2. Dono values ko add karte hain.
  const sum = value1 + value2;

  // 3. Ek naya promise return karte hain jo sum ke saath resolve ho.
  return sum;
};
```

**Explanation of the Code**

1.  **`async/await`**: Hum `async` keyword ka use kar rahe hain taaki hum `await` ka use kar sakein. `await` se hum promise ke resolve hone tak wait kar sakte hain. Isse code synchronous jaisa lagta hai, aur readable bhi hota hai.
2.  **`Promise.all()`**: Yeh method ek array leta hai `[promise1, promise2]`. Jaise hi dono promises resolve ho jaate hain, `Promise.all()` ek naya promise return karta hai jo ek array `[value1, value2]` ke saath resolve hota hai. Yahaan `value1` `promise1` ka result hai aur `value2` `promise2` ka.
3.  **Destructuring**: `const [value1, value2] = await Promise.all(...)` syntax ko **array destructuring** kehte hain. Isse hum `Promise.all` se aane wale array ke values ko seedha variables mein extract kar sakte hain.
4.  **Returning the Sum**: Final step mein, hum `value1` aur `value2` ko add karke seedha `sum` return kar dete hain. Kyunki function `async` hai, yeh automatically ek promise return karega jo is `sum` ke saath resolve hoga.

### 3\. Alternate Solution: Using `.then()`

Tum `.then()` method ka use karke bhi same result achieve kar sakte ho, lekin `async/await` modern aur jyada readable approach hai.

```javascript
/**
 * @param {Promise<number>} promise1
 * @param {Promise<number>} promise2
 * @return {Promise<number>}
 */
var addTwoPromises = function (promise1, promise2) {
  return Promise.all([promise1, promise2]).then((values) => {
    const sum = values[0] + values[1];
    return sum;
  });
};
```

Is method mein, `Promise.all()` promise ke resolve hone par `.then()` ko call karta hai, jisme `values` array of resolved values hoti hai. Phir hum `values[0]` aur `values[1]` ko add karke return kar dete hain.

---

In solutions se tumhe promises aur unke saath kaam karne ke tarike samajh mein aaye honge. Promise handling asynchronous JavaScript ka ek bahut important part hai.

Ab jab tumhe promises ka basic idea lag gaya hai, kya tum next problem solve karna chahoge, ya fir hum **`Promise.all` aur `Promise.race`** jaise methods mein kya antar hai, is par charcha karein?
