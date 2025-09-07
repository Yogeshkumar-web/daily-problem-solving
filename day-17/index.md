## **1. Explanation (Hinglish mein)**

Tum ek **Time-based Key-Value Store** banana chahte ho. Normal `Map` ya `Object` mein toh key-value store karna easy hota hai, par yahan har ek key ke saath ek **expiry time** bhi lagana hai.

### **Daily life analogy:**

Socho tum ek **fridge** mein doodh ke packet rakhte ho 🥛:

- Har packet (key) ke saath ek **expiry date** hoti hai (duration).
- Agar packet expire nahi hua toh tum doodh use kar sakte ho (get → return value).
- Agar packet expire ho gaya, toh usko use nahi kar sakte (get → -1).
- Jab bhi naya packet daalte ho (set), agar purana packet same jagah pe abhi tak kharab nahi hua tha → return true (kyunki overwrite hua). Warna → false.
- Aur fridge mein kitne fresh packets bache hain, wo `count()` se milega.

---

## **2. Code Implementation (JavaScript + Hinglish comments)**

```javascript
class TimeLimitedCache {
  constructor() {
    // Internal storage ke liye ek Map use karenge
    // Key -> { value: integer, expiry: timestamp in future }
    this.cache = new Map();
  }

  /**
   * @param {number} key
   * @param {number} value
   * @param {number} duration in ms
   * @return {boolean}
   */
  set(key, value, duration) {
    const currentTime = Date.now(); // abhi ka time
    const expiryTime = currentTime + duration; // kab expire hoga

    const alreadyExists =
      this.cache.has(key) && this.cache.get(key).expiry > currentTime;

    // overwrite karo (value + expiry update hoga)
    this.cache.set(key, { value, expiry: expiryTime });

    return alreadyExists; // true agar purana unexpired tha
  }

  /**
   * @param {number} key
   * @return {number}
   */
  get(key) {
    const currentTime = Date.now();

    if (this.cache.has(key)) {
      const entry = this.cache.get(key);

      // agar abhi bhi valid hai
      if (entry.expiry > currentTime) {
        return entry.value;
      } else {
        // expire ho gaya, toh hata do
        this.cache.delete(key);
        return -1;
      }
    }

    return -1; // agar key exist hi nahi karti
  }

  /**
   * @return {number}
   */
  count() {
    const currentTime = Date.now();
    let cnt = 0;

    for (const [key, entry] of this.cache.entries()) {
      if (entry.expiry > currentTime) {
        cnt++;
      } else {
        // agar expire ho gaya toh remove kar do
        this.cache.delete(key);
      }
    }

    return cnt;
  }
}

// ---------- Example Usage ----------
const cache = new TimeLimitedCache();

console.log(cache.set(1, 42, 1000)); // false (naya key)
console.log(cache.get(1)); // 42 (expire nahi hua abhi)
console.log(cache.count()); // 1

setTimeout(() => {
  console.log(cache.get(1)); // -1 (expire ho chuka)
  console.log(cache.count()); // 0
}, 1200);

console.log(cache.set(1, 100, 500)); // false (naya key set)
console.log(cache.set(1, 200, 1000)); // true (overwrite hua before expiry)
```

---

## **3. Time & Space Complexity (Simple Explanation)**

👉 Har method ka analysis karte hain:

### **set(key, value, duration):**

- `Map.set()` → O(1).
- Sirf ek overwrite/update ho raha hai.
- ✅ **Time Complexity = O(1)**
- ✅ **Space Complexity = O(1)** per key (kyunki ek value + expiry store karna hai).

### **get(key):**

- `Map.has()` aur `Map.get()` dono O(1).
- Agar expire hua toh `delete()` bhi O(1).
- ✅ **Time Complexity = O(1)**
- ✅ **Space Complexity = O(1)** (no extra space).

### **count():**

- Loop through `Map.entries()` → O(n), jahan n = number of keys.
- Har key check karni padti hai ki expire hui ya nahi.
- ✅ **Time Complexity = O(n)**
- ✅ **Space Complexity = O(1)** (bas counter rakha).

---

## ✅ Final Summary

- `set()` aur `get()` fast hain → O(1).
- `count()` mein thoda slow ho sakta hai kyunki saare keys check karne padenge → O(n).
- Space usage bas utna hai jitne active (unexpired) keys store kiye hain.
