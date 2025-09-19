## **1. Problem Samajhna (Hinglish mein)**

Tumhe ek `EventEmitter` class design karni hai jisme:

### 👉 Methods:

1. **subscribe(eventName, callback)**

   - Kisi event ke naam aur ek function ko register karega.
   - Ek **unsubscribe object** return karega jisme `unsubscribe()` method hoga jo callback ko remove karega.

2. **emit(eventName, args)**

   - Jab event trigger hoga, us event ke saare callbacks **order of subscription** me call honge.
   - Har callback ko `args` (array) ke saath call karna hai.
   - Ek array return karna hai jisme har callback ke return values hon.

---

### Example

```js
const emitter = new EventEmitter();

function cb1(x) {
  return x + 1;
}
function cb2(x) {
  return x + 2;
}

const sub1 = emitter.subscribe("add", cb1);
const sub2 = emitter.subscribe("add", cb2);

console.log(emitter.emit("add", [5])); // [6, 7]

sub1.unsubscribe();
console.log(emitter.emit("add", [5])); // [7]
```

---

### Analogy

Socho tumhare paas ek **radio station** hai (event).

- **Listeners** (callbacks) subscribe karte hain station pe.
- Jab station broadcast karta hai (emit), sab listeners ko message milta hai.
- Listener chaho to unsubscribe bhi kar sakta hai.

---

## **2. Approach**

- Ek **map (object)** maintain karo: `{ eventName: [callbacks...] }`

- **subscribe:**

  - Agar event ke liye array exist nahi karta, create karo.
  - Callback ko push karo.
  - Return an object with `unsubscribe` method:

    - Unsubscribe karte time array se callback ko remove karo.

- **emit:**

  - Agar event ke callbacks hai → sabko args ke saath call karo.
  - Har callback ka result array me collect karke return karo.

---

## **3. JavaScript Code (with Hinglish Comments)**

```javascript
class EventEmitter {
  constructor() {
    this.events = {}; // yahan har event ke subscribers store honge
  }

  subscribe(eventName, callback) {
    // Agar eventName pehle exist nahi karta to empty array se start karo
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }

    this.events[eventName].push(callback);

    // unsubscribe method return karo
    return {
      unsubscribe: () => {
        // is event ke list me callback ka index nikal ke remove karo
        const idx = this.events[eventName].indexOf(callback);
        if (idx !== -1) {
          this.events[eventName].splice(idx, 1);
        }
        // agar array khali ho jaye to key delete kar sakte ho (optional)
      },
    };
  }

  emit(eventName, args = []) {
    // agar eventName ke liye koi callbacks nahi hai to empty array return
    if (!this.events[eventName]) return [];

    const results = [];
    for (let cb of this.events[eventName]) {
      results.push(cb(...args)); // args ko spread karke callback call
    }
    return results;
  }
}

// -------- Example Usage --------
const emitter = new EventEmitter();

function cb1(x) {
  return x + 1;
}
function cb2(x) {
  return x + 2;
}

const sub1 = emitter.subscribe("add", cb1);
const sub2 = emitter.subscribe("add", cb2);

console.log(emitter.emit("add", [5])); // [6, 7]

sub1.unsubscribe(); // cb1 ko remove kar diya

console.log(emitter.emit("add", [5])); // [7]
```

---

## **4. Complexity Analysis**

| Operation       | Time Complexity | Explanation                                                  |
| --------------- | --------------- | ------------------------------------------------------------ |
| **subscribe**   | O(1) (avg)      | Bas array me push kar rahe hain                              |
| **emit**        | O(m)            | m = number of callbacks for that event                       |
| **unsubscribe** | O(m)            | Worst case me callback ko dhoondh kar remove karna padta hai |

Space Complexity: **O(total subscriptions)** → jitne listeners store karoge utni space.

---

✅ **Key Idea:**

- **Map** use karke har event ke subscribers ko track karo.
- `unsubscribe()` function closure ke through same callback ko access karke remove karta hai.
