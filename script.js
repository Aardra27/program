// 1. Print numbers from 1 to 10
let numbers = "";
for (let i = 1; i <= 10; i++) {
  numbers += i + " ";
}
document.getElementById("q1").innerText = numbers;

// 2. Sum of an array
function sumArray(arr) {
  return arr.reduce((acc, val) => acc + val, 0);
}
document.getElementById("q2").innerText = "Sum: " + sumArray([1, 2, 3, 4, 5]);

// 3. Largest number in an array
function findLargest(arr) {
  return Math.max(...arr);
}
document.getElementById("q3").innerText = "Largest: " + findLargest([3, 56, 7, 89, 32]);

// 4. Check if a number is Even or Odd
function isEvenOrOdd(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}
document.getElementById("q4").innerText = "7 is " + isEvenOrOdd(7);

// 5. Reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}
document.getElementById("q5").innerText = "Reversed: " + reverseString("hello");

// 6. Merge two arrays using spread operator
const a = [1, 2];
const b = [3, 4];
const merged = [...a, ...b];
document.getElementById("q6").innerText = "Merged Array: [" + merged + "]";

// 7. Filter even numbers
const numArray = [1, 2, 3, 4, 5, 6];
const evenNumbers = numArray.filter(n => n % 2 === 0);
document.getElementById("q7").innerText = "Even Numbers: [" + evenNumbers + "]";

// 8. Template literals
const name = "Alice";
const msg = `Hello ${name}, welcome!`;
document.getElementById("q8").innerText = msg;

// 9. Arrow function
const greet = (name) => `Hello, ${name}`;
document.getElementById("q9").innerText = greet("John");
