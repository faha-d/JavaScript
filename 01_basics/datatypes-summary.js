// Primitive DataTypes

// 7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const anotherScore = 10.3;

const isLoggedIn = false;
const outsideTemp = null;

let userName;

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId); // false

const bigNumber = 6565656565656565445n;

// Non-Primitive DataTypes / Reference Type

// Array, Objects, Functions

const heros = ["ironman", "spiderman", "blackpanther"];

const data = {
  name: "Fahad",
  age: 19,
  State: "Karachi",
};

const myfunc = () => {
  console.log("This is my function");
};
myfunc();

console.log(typeof myfunc);