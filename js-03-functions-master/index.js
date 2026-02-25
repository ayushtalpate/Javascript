console.log("----- FUNCTION DECLARATION -----");

function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // 5


console.log("----- FUNCTION EXPRESSION -----");

const multiply = function(a, b) {
  return a * b;
};

console.log(multiply(3, 4)); // 12

console.log("----- ARROW FUNCTION -----");

const subtract = (a, b) => a - b;

console.log(subtract(10, 4)); // 6

console.log("----- IIFE -----");

(function () {
  console.log("IIFE executed immediately!");
})();


console.log("------------Utility Functions---------");
//sum
function sum(a, b) {
  return a + b;
}

//factorial
function factorial(n) {
  if (n < 0) return "Invalid input";
  if (n === 0 || n === 1) return 1;

  return n * factorial(n - 1);
}

console.log("Factorial:", factorial(5)); // 120


//fibonnacci
function fibonacci(n) {
  if (n <= 1) return n;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("Fibonacci:", fibonacci(6)); // 8

function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

console.log("Palindrome:", isPalindrome("madam"));


console.log("----- CALLBACK FUNCTION -----");

function greet(name, callback) {
  console.log("Hello", name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Ayush", sayBye);

console.log("----- CLOSURE -----");

function counter() {
  let count = 0;

  return function () {
    count++;
    console.log("Count:", count);
  };
}

const increment = counter();

increment(); // 1
increment(); // 2
increment(); // 3



console.log("--------debounce----------")
function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

const search = debounce(() => {
  console.log("Searching API...");
}, 1000);

search();
search();
search();


console.log("-----throttle-----")
function throttle(fn, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = new Date().getTime();

    if (now - lastCall >= delay) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}
