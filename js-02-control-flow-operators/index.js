const prompt = require("prompt-sync")();//enables synchronous user input from the terminal

console.log("----- MINI NUMBER ANALYZER -----");

const input = prompt("Enter a number: ");
const number = Number(input);

// Validate input
if (isNaN(number)) {
  console.log("❌ Invalid input. Please enter a number.");
  process.exit();
}

/* -------------------------
   EVEN OR ODD (Ternary)
--------------------------*/
const evenOrOdd = number % 2 === 0 ? "Even" : "Odd";
console.log("Even or Odd:", evenOrOdd);


/* -------------------------
   POSITIVE / NEGATIVE / ZERO (if-else)
--------------------------*/
if (number > 0) {
  console.log("Positive number");
} else if (number < 0) {
  console.log("Negative number");
} else {
  console.log("Zero");
}


/* -------------------------
   PRIME OR NOT (if + loop)
--------------------------*/
function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
}

console.log("Prime:", isPrime(number) ? "Yes" : "No");


/* -------------------------
   DIVISIBLE BY 3 & 5 (switch + logical)
--------------------------*/
switch (true) {
  case (number % 3 === 0 && number % 5 === 0):
    console.log("Divisible by both 3 and 5");
    break;

  case (number % 3 === 0):
    console.log("Divisible by 3");
    break;

  case (number % 5 === 0):
    console.log("Divisible by 5");
    break;

  default:
    console.log("Not divisible by 3 or 5");
}
