## **1. Problem Samajhna (Hinglish mein)**

- Tumhe ek string `s` aur ek integer `k` diya hai.
- Tumhe check karna hai ki **length = k wale substring** me maximum vowels kitne ho sakte hain.
- Vowels = `a, e, i, o, u` (sirf lowercase English vowels).

---

### **Example 1**

```js
(s = "abciiidef"), (k = 3);
```

- Substrings of length 3:

  - "abc" → 1 vowel (`a`)
  - "bci" → 1 vowel (`i`)
  - "cii" → 2 vowels (`i,i`)
  - "iii" → 3 vowels ✅ (max)
  - "iid" → 2 vowels
  - "ide" → 2 vowels
  - "def" → 1 vowel

Answer = **3**

---

### **Analogy**

Socho tumhare paas ek sliding **magnifying glass (window of size k)** hai.
Tum string ke upar se slide kar rahe ho aur har window me count kar rahe ho ki kitne vowels dikhe.
Tumhe maximum vowels count chahiye jo kisi bhi window me aaya ho.

---

## **2. Approach**

### ✅ Sliding Window (Efficient O(n) approach)

1. Pehle k characters ka vowel count nikalo.
2. Window ko ek ek step slide karo:

   - Window se bahar jaane wala char vowel hai to count −1.
   - Window me aane wala char vowel hai to count +1.

3. Har step pe max vowel count update karte jao.

---

## **3. JavaScript Code (with Hinglish Comments)**

```javascript
function maxVowels(s, k) {
  const vowels = new Set(["a", "e", "i", "o", "u"]); // vowel set quick lookup ke liye

  let count = 0;
  let maxCount = 0;

  // Step 1: Pehle k characters ka vowel count
  for (let i = 0; i < k; i++) {
    if (vowels.has(s[i])) count++;
  }
  maxCount = count;

  // Step 2: Window slide karte jao
  for (let i = k; i < s.length; i++) {
    if (vowels.has(s[i])) count++; // new char add
    if (vowels.has(s[i - k])) count--; // old char remove
    maxCount = Math.max(maxCount, count); // max update
  }

  return maxCount;
}

// -------- Example Usage --------
console.log(maxVowels("abciiidef", 3)); // Output: 3
console.log(maxVowels("aeiou", 2)); // Output: 2
console.log(maxVowels("leetcode", 3)); // Output: 2
```

---

## **4. Complexity Analysis**

- **Time Complexity:** O(n)

  - Har character ek baar add/remove hota hai window me.

- **Space Complexity:** O(1)

  - Sirf `Set` vowels ke liye constant space.

---

✅ Final: Sliding window approach is best (O(n), O(1)).
