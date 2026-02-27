1. What is event loop?
2. Difference between microtask and macrotask?
3. How promises work internally?
4. What is promise chaining?
5. What happens if we don’t use await?
6. Can async function return value?
7. How to handle errors in async?
8. Why JavaScript is single-threaded?

Perfect 👍 These are **very common JavaScript interview questions** (especially for frontend & Node.js roles). I’ll give you **clear, short, interview-ready answers** with examples.

---

## 1️⃣ What is Event Loop?

JavaScript is **single-threaded**, so it can execute only one task at a time.

The **Event Loop** is a mechanism that:

* Executes code from the **Call Stack**
* Checks the **Callback Queue (Task Queue)**
* Pushes async callbacks into the stack when it becomes empty

### Flow:

1. Execute synchronous code.
2. If async task (setTimeout, promise, etc.) → send to Web APIs.
3. After completion → callback goes to queue.
4. Event loop moves callback to stack when stack is empty.

👉 It allows JavaScript to be **non-blocking** even though it is single-threaded.

---

## 2️⃣ Difference Between Microtask and Macrotask

| Feature   | Microtask                        | Macrotask                                   |
| --------- | -------------------------------- | ------------------------------------------- |
| Examples  | `Promise.then`, `queueMicrotask` | `setTimeout`, `setInterval`, `setImmediate` |
| Priority  | Higher                           | Lower                                       |
| Execution | Runs before next macrotask       | Runs after microtasks finish                |

### Example:

```js
setTimeout(() => console.log("timeout"), 0);

Promise.resolve().then(() => console.log("promise"));

console.log("sync");
```

### Output:

```
sync
promise
timeout
```

Because:

* Promise → Microtask (higher priority)
* setTimeout → Macrotask

---

## 3️⃣ How Promises Work Internally?

A Promise has **3 states**:

* `pending`
* `fulfilled`
* `rejected`

Internally:

1. Promise constructor runs immediately.
2. If `resolve()` is called → state becomes fulfilled.
3. If `reject()` is called → state becomes rejected.
4. `.then()` and `.catch()` callbacks are stored.
5. When promise settles → callbacks are pushed to **Microtask queue**.

Example:

```js
const p = new Promise((resolve, reject) => {
    resolve("Done");
});
```

👉 Promises use the **microtask queue** internally.

---

## 4️⃣ What is Promise Chaining?

When we use multiple `.then()` one after another, passing the result to the next.

```js
fetchData()
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err));
```

Each `.then()`:

* Returns a new promise
* Passes result to next `.then()`

👉 Used to avoid callback hell.

---

## 5️⃣ What Happens If We Don’t Use `await`?

If we don’t use `await`, the function returns a **Promise immediately**.

Example:

```js
async function test() {
   return 10;
}

console.log(test());
```

Output:

```
Promise { 10 }
```

If inside async function:

```js
async function test() {
   let data = fetch(url); // no await
   console.log(data);
}
```

👉 `data` will be a Promise, not actual response.

---

## 6️⃣ Can Async Function Return Value?

✅ Yes.

But internally it always returns a **Promise**.

```js
async function test() {
   return 5;
}
```

Equivalent to:

```js
function test() {
   return Promise.resolve(5);
}
```

So:

```js
test().then(res => console.log(res));
```

---

## 7️⃣ How to Handle Errors in Async?

### ✅ Method 1: try-catch (Best way)

```js
async function test() {
   try {
      let data = await fetch(url);
   } catch (err) {
      console.log(err);
   }
}
```

### ✅ Method 2: .catch()

```js
fetch(url)
   .then(res => res.json())
   .catch(err => console.log(err));
```

👉 In interviews say:

> "In async/await, we use try-catch for proper error handling."

---

## 8️⃣ Why JavaScript is Single-Threaded?

JavaScript was designed to:

* Run in browser
* Avoid race conditions
* Keep implementation simple

Single-threaded means:

* One call stack
* One main thread
* Executes one task at a time

But because of:

* Event Loop
* Web APIs
* Callback Queue

It behaves like asynchronous.

👉 This makes JS non-blocking and efficient for UI.

---

# 🔥 Bonus Interview Tip

If interviewer asks:

**“Explain event loop with microtask priority”**

Say:

> JavaScript executes synchronous code first, then processes all microtasks (like promises), and then executes one macrotask (like setTimeout), and this cycle continues via the event loop.

---

