### 1\. Problem Statement: Memoize a Function

Is problem mein, humein ek function `fn` diya gaya hai. Humein ek naya function return karna hai jo ki **memoized** ho.

**Memoization** ka matlab hai ki hum ek function ke results ko **cache** (store) kar lete hain. Jab us function ko same inputs ke saath dobara call kiya jata hai, toh woh dobara calculate nahi hota, balki seedha cache se hi purana result return kar deta hai.

Isse code fast ho jata hai, khaaskar jab function expensive ho ya usko same inputs ke saath baar-baar call kiya jaye, jaise ki **recursion** mein.

---

### 2\. Solution: Code aur Uska Breakdown

Is problem ko solve karne ke liye, hum ek `Map` ya plain JavaScript object ko **cache** ke roop mein use karenge. `Map` thoda better hai kyunki isme keys kisi bhi data type ki ho sakti hain. Hum inputs ko `JSON.stringify()` karke key banayenge, taki array ya objects ko bhi unique key di ja sake.

```javascript
/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  const cache = new Map(); // Ek Map banate hain caching ke liye

  // Naya memoized function return karte hain
  return function (...args) {
    // Arguments ko ek unique string key mein convert karte hain
    const key = JSON.stringify(args);

    // Check karte hain ki result cache mein already hai ya nahi
    if (cache.has(key)) {
      // Agar hai, toh seedha cache se value return karte hain
      return cache.get(key);
    }

    // Agar nahi hai, toh original function ko call karte hain
    const result = fn(...args);

    // Naye result ko cache mein store karte hain
    cache.set(key, result);

    // Aur phir result return karte hain
    return result;
  };
}
```

#### Explanation of the Code

1.  **Cache Initialization**: Hum `memoize` function ke andar ek `cache` naam ka `Map` banate hain. Yeh `Map` ek **closure** banata hai, jisse ki inner function is `cache` ko access kar sakta hai, even after `memoize` function ka execution khatam ho jata hai.
2.  **Unique Key Generation**: Hum `JSON.stringify(args)` ka use karke function ke arguments ko ek unique string mein convert karte hain. Yeh string hamari cache key banegi.
3.  **Cache Check**: Jab memoized function call hota hai, sabse pehle hum check karte hain ki is `key` ke liye koi value `cache` mein stored hai ya nahi `cache.has(key)`.
4.  **Returning Cached Result**: Agar key exist karti hai, toh iska matlab hai ki is input ke liye function pehle run ho chuka hai. Hum seedha `cache.get(key)` se purana result le kar return kar dete hain.
5.  **Calling Original Function and Caching**: Agar key nahi milti, toh iska matlab hai ki yeh first time call ho raha hai. Hum `fn(...args)` call karte hain, aur jo result aata hai, use `cache.set(key, result)` ka use karke cache mein store kar lete hain. Phir result return kar dete hain.

### 3\. Special Case: `sum` function (a, b) vs (b, a)

Problem statement mein `sum` ke liye ek special condition thi: `(a, b)` aur `(b, a)` ko alag calls maanna hai. Hamara `JSON.stringify` solution is condition ko naturally handle karta hai. `JSON.stringify([3, 2])` `" "[3,2]"` return karega, jo ki `JSON.stringify([2, 3])` `" "[2,3]"` se alag hai. Isliye, do alag cache entries banengi, aur problem ka requirement meet ho jayega.

---

### 4\. Conclusion aur Summary

Memoization ek powerful technique hai jo performance ko significantly improve kar sakti hai. Isko implement karne ke liye closures aur ek caching data structure (jaise `Map`) ka use kiya jata hai. Is problem se tumne seekha ki kaise hum function calls ko optimize kar sakte hain by caching their results.

Would you like to try implementing this solution for the `fib` function to see its performance gain in action? It's a classic example for demonstrating the power of memoization.
