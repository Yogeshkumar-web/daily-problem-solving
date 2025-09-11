## **1. Explanation (Hinglish mein)**

👉 Tumhe ek array of characters diya gaya hai: `chars = ["a","a","b","b","c","c","c"]`.
Tumhe **consecutive repeating characters** ko compress karna hai:

- Agar character sirf 1 baar aaya → bas wahi character likh do.
- Agar character repeat hua hai → character ke baad uska count likho.

**Important:**

- Count agar `10` ya usse bada ho toh usko alag-alag digits mein todna hai.
  Example: 12 → "1","2".
- Answer `chars` array ke andar hi overwrite karna hai (in-place).
- Tumhe final compressed array ki **length return karni hai**.

---

### **Example 1:**

`chars = ["a","a","b","b","c","c","c"]`

- "aa" → "a2"
- "bb" → "b2"
- "ccc" → "c3"
  👉 Final array = \["a","2","b","2","c","3"]
  👉 Return = 6

### **Example 2:**

`chars = ["a"]`

- Single "a" → no compression
  👉 Final array = \["a"]
  👉 Return = 1

### **Example 3:**

`chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]`

- "a" → "a"
- "bbbbbbbbbbbb" → "b12" (digits split → "1","2")
  👉 Final array = \["a","b","1","2"]
  👉 Return = 4

---

### **Daily Life Analogy:**

Socho tumhe ek **attendance sheet** banana hai jisme ek hi student baar-baar naam likh raha hai. Tum uska naam ek baar likh ke uske repeat count likh dete ho.

- Agar "Rahul" ne 5 times likha hai → "Rahul5".
- Agar "Amit" sirf ek baar likha hai → "Amit".

---

## **2. Code Implementation (JavaScript + Hinglish comments)**

```javascript
/**
 * @param {character[]} chars
 * @return {number}
 */
function compress(chars) {
  let write = 0; // yeh index batayega hum compressed characters kaha likh rahe hain
  let read = 0; // yeh index array ko traverse karega

  while (read < chars.length) {
    let char = chars[read]; // current character
    let count = 0;

    // Count consecutive same characters
    while (read < chars.length && chars[read] === char) {
      read++;
      count++;
    }

    // Write the character
    chars[write] = char;
    write++;

    // Agar count > 1, toh count ke digits likho
    if (count > 1) {
      for (let digit of String(count)) {
        chars[write] = digit;
        write++;
      }
    }
  }

  // write ab new length hai
  return write;
}

// -------- Example Usage --------
let chars1 = ["a", "a", "b", "b", "c", "c", "c"];
console.log(compress(chars1)); // 6
console.log(chars1.slice(0, 6)); // ["a","2","b","2","c","3"]

let chars2 = ["a"];
console.log(compress(chars2)); // 1
console.log(chars2.slice(0, 1)); // ["a"]

let chars3 = ["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"];
console.log(compress(chars3)); // 4
console.log(chars3.slice(0, 4)); // ["a","b","1","2"]
```

---

## **3. Time & Space Complexity (Simple Explanation)**

### **Time Complexity:**

- Har character ko ek baar read karte hain aur ek baar write karte hain → **O(n)**.

### **Space Complexity:**

- Extra space: sirf kuch variables (`write`, `read`, `count`) → **O(1)**.
- Humne `chars` array ke andar hi overwrite kiya → extra array use nahi hua.

---

## ✅ Final Summary

- Two pointer approach: ek pointer read karega, ek pointer write karega.
- Consecutive characters count karo.
- Character + (agar count > 1 ho toh count ke digits) overwrite kar do.
- Return new length.
- Time: O(n), Space: O(1).
