**Practice Problem 1: `Calculator`**

> Ek function banao, `createCalculator`, jo ek initial value leta hai aur ek object return karta hai jismein teen functions honge: `add`, `subtract`, aur `getValue`.
>
> - `add(num)`: Initial value mein `num` add karta hai.
> - `subtract(num)`: Initial value se `num` subtract karta hai.
> - `getValue()`: Current value ko return karta hai.
>
> Jaise:
>
> ```javascript
> const calculator = createCalculator(10);
> calculator.add(5); // value becomes 15
> calculator.subtract(2); // value becomes 13
> console.log(calculator.getValue()); // 13
> ```

**Hint:** Ye problem bhi **closure** use karti hai. Socho ki `createCalculator` function ke andar ek variable hoga jo current value ko store karega. Us variable ko `add`, `subtract`, aur `getValue` functions kaise access karenge?

---

**Practice Problem 2: `Counter`**

> Ek function banao `createCounter` jo ek initial integer `n` leta hai aur ek object return karta hai jismein teen functions hain: `increment`, `decrement`, aur `reset`.
>
> - `increment()`: `n` ko 1 se badhata hai aur new value return karta hai.
> - `decrement()`: `n` ko 1 se kam karta hai aur new value return karta hai.
> - `reset()`: `n` ko initial value par wapas le aata hai aur new value return karta hai.
>
> Jaise:
>
> ```javascript
> const counter = createCounter(5);
> console.log(counter.increment()); // 6
> console.log(counter.decrement()); // 5
> console.log(counter.reset()); // 5
> console.log(counter.increment()); // 6
> ```

**Hint:** Isme bhi aapko **closure** ka use karna padega. Ek variable ko `createCounter` ke andar store karo, aur phir uski initial value ko bhi kahin save karke rakho taaki `reset` function use use kar sake.
