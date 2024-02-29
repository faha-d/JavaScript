// Example of converting different data types

// Convert string to number
const score = "12";
const convertedScore = Number(score);
console.log(typeof convertedScore); // Output: "number"

// Convert number to string
const someNumber = 69;
const stringNumber = String(someNumber);
console.log(stringNumber, typeof stringNumber); // Output: "string"

// Convert string with non-numeric characters to number
const char = "fahad123";
const convertedChar = Number(char);
console.log(typeof convertedChar, convertedChar); // Output: "NaN"

// Convert null to number
const nullValue = null;
const convertedNullValue = Number(nullValue);
console.log(typeof convertedNullValue, convertedNullValue || 0); // Output: "NaN or 0"

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