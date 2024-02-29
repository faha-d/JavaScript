// Example of converting different data types

// Convert string to number
const score = "12";
const convertedScore = Number(score);
console.log(typeof convertedScore); // Output: "number"

// Convert number to string
const someNumber = 69;
const stringNumber = String(someNumber);
console.log(stringNumber, typeof stringNumber); // Output: "69 and string"

// Convert string with non-numeric characters to number
const char = "fahad123";
const convertedChar = Number(char);
console.log(typeof convertedChar, convertedChar); // Output: "number" and "NaN"

// Convert null to number
const nullValue = null;
const convertedNullValue = Number(nullValue);
console.log(typeof convertedNullValue, convertedNullValue || 0); // Output: "number and 0 or NaN"

// Convert boolean to number
const booleanValue = true;
const convertedBoolValue = Number(booleanValue);
console.log(convertedBoolValue, typeof convertedBoolValue); // Output: "1 and number"

// Convert undefined to number
const notDefinedValue = undefined;
const convertedNotDefinedValue = Number(notDefinedValue);
console.log(convertedNotDefinedValue, typeof convertedNotDefinedValue); // Output: "NaN and number"

// Convert number to boolean
const isLoggedIn = 1;
const booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn, typeof booleanIsLoggedIn); // Output: "true and boolean"

// Convert string to boolean
const stringLoggedIn = "";
const convertedStringLoggedIn = Boolean(stringLoggedIn);
console.log(convertedStringLoggedIn, typeof convertedStringLoggedIn); // Output: "false and boolean

// DataTypes Operations

// Arithmetic operations with numbers
let value = 3;
let negValue = -value;
console.log(negValue); // Output: -3

// String concatenation
let str1 = "Hello";
let str2 = " Fahad";
let str3 = str1 + str2;
console.log(str3); // Output: "Hello Fahad"

// Concatenating strings and numbers
console.log("1" + 2); // Output: "12"
console.log(1 + "2"); // Output: "12"
console.log("1" + 2 + 2); // Output: "122"
console.log(1 + 2 + "2"); // Output: "32"

// Complex arithmetic expression
console.log(((3 + 4) * 5) % 3); // Output: 2 not recommended to do such types of expressions.

// Unary plus operation on boolean and empty string
console.log(+true); // Output: 1
console.log(+ ""); // Output: 0

// Incrementing a variable
let gameCounter = 100;
++gameCounter;
console.log(gameCounter); // Output: 101
