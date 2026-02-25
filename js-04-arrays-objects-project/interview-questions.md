1. Difference between map() and forEach()?
2. What is shallow copy?
3. What is deep copy?
4. What does spread operator do?
5. Why use [...array] before sort?
6. Difference between find() and filter()?
7. How reduce works internally?

Perfect 🔥 These are **very common JS interview questions** (especially for frontend + React roles).
I’ll give you **interview-ready, crisp answers + examples + follow-up clarity**.

---

# 1️⃣ Difference between `map()` and `forEach()`

| Feature          | `map()`        | `forEach()`                             |
| ---------------- | -------------- | --------------------------------------- |
| Returns value    | ✅ New array    | ❌ Undefined                             |
| Used for         | Transformation | Side effects                            |
| Chainable        | ✅ Yes          | ❌ No                                    |
| Mutates original | ❌ No           | ❌ No (unless you manually change items) |

### ✅ Example:

```js
const arr = [1, 2, 3];

const result = arr.map(num => num * 2);
console.log(result); // [2, 4, 6]

const test = arr.forEach(num => num * 2);
console.log(test); // undefined
```

### 🎯 Interview Line:

> Use `map()` when you want a transformed array.
> Use `forEach()` when you just want to iterate.

---

# 2️⃣ What is Shallow Copy?

A shallow copy copies only the **first level** of an object.

Nested objects still share the same reference.

### Example:

```js
const obj1 = { a: 1, b: { c: 2 } };

const obj2 = { ...obj1 };

obj2.b.c = 100;

console.log(obj1.b.c); // 100 ❗
```

Because nested object is still shared.

---

# 3️⃣ What is Deep Copy?

Deep copy creates a **completely independent clone**, including nested objects.

### Example:

```js
const obj1 = { a: 1, b: { c: 2 } };

const obj2 = JSON.parse(JSON.stringify(obj1));

obj2.b.c = 100;

console.log(obj1.b.c); // 2 ✅
```

Now both are fully independent.

### 🎯 Modern way:

```js
structuredClone(obj1);
```

---

# 4️⃣ What does Spread Operator (`...`) do?

Spread operator expands:

* Arrays
* Objects
* Function arguments

### Array Example:

```js
const arr1 = [1, 2];
const arr2 = [...arr1, 3];
```

### Object Example:

```js
const obj1 = { a: 1 };
const obj2 = { ...obj1, b: 2 };
```

### Function Example:

```js
Math.max(...[1, 5, 3]);
```

### 🎯 Interview Line:

> Spread creates a shallow copy and expands iterable values.

---

# 5️⃣ Why use `[...array]` before `sort()`?

Because `sort()` **mutates the original array**.

### Example:

```js
const arr = [3, 1, 2];

const sorted = [...arr].sort();

console.log(arr);    // [3, 1, 2] ✅ original safe
console.log(sorted); // [1, 2, 3]
```

If you don’t spread:

```js
arr.sort();
```

Original array changes.

### 🎯 Important in React:

We avoid mutating state directly.

---

# 6️⃣ Difference between `find()` and `filter()`

| Feature     | `find()`     | `filter()`  |
| ----------- | ------------ | ----------- |
| Returns     | First match  | All matches |
| Return type | Single value | Array       |
| Stops early | ✅ Yes        | ❌ No        |

### Example:

```js
const arr = [1, 2, 3, 4];

arr.find(num => num > 2); 
// 3

arr.filter(num => num > 2);
// [3, 4]
```

### 🎯 Interview Line:

> `find()` returns first match.
> `filter()` returns all matching elements.

---

# 7️⃣ How `reduce()` Works Internally?

`reduce()` executes a callback on each element and accumulates a single value.

### Syntax:

```js
array.reduce((accumulator, current, index, array) => {
   return updatedAccumulator;
}, initialValue);
```

### Example:

```js
const arr = [1, 2, 3, 4];

const sum = arr.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(sum); // 10
```

### Internal Working (Conceptually):

```
Iteration 1: acc = 0 + 1 → 1
Iteration 2: acc = 1 + 2 → 3
Iteration 3: acc = 3 + 3 → 6
Iteration 4: acc = 6 + 4 → 10
```

### 🎯 Important Points:

* If no initial value → first element becomes accumulator.
* It can:

  * Sum values
  * Flatten arrays
  * Count occurrences
  * Group objects
  * Build objects

---

# 🔥 Advanced Interview Follow-Ups

They may ask:

* Why `sort()` without compare function gives wrong result?
* Difference between `Object.assign()` and spread?
* Can `reduce()` replace `map()` and `filter()`?
* What happens if no initial value in reduce?

---

If you want next level:

* 🔥 Advanced array output questions
* 🧠 reduce-based tricky problems



Perfect Ayush 🔥
Now we move to **real interview-level array brain teasers**.

I’ll give:

1. 🔥 Advanced array output questions
2. 🧠 Tricky reduce problems

Read carefully before checking answer.

---

# 🔥 PART 1 — Advanced Array Output Questions

---

## 1️⃣ Question

```js
console.log([1,2,3] + [4,5,6]);
```

### ✅ Output:

```
"1,2,34,5,6"
```

### 💡 Why?

Arrays convert to string → `"1,2,3"`
Then string concatenation happens.

---

## 2️⃣ Question

```js
console.log([] + []);
```

### ✅ Output:

```
""
```

Both arrays convert to empty string.

---

## 3️⃣ Question

```js
console.log([] + {});
```

### ✅ Output:

```
"[object Object]"
```

Because:

```
[] → ""
{} → "[object Object]"
```

---

## 4️⃣ Question

```js
console.log({} + []);
```

### ✅ Output (in browser):

```
0
```

Why?

* `{}` treated as empty block
* `+[]` → `+""` → 0

⚠️ In Node.js it may behave differently.

---

## 5️⃣ Question

```js
console.log([1,2,3].map(parseInt));
```

### ✅ Output:

```
[1, NaN, NaN]
```

### 💡 Why?

`map()` passes 3 args:

```
parseInt(value, index)
```

So actually:

```
parseInt(1, 0) → 1
parseInt(2, 1) → NaN
parseInt(3, 2) → NaN
```

🔥 Classic interview trap.

---

## 6️⃣ Question

```js
console.log([10, 20, 30].reduce((a,b) => a + b));
```

### ✅ Output:

```
60
```

But internally:

```
a = 10
b = 20 → 30
a = 30
b = 30 → 60
```

If no initial value → first element becomes accumulator.

---

## 7️⃣ Question

```js
const arr = [1,2,3];
arr.length = 0;
console.log(arr);
```

### ✅ Output:

```
[]
```

Because changing length truncates array.

---

## 8️⃣ Question

```js
console.log([..."hello"]);
```

### ✅ Output:

```
["h","e","l","l","o"]
```

Spread works on iterable.

---

## 9️⃣ Question

```js
console.log(typeof NaN);
```

### ✅ Output:

```
"number"
```

Classic JS weirdness.

---

## 🔟 Question

```js
console.log([1,2,3] == "1,2,3");
```

### ✅ Output:

```
true
```

Because array converts to string during comparison.

---

# 🧠 PART 2 — Tricky Reduce Problems

Now real skill test.

---

## 1️⃣ Count Occurrences

Input:

```js
const arr = ["a","b","a","c","b","a"];
```

### ✅ Solution:

```js
const result = arr.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});
```

### Output:

```
{ a:3, b:2, c:1 }
```

---

## 2️⃣ Flatten Array

```js
const arr = [[1,2],[3,4],[5]];
```

### ✅ Solution:

```js
const flat = arr.reduce((acc, curr) => {
  return acc.concat(curr);
}, []);
```

Output:

```
[1,2,3,4,5]
```

---

## 3️⃣ Group By Property

```js
const users = [
  {name:"A", age:20},
  {name:"B", age:20},
  {name:"C", age:25}
];
```

### ✅ Solution:

```js
const grouped = users.reduce((acc, user) => {
  if(!acc[user.age]) {
    acc[user.age] = [];
  }
  acc[user.age].push(user);
  return acc;
}, {});
```

Output:

```
{
  20: [{A},{B}],
  25: [{C}]
}
```

---

## 4️⃣ Remove Duplicates

```js
const arr = [1,2,3,2,1,4];
```

### ✅ Solution:

```js
const unique = arr.reduce((acc, curr) => {
  if(!acc.includes(curr)) {
    acc.push(curr);
  }
  return acc;
}, []);
```

Output:

```
[1,2,3,4]
```

---

## 5️⃣ Find Max Using Reduce

```js
const arr = [5,8,2,10,3];
```

```js
const max = arr.reduce((acc, curr) => {
  return curr > acc ? curr : acc;
});
```

Output:

```
10
```

---

## 6️⃣ Convert Array to Object

```js
const arr = ["a","b","c"];
```

```js
const obj = arr.reduce((acc, curr, index) => {
  acc[index] = curr;
  return acc;
}, {});
```

Output:

```
{0:"a",1:"b",2:"c"}
```

---

# 💎 Pro Interview Insight

Most developers only know:

* reduce for sum
* reduce for count

But product companies ask:

* flatten deeply nested array
* build tree structure
* implement map/filter using reduce
* polyfill reduce

---

# 🔥 Bonus: Can reduce replace map?

Yes.

```js
const arr = [1,2,3];

const mapped = arr.reduce((acc, curr) => {
  acc.push(curr * 2);
  return acc;
}, []);
```

Same as map.

---



