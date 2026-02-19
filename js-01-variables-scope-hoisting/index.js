console.log("----- VAR vs LET vs CONST -----");

// var - function scoped
var a = 10;
console.log("var a:", a);

if (true) {
  var a = 20;   // SAME variable
}
console.log("var after block:", a); // 20 ❗


// let - block scoped
let b = 30;
if (true) {
  let b = 40;   // DIFFERENT variable
  console.log("let inside block:", b);
}
console.log("let outside block:", b); // 30


// const - block scoped & cannot reassign
const c = 50;
console.log("const c:", c);

// c = 60 ❌ Error

console.log("\n----- HOISTING -----");

// var is hoisted (initialized as undefined)
console.log(x); // undefined
var x = 100;

// let & const are hoisted but in TDZ
// console.log(y); ❌ ReferenceError
let y = 200;

console.log("\n----- TEMPORAL DEAD ZONE -----");

function tdzExample() {
  // console.log(z); ❌ TDZ
  let z = 500;
  console.log("z after declaration:", z);
}

tdzExample();


console.log("\n----- GLOBAL vs BLOCK SCOPE -----");

let globalVar = "I am global";

function checkScope() {
  let functionVar = "I am function scoped";
  console.log(globalVar);
  console.log(functionVar);
}

checkScope();

// console.log(functionVar); ❌ Error


console.log("\n----- CLOSURE EXAMPLE -----");

function outer() {
  let counter = 0;

  function inner() {
    counter++;
    console.log("Counter:", counter);
  }

  return inner;
}

const myFunction = outer();

myFunction(); // 1
myFunction(); // 2
myFunction(); // 3
