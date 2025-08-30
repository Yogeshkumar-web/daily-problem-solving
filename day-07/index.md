## 1. Explanation

Socho tumhare paas ek **empty box** hai (yeh `init` hai).
Tumhe ek ek karke fruits (yeh `nums` array ke elements hain) is box ke saath combine karne hain ek rule ke basis par (yeh `fn` function hai jo batata hai kaise combine karna hai).

- Pehle tum box (init) aur first fruit (`nums[0]`) ko uthate ho, unko combine karte ho rule ke hisaab se → naya box value milta hai.
- Phir nayi box value ko leke next fruit ke saath combine karte ho.
- Aise karte karte tum saare fruits khatam kar doge.
- Last mein jo final box value bachegi, wahi answer hai.

👉 Example:
Suppose `nums = [1,2,3,4]`, `init = 0` aur `fn = (a,b) => a + b`
Matlab har step pe box value aur current number ko **add** karna hai.

- Start: box = `0`
- Step1: fn(0, 1) → 1
- Step2: fn(1, 2) → 3
- Step3: fn(3, 3) → 6
- Step4: fn(6, 4) → 10

Final result = `10`.

Yehi kaam `reduce` karta hai, but hum khud implement karenge.

---

## 2. **Code Implementation (JavaScript)**

```javascript
// Hum ek function bana rahe hain reduceArray
function reduceArray(nums, fn, init) {
  // Step1: initial value ko ek variable me store karte hain
  let val = init;

  // Step2: loop chalayenge saare array elements pe
  for (let i = 0; i < nums.length; i++) {
    // Har step pe fn ko call karenge, jisme current val aur nums[i] jayega
    val = fn(val, nums[i]);
  }

  // Step3: Jab loop khatam ho gaya, val return kar denge
  return val;
}

// Example usage
const nums = [1, 2, 3, 4];

// Function define karte hain jo add karega do numbers ko
const fn = (a, b) => a + b;

const init = 0;

// Call karte hain reduceArray function
console.log(reduceArray(nums, fn, init)); // Output: 10
```

### **Line by Line Explanation (Hinglish comments)**

```javascript
function reduceArray(nums, fn, init) {
  let val = init; // yeh box ki initial value hai (start point)

  for (let i = 0; i < nums.length; i++) {
    // har element pe loop chalega
    val = fn(val, nums[i]); // rule (fn) ko apply karke naya box value banega
  }

  return val; // final result jo bhi banega, return karenge
}
```

---

## 3. **Time and Space Complexity**

### **Time Complexity: O(n)**

- `n` = array ke elements ki count.
- Hum loop sirf **ek baar** chala rahe hain saare elements pe.
- Har iteration me `fn` function ek baar call hota hai.
  👉 Matlab agar array me 100 elements hain, toh 100 baar `fn` chalega.
  👉 Isliye iska time directly array ki length ke proportional hai → **O(n)**.

### **Space Complexity: O(1)**

- Humne sirf ek extra variable `val` use kiya hai.
- Koi extra array ya data structure nahi banaya.
- Chahe input array 1 element ka ho ya 10 lakh ka, humara extra space wahi ek variable rahega.
  👉 Isliye space complexity constant hai → **O(1)**.
