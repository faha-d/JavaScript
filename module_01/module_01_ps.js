// Practice Questions of Module 01

// Variables:

// Create a variable x and assign it the value 10. Create another variable y and assign it the value 20. Swap the values of x and y.
let x = 10;
let y = 20;
let temp = x;
x = y;
y = temp;
console.log(`x: ${x} y: ${y}`);

// Declare a variable name and assign it your name. Then, change the value of name to your favorite superhero's name.
let myName = "Muhammad Fahad";
myName = "SpiderMan";
console.log(`My Name is: ${myName}`);

// Data Types

// Convert the string "123" to a number and add 10 to it. Print the result.
let num = "123";
let convertedNum = Number(num) + 10;
console.log(convertedNum);

// Convert the number 456 to a string and concatenate it with the string " is a number". Print the result.
let digit = 456;
let convertedDigit = String(digit);
console.log(`${convertedDigit} is a number`);

// Convert the boolean true to a string and concatenate it with " is a boolean". Print the result.
let bool = true;
bool = String(bool);
console.log(`${bool} is a boolean`);

// Create a variable and assign it a number. Change its value to a string and then to a boolean.
let a = 1;
a = String(a);
console.log(typeof a);
a = Boolean(a);
console.log(typeof a);

// Create an object with properties firstName, lastName, and age. Access and print each property.
const myDetails = {
  firstName: "Muhammad",
  lastName: "Fahad",
  age: 20,
};

for (let key in myDetails) {
  console.log(`${key}: ${myDetails[key]}`);
}

// Comparison Operators

// Write a function that takes two numbers as arguments and returns true if the first number is greater than the second, otherwise false.
const isGreaterThan = (num1, num2) => {
  return num1 > num2;
};
console.log(isGreaterThan(6, 5));

// Compare the string "10" with the number 10 using both == and === operators. Print the results.
let str = "10";
let number = 10;
console.log(str === number);
console.log(str == number);

// Strings

// Create a string variable and assign it a sentence. Write code to count the number of words in the sentence.
let sentence = "Their concert was a big hit.";
let wordCount = sentence.length;
console.log(`The total number of words in this sentence are ${wordCount}`);

// Extract the first 5 characters from a string and print them.
let anotherSentence = "John took the deep dive down the rabbit hole.";
let characters = anotherSentence.slice(0, 5);
console.log(`The first 5 chracters in the above sentence are ${characters}`);

// Numbers and Math

// Write a function that takes a number as input and returns its square root.
const squareRoot = (num) => {
  return num * num;
};
console.log(squareRoot(5));

// Generate a random number between 1 and 100 and print it.
const randomNum = Math.floor(Math.random() * 100 + 1);
console.log(randomNum);

// Dates

// Create a function that takes a date as input and returns the day of the week for that date.
const weekDay = (date) => {
    return date.toLocaleDateString('en-PK', {weekday: 'long'})
}
console.log(weekDay(new Date()));
