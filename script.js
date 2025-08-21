// 1. Loop to print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 2. Function to return sum of an array
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}
console.log(sumArray([1, 2, 3, 4, 5]));

// 3. Function to find the largest number in an array
function findLargest(arr) {
    return Math.max(...arr);
}
console.log(findLargest([10, 5, 20, 8]));

// 4. Function to check if a number is even or odd
function checkEvenOdd(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}
console.log(checkEvenOdd(7));

// 5. Function to reverse a string
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("hello"));

// 6. Merge two arrays using spread operator
const a = [1, 2];
const b = [3, 4];
const merged = [...a, ...b];
console.log(merged);

// 7. Use ES6 filter to return even numbers
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

// 8. Rewrite using template literals
const name = "Alice";
const msg = `Hello ${name}, welcome!`;
console.log(msg);

// 9. Rewrite using arrow function
const greet = (name) => `Hello, ${name}`;
console.log(greet("Alice"));
