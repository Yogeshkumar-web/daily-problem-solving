## **1. Explanation (Hinglish mein)**

👉 Tumhe check karna hai ki string `s` ek subsequence hai string `t` ka ya nahi.

- **Subsequence ka matlab:** Characters ko sequence ke hisaab se rakhna hai, but bich ke kuch characters chhod sakte ho.
- Tumhe order disturb **nahi** karna hai.

---

### **Example 1:**

```
s = "ace"
t = "abcde"
```

- `a` (s\[0]) → `t` mein first character hai ✅
- `c` (s\[1]) → `t` mein 'a' ke baad aata hai ✅
- `e` (s\[2]) → `t` mein 'c' ke baad aata hai ✅

Result → true

---

### **Example 2:**

```
s = "aec"
t = "abcde"
```

- `a` → mil gaya ✅
- `e` → mil gaya ✅
- `c` → par dikkat yaha hai ❌ (kyunki 'c' `e` ke baad nahi aata).

Result → false

---

### **Daily Life Analogy:**

Socho tum ek **playlist** bana rahe ho, aur tumhare paas ek **badi list of songs (t)** hai.
Agar tumhari playlist (s) ke songs wahi order mein us badi list mein mil jaate hain (beech ke gaane chhod bhi do, koi problem nahi), toh tumhari playlist us badi list ka subsequence hai.

---

## **2. Code Implementation (JavaScript + Hinglish Comments)**

```javascript
function isSubsequence(s, t) {
  // Two pointer approach: ek pointer s ke liye aur ek t ke liye
  let i = 0; // pointer for s
  let j = 0; // pointer for t

  // Jab tak dono strings khatam nahi hote
  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      // Agar characters match hue toh s ka pointer aage badhao
      i++;
    }
    // t ka pointer hamesha aage badhega
    j++;
  }

  // Agar s ka pointer end tak pohonch gaya, matlab saare chars match hue
  return i === s.length;
}

// -------- Example Usage --------
console.log(isSubsequence("ace", "abcde")); // true
console.log(isSubsequence("aec", "abcde")); // false
console.log(isSubsequence("", "abcde")); // true (empty string is always subsequence)
```

---

## **3. Time & Space Complexity (Simple Explanation)**

### **Time Complexity:**

- Har character of `t` ko at max ek baar traverse karenge.
- Har character of `s` ko bhi ek baar traverse karenge.
  ✅ Total = **O(n)**, jaha `n = length of t`.

### **Space Complexity:**

- Humne sirf kuch pointers use kiye (i, j).
- Koi extra data structure nahi.
  ✅ Space = **O(1)**

---

## ✅ Final Summary

- Humne **two-pointer technique** use ki subsequence check karne ke liye.
- Time O(n), Space O(1).
- Daily life mein isko "playlist check" analogy se samajh sakte ho.
