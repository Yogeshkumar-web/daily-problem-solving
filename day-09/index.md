## 1\. Problem Statement: Arguments Ki Ginti

Is problem mein humein ek function banana hai jo bataye ki uske paas kitne arguments aaye hain. Jaise agar tum `argumentsLength(1, 2, 3)` call karte ho, toh ye **3** return kare. Agar `argumentsLength('a', true, null)` call karte ho, toh bhi **3** return karega. Simple hai, right? 🤔

### Why is this problem important?

Yeh problem **function parameters** aur JavaScript ke **special `arguments` object** ya **rest parameters (`...args`)** ko samajhne ke liye ek perfect starting point hai. Yeh concepts kaafi fundamental hain, especially jab hum functions ke saath deal karte hain jinke parameters ki ginti pehle se fix nahi hoti.

---

## 2\. Solution: Code aur Uska Breakdown

Ab chalo iska solution dekhte hain. Iske liye hum do common tarike use kar sakte hain:

### Method 1: Using the `...args` Rest Parameter

Ye modern JavaScript (ES6) ka ek bahut hi accha feature hai. `...args` ek array banata hai jisme function ko pass kiye gaye saare arguments store hote hain. Aur array ki length nikalna toh humein aata hi hai, hai na? `array.length` se\!

```javascript
var argumentsLength = function (...args) {
  // ...args ek array hai, aur iski length property use karke
  // hum isme present elements (arguments) ki ginti nikaal sakte hain.
  return args.length;
};

// Example Usage:
console.log(argumentsLength(1, 2, 3)); // Output: 3
console.log(argumentsLength("a", {}, null, undefined)); // Output: 4
```

**Explanation:** `...args` ko hum **rest parameter** kehte hain. Yeh function ke saare arguments ko ek single array mein pack kar deta hai. Isliye, hum bas `args.length` ko return kar dete hain. Kitna clean aur simple hai, hai na?

### Method 2: The Old School Way (Using `arguments` Object)

Ye thoda purana tarika hai, lekin ye bhi kaam karta hai. JavaScript mein, har non-arrow function ke andar ek special `arguments` object hota hai. Ye ek array-like object hai jisme function ko pass kiye gaye saare arguments hote hain.

```javascript
var argumentsLength = function () {
  // 'arguments' object ek array jaisa object hai
  // jiske paas 'length' property hoti hai.
  return arguments.length;
};

// Example Usage:
console.log(argumentsLength(1, 2, 3)); // Output: 3
console.log(argumentsLength("a", {}, null, undefined)); // Output: 4
```

**Note:** `arguments` object arrow functions (`() => {}`) mein available nahi hota. Isliye, modern code mein hum `...args` rest parameter ko prefer karte hain.

---

## 3\. Conclusion aur Summary

Toh Yogesh, `argumentsLength` jaise problems ko solve karne ke liye, `...args` rest parameter sabse best aur modern approach hai. Yeh code ko jyada readable aur predictable banata hai. `arguments` object bhi ek option hai, lekin iska use kam ho gaya hai, khaaskar arrow functions ke badhte use ki wajah se.

Aage ke liye, jab bhi tumhe kisi function ke arguments ko access karna ho, `...args` hi sochna\!
