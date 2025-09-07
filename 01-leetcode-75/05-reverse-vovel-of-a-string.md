## **1. Explanation (Hinglish mein)**

👉 Problem: Tumhe ek string di gayi hai. Tumhe usme sirf **vowels (a, e, i, o, u, A, E, I, O, U)** ko reverse karna hai. Baaki characters ko unki jagah pe hi rehna hai.

### **Daily life analogy:**

Socho tumhare paas ek line mein bacche khade hain, jisme kuch log topi pehene huye hain (yeh vowels hai 🎩) aur kuch bina topi ke hain (non-vowels). Tumhe kehna hai:

- "Jo topi wale hain, tum apni positions ulat lo."
- Baaki jo bina topi ke hain wo wahi khade rahenge.

Bas yahi logic hai — sirf **topi wale (vowels)** reverse order mein aayenge.

---

## **2. Code Implementation (JavaScript + Hinglish comments)**

Hum yahan **two pointers** technique use karenge: ek left se aur ek right se.

```javascript
/**
 * @param {string} s
 * @return {string}
 */
function reverseVowels(s) {
  // Step 1: String ko array mein convert karenge (kyunki JS string immutable hai)
  const arr = s.split("");

  // Step 2: Vowel check karne ke liye set bana lo
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

  // Step 3: Two pointers
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    // Agar left wala vowel nahi hai toh aage badho
    if (!vowels.has(arr[left])) {
      left++;
      continue;
    }

    // Agar right wala vowel nahi hai toh peeche aao
    if (!vowels.has(arr[right])) {
      right--;
      continue;
    }

    // Agar dono vowels hain toh swap karo
    [arr[left], arr[right]] = [arr[right], arr[left]];

    // Move pointers
    left++;
    right--;
  }

  // Step 4: Array ko wapas string mein convert karo
  return arr.join("");
}

// -------- Example Usage ----------
console.log(reverseVowels("hello")); // holle
console.log(reverseVowels("leetcode")); // leotcede
console.log(reverseVowels("Yogee")); // Yegeo
```

---

## **3. Time & Space Complexity (Simple Explanation)**

### **Time Complexity:**

- Humne string ko ek hi baar traverse kiya using two pointers.
- Har character ek hi baar check hota hai → **O(n)** (n = string length).
- Vowel check `Set.has()` O(1) hai.
  ✅ **Time Complexity = O(n)**

### **Space Complexity:**

- Ek array banaya string ko modify karne ke liye → O(n).
- Ek vowel set banaya (constant size = 10 letters) → O(1).
  ✅ **Space Complexity = O(n)** (kyunki n characters array mein store hote hain).

---

## ✅ Summary

- Use **two pointers** (left & right).
- Non-vowels skip karo, vowels milne par swap karo.
- Time → O(n), Space → O(n).
