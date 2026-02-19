Perfect 👍 These are **very common JavaScript interview questions**. I’ll give you **short, crisp, interview-ready answers** with examples.

---

## 1️⃣ What is Hoisting?

**Answer:**

Hoisting is JavaScript's default behavior of **moving variable and function declarations to the top of their scope during the compilation phase**.

Only **declarations are hoisted**, not initializations.

### Example:

```js
console.log(a); // undefined
var a = 10;
```

Behind the scenes:

```js
var a;
console.log(a); // undefined
a = 10;
```

For functions:

```js
greet(); // Works

function greet() {
  console.log("Hello");
}
```

Function declarations are fully hoisted.

---

## 2️⃣ Difference between `var`, `let`, and `const`

| Feature   | var             | let          | const        |
| --------- | --------------- | ------------ | ------------ |
| Scope     | Function scoped | Block scoped | Block scoped |
| Hoisted   | Yes             | Yes          | Yes          |
| TDZ       | No              | Yes          | Yes          |
| Reassign  | Yes             | Yes          | ❌ No         |
| Redeclare | Yes             | ❌ No         | ❌ No         |

### Key Points for Interview:

* `var` → Old way, function-scoped.
* `let` → Block-scoped, safer.
* `const` → Block-scoped, cannot reassign.

Example:

```js
if (true) {
  var a = 10;
  let b = 20;
}

console.log(a); // 10
console.log(b); // Error
```

---

## 3️⃣ What is TDZ (Temporal Dead Zone)?

**Answer:**

TDZ is the time between when a variable is hoisted and when it is initialized.

During this period, accessing the variable throws a **ReferenceError**.

Example:

```js
console.log(a); // ReferenceError
let a = 10;
```

Even though `let` is hoisted, it cannot be accessed before initialization.

---

## 4️⃣ What is Lexical Scope?

**Answer:**

Lexical scope means that a function can access variables defined in its **outer (parent) scope**, based on where it is written in the code.

Scope is determined at **compile time**, not runtime.

Example:

```js
function outer() {
  let a = 10;

  function inner() {
    console.log(a); // 10
  }

  inner();
}
```

`inner()` can access `a` because it is lexically inside `outer()`.

---

## 5️⃣ What is Closure?

**Answer:**

A closure is a function that remembers and can access variables from its **outer scope even after the outer function has finished executing**.

Example:

```js
function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();
counter(); // 1
counter(); // 2
```

Here, `inner()` forms a closure over `count`.

---

## 6️⃣ Why is Closure Useful?

Closures are useful for:

### ✅ Data Encapsulation (Private Variables)

```js
function createCounter() {
  let count = 0;

  return {
    increment() { count++; },
    getCount() { return count; }
  };
}
```

### ✅ Maintaining State

Used in:

* Event handlers
* Timers
* Callbacks
* React hooks
* Module patterns

### ✅ Function Factories

```js
function multiply(x) {
  return function(y) {
    return x * y;
  };
}

const double = multiply(2);
console.log(double(5)); // 10
```

---

## 7️⃣ Is `let` Hoisted?

**Answer:**

Yes, `let` is hoisted.

But it stays in the **Temporal Dead Zone (TDZ)** until initialization.

Example:

```js
console.log(a); // ReferenceError
let a = 10;
```

So:

* `var` → Hoisted and initialized with `undefined`
* `let` → Hoisted but NOT initialized
* `const` → Hoisted but NOT initialized

---

# 🔥 Interview Tip (Very Important)

If interviewer asks:

> "If let is hoisted, why does it throw error?"

Answer:

> Because it is hoisted but kept in Temporal Dead Zone until initialization. Unlike var, it is not initialized with undefined.

---

If you want, I can now give you:

* Tricky interview follow-up questions on closures
* Advanced closure problems
* Output-based hoisting questions
* JavaScript interview rapid-fire round

Tell me 👨‍💻
