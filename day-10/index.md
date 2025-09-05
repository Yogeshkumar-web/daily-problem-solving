## 1\. Problem Statement: Run a Function Only Once

Humein ek function `fn` diya gaya hai. Humein ek naya function return karna hai jo bilkul `fn` jaisa hi kaam kare, par ek twist ke saath:

- Jab hum is naye function ko **first time** call karenge, toh yeh `fn` ko execute karega aur uska result return karega.
- **Subsequent calls** par, yeh `fn` ko bilkul bhi call nahi karega aur seedha `undefined` return karega.

Yeh concept kafi useful hota hai jab hume koi expensive operation (jaise network request ya database call) sirf ek baar hi karna ho. Isse code optimized aur efficient banta hai.

---

## 2\. Solution: Code aur Uska Breakdown

Is problem ko solve karne ke liye, hum ek closure ka use karenge. Closure ek feature hai jahan ek inner function apne outer function ke variables ko access kar sakta hai, even after the outer function has finished executing. Is case mein, hum ek flag (boolean variable) ka use karenge jo track karega ki function pehle run ho chuka hai ya nahi.

```javascript
/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
  // 1. Ek flag variable banate hain to track the state.
  // 'hasBeenCalled' initially false hai.
  let hasBeenCalled = false;
  let result; // Yahan hum function ka result store karenge

  // 2. Naya function return karte hain.
  // ...args use karte hain taaki yeh naya function
  // original fn ke arguments ko pass kar sake.
  return function (...args) {
    // 3. Condition check: Agar function abhi tak call nahi hua hai...
    if (!hasBeenCalled) {
      // ... toh ise pehli baar call karte hain.
      hasBeenCalled = true; // Flag ko true karte hain
      result = fn(...args); // Original function ko call karke result store karte hain
      return result; // Result return karte hain
    } else {
      // 4. Agar function pehle hi call ho chuka hai...
      // ... toh seedha undefined return karte hain.
      return undefined;
    }
  };
};
```

### Explanation of the Code

1.  **State Management with a Flag**: Hum `once` function ke andar `hasBeenCalled` naam ka ek variable banate hain. Iska default value `false` hai. Yeh variable is naye function ka "state" hai.
2.  **The Closure**: Hum `once` function ke andar se ek naya anonymous function return karte hain. Yeh naya function hi asal mein woh 'once' function hai jise hum call karenge. Kyunki yeh inner function hai, iske paas `hasBeenCalled` variable ka access hai, even after the `once` function has finished its execution. Yahi **closure** hai\!
3.  **First Call Logic**: Jab pehli baar naya function run hota hai, `!hasBeenCalled` (jo ki `!false` hai) `true` ho jata hai. Hum `hasBeenCalled` ko `true` set kar dete hain, original `fn` ko call karte hain, aur uska result `result` variable mein store karte hain. Phir isi result ko return kar dete hain.
4.  **Subsequent Calls Logic**: Next time jab function call hoga, `!hasBeenCalled` (jo ki `!true` hai) `false` ho jayega. Condition fail ho jayegi aur code `return undefined` par chala jayega.

---

## 3\. Dry Run (Example)

Chalo ek example se isko samajhte hain:

```javascript
// Ek sample function banate hain
const sayHello = () => {
  console.log("Hello, World!");
  return "Executed!";
};

// once function ka use karke naya function banate hain
const runOnceSayHello = once(sayHello);

console.log(runOnceSayHello()); // Output: Hello, World! then Executed!
console.log(runOnceSayHello()); // Output: undefined
console.log(runOnceSayHello()); // Output: undefined
```

Pehli call par, `hasBeenCalled` `false` tha, isliye `sayHello` chala, aur `runOnceSayHello` ne `'Executed!'` return kiya. Agli calls par `hasBeenCalled` `true` ho gaya tha, isliye `sayHello` nahi chala aur `runOnceSayHello` ne `undefined` return kiya.
