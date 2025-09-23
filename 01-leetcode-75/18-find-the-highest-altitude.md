## 🔹 1. Explanation (Hinglish)

Hume `gain` array diya hai jisme har element batata hai ki **next point** tak altitude kitna change hua (gain ya loss).

- Biker **0 altitude** se start karta hai.
- Har step pe hum _previous altitude_ + _gain\[i]_ karke **current altitude** nikal sakte hain.
- Hume bas yeh dekhna hai ki **sabse zyada altitude** kab mila.

### 🌏 Real-life Analogy

Socho tum bike ride par ja rahe ho hill station.

- Tum har km ka **climb ya drop** note kar rahe ho.
- Tumhara kaam hai ride ke end tak dekhna ki sabse upar tum kab the.

---

## 🔹 2. JavaScript Implementation (with Hinglish Comments)

```javascript
function largestAltitude(gain) {
  let altitude = 0; // starting altitude
  let maxAltitude = 0; // highest altitude so far

  for (let i = 0; i < gain.length; i++) {
    altitude += gain[i]; // current altitude = previous + gain[i]
    maxAltitude = Math.max(maxAltitude, altitude); // max check
  }

  return maxAltitude; // highest altitude at any point
}

// 🔹 Example
console.log(largestAltitude([-5, 1, 5, 0, -7])); // Output: 1
console.log(largestAltitude([-4, -3, -2, -1, 4, 3, 2])); // Output: 0
```

💡 Example 1 Explanation:

- Start: 0
- Step 1: 0 + (-5) = -5
- Step 2: -5 + 1 = -4
- Step 3: -4 + 5 = **1** ✅ (highest)
- Step 4: 1 + 0 = 1
- Step 5: 1 + (-7) = -6
  👉 Max altitude = **1**

---

## 🔹 3. Time & Space Complexity

- **Time Complexity:** **O(n)**

  - Hum har gain element ko ek baar process karte hain.

- **Space Complexity:** **O(1)**

  - Sirf 2 variables (`altitude`, `maxAltitude`) use ho rahe hain, input ke size par depend nahi.

---

### ✅ Summary

- Start at `0`.
- Har step pe altitude update karo.
- Maximum altitude track karte raho.
- Simple loop se kaam ho jayega.
