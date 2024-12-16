// 1. Variables 

// Easy 

// Declare a variable name and assign your name to it. Log it to the console.
const myName = "Muhammad Fahad";
console.log(myName);

// Create a variable age and assign a number to it. Change its value and log both the old and new values.
let age = 20;
console.log(`Old Value: ${age}`);
age = 21;
console.log(`New Value: ${age}`);

// Use let to declare a variable isStudent and assign it a boolean value. Log it to the console.
let isStudent = true;
console.log(isStudent);

// Create a constant PI with the value of 3.14. Try changing its value (what happens?).
const pi = 3.142;
console.log(pi);
// pi = 3.145 // It will not work as const value cant be changed.

// Declare three variables in one line: x, y, and z with values 5, 10, and 15 respectively. Log their sum.
let x = 5, y = 10, z = 15;
let sum = x + y + z
console.log(`Sum:${sum}`);

// Intermediate

// Create a variable greeting and assign a string with your name in it using template literals.
const greeting = `Hello Muhammad Fahad`;

// Write a program that swaps the values of two variables a and b.
let a = 10;
let b = 20;
let temp = a
a = b
console.log(a , temp);

// Use variables to calculate the area of a rectangle with length l = 10 and breadth b = 5.
let length = 10;
let breadth = 5;
let area = length * breadth
console.log(area);

// Write a program that converts temperature from Celsius to Fahrenheit using variables. Formula: F = (C * 9/5) + 32.
let celsiusTemp = 12;
let fahrenheitTemp = (celsiusTemp * 9/5) + 32
console.log(fahrenheitTemp);
 
// 2. Type Conversions

// Easy

// Convert the string "123" into a number and add 10 to it.
let num = "123";
let newNum = Number(num) + 10;
console.log(newNum);

// Write a program to convert a boolean true to a string.
let bool = true;
let str = String(bool)
console.log(typeof str);

// Convert the number 42.85 to an integer.

let no = 42.85;
let int = Math.floor(no)
console.log(int);

// Take a string "10 apples" and extract the numeric part.
let words = "10 apples"
let extract = words.slice(0,2)
console.log(extract);
