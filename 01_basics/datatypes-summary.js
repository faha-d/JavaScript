// Stack is used for static memory allocation, storing primitive data types, and managing function calls.

// Heap is used for dynamic memory allocation, storing non-primitive data types like objects and arrays.

const score = 100; // Stored in Stack
const anotherScore = 10.3; // Stored in Stack

const isLoggedIn = false; // Stored in Stack
const outsideTemp = null; // Stored in Stack

let userName; // Stored in Stack

const id = Symbol("123"); // Stored in Stack
const anotherId = Symbol("123"); // Stored in Stack
console.log(id === anotherId); // Output: false

const bigNumber = 6565656565656565445n; // Stored in Stack

// Non-Primitive DataTypes / Reference Type
const heroes = ["ironman", "spiderman", "blackpanther"]; // Stored in Heap

const data = {
  // Stored in Heap
  name: "Fahad",
  age: 19,
  state: "Karachi",
};

const myFunc = () => {
  // Stored in Heap
  console.log("This is my function");
};
myFunc();

console.log(typeof myFunc); // Output: function

// Stack memory demonstration
let channelName = "codesfahad"; // Stored in Stack
let anotherName = channelName; // Stored in Stack

anotherName = "fahadcodes"; // Stored in Stack

console.log(anotherName); // Output: fahadcodes
console.log(channelName); // Output: codesfahad

// Heap memory demonstration
let userInfo = {
  // Stored in Heap
  name: "Fehdi",
  email: "fahadcodes@google.com",
};

let anotherUser = userInfo; // Both objects share the same reference
anotherUser.email = "codesfahad@google.com"; // Modifying shared object

console.log(userInfo); // Output: { name: 'Fehdi', email: 'codesfahad@google.com' }
console.log(anotherUser); // Output: { name: 'Fehdi', email: 'codesfahad@google.com' }
