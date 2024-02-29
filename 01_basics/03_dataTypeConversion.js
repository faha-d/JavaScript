// Example of converting different data types into different data types.

// Convert a string to a number
let score = "12";
let convertedScore = Number(score);
console.log(typeof convertedScore); // Output: "number"

// Convert a number to a string
let someNumber = 69;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

// Convert a string with non-numeric characters to a number
let char = "fahad123";
let convertedChar = Number(char);
console.log(typeof convertedChar); // Output: "number"
console.log(convertedChar); // Output: NaN

// Convert null to a number
let nullValue = null;
let convertedNullValue = Number(nullValue);
console.log(typeof convertedNullValue); // Output: "number"
console.log(convertedNullValue); // Output: 0 or NaN

// Convert a boolean to a number
let booleanValue = true;
let convertedBoolValue = Number(booleanValue);
console.log(convertedBoolValue); // Output: 1
console.log(typeof convertedBoolValue); // Output: "number"

// Convert undefined to a number
let notDefinedValue = undefined;
let convertedNotDefinedValue = Number(notDefinedValue);
console.log(convertedNotDefinedValue); // Output: NaN
console.log(typeof convertedNotDefinedValue); // Output: "number"

// Convert number to Boolean
let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); // Output: true
console.log(typeof booleanIsLoggedIn); //Output:  "boolean"

// Convert String to Boolean
let stringLoggedIn = "";
let convertedStringLoggedIn = Boolean(stringLoggedIn);
console.log(convertedStringLoggedIn); // Output: false
console.log(typeof convertedStringLoggedIn); // Output "boolean"

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0
// 0 => false; 1 => true
// "" => false; "fahad" => true
