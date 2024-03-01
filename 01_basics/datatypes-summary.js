// Primitive DataTypes

// 7 Types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const anotherScore = 10.3;

const isLoggedIn = false;
const outsideTemp = null;

let userName;

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId); // Output: false

const bigNumber = 6565656565656565445n;

// Non-Primitive DataTypes / Reference Type

// Array, Objects, Functions

const heroes = ["ironman", "spiderman", "blackpanther"];

const data = {
  name: "Fahad",
  age: 19,
  state: "Karachi",
};

const myFunc = () => {
  console.log("This is my function");
};
myFunc();

console.log(typeof myFunc);

// Memory In JS

// Stack(Primitive Datatypes), Heap(Non-Primitive DataTypes)

let channelName = "codesfahad";
let anotherName = channelName;

anotherName = "fahadcodes";

console.log(anotherName);
console.log(channelName);

let userInfo = {
  name: "Fehdi",
  email: "fahadcodes@google.com",
};

let anotherUser = userInfo; // Both objects share the same reference
anotherUser.email = "codesfahad@google.com";
console.log(userInfo);
console.log(anotherUser);
