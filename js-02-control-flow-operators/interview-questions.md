Perfect 👍 These are **very common JS + logic + interview trap questions**.  
I’ll give you **crisp, interview-ready answers** with examples and follow-ups.

---

## 1️⃣ Difference between `==` and `===`

### ✅ `==` (Loose Equality)
- Compares **after type coercion**
- Converts values to same type automatically

```js
'5' == 5   // true
false == 0 // true
null == undefined // true
```

### ✅ `===` (Strict Equality)
- Compares **value AND type**
- No type conversion

```js
'5' === 5   // false
5 === 5     // true
```

### 🎯 Interview Best Practice:
> Always use `===` to avoid unexpected type coercion bugs.

---

## 2️⃣ What is Short Circuiting?

Short circuiting means JavaScript stops evaluating an expression as soon as the result is determined.

### In `&&` (AND)
Stops when it finds **false**

```js
false && console.log("Hello"); // Won’t run
```

### In `||` (OR)
Stops when it finds **true**

```js
true || console.log("Hello"); // Won’t run
```

### Real Use Case:

```js
let name = userInput || "Guest";
```

If `userInput` is falsy → "Guest" is used.

---

## 3️⃣ What are Truthy and Falsy Values?

### 🔴 Falsy Values (ONLY 6)

```js
false
0
-0
0n
""
null
undefined
NaN
```

Everything else is **truthy**.

Example:

```js
if ("hello") { } // true
if ([]) { }      // true
if ({}) { }      // true
```

🎯 Interview Trick:
> Empty array and empty object are truthy.

---

## 4️⃣ How does `switch(true)` work?

`switch(true)` allows using conditions instead of fixed values.

Example:

```js
let num = 15;

switch(true) {
  case num < 10:
    console.log("Small");
    break;
  case num < 20:
    console.log("Medium");
    break;
  default:
    console.log("Large");
}
```

It compares:

```
true === (num < 10)
```

So whichever condition evaluates to `true` runs.

🎯 Used for cleaner range-based conditions.

---

## 5️⃣ How can you optimize Prime Checking?

### ❌ Naive Approach:
Check from 2 to n-1 → O(n)

### ✅ Optimized Approach:
Check from 2 to √n → O(√n)

```js
function isPrime(n) {
  if (n <= 1) return false;
  if (n === 2) return true;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
```

🎯 Why √n?
If n has a factor larger than √n, the smaller pair must already exist.

---

## 6️⃣ What happens if input is string?

JavaScript performs **type coercion** depending on operator.

### Example:

```js
"5" + 2   // "52" (string concatenation)
"5" - 2   // 3 (number subtraction)
```

If checking prime:

```js
isPrime("7")
```

JavaScript converts `"7"` to number automatically in comparisons.

But:

```js
isPrime("hello") // NaN issues
```

So better to explicitly convert.

---

## 7️⃣ Why use `Number()` instead of `parseInt()`?

### ✅ `Number()`
- Converts entire string
- Returns `NaN` if invalid

```js
Number("10")     // 10
Number("10abc")  // NaN
```

### ✅ `parseInt()`
- Parses until invalid character
- Stops early

```js
parseInt("10abc") // 10
parseInt("abc10") // NaN
```

### 🎯 Interview Answer:

Use `Number()` when:
- You want strict conversion
- Input must be fully numeric

Use `parseInt()` when:
- Extracting number from mixed string
- Working with radix (base)

```js
parseInt("101", 2) // 5
```

---

# 🔥 Interview Follow-Up Traps They May Ask

- What is `NaN === NaN`?
- Why `[] == false` is true?
- Difference between `||` and `??`
- What is implicit vs explicit coercion?

---
