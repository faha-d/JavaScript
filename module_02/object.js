/* 
Objects can be declared using Constructors or Literals.

Singleton Constructor: Only one instance in constructors.
*/

// const myObj = Object.create(personPrototype); // Constructor Method

const mySym = Symbol("caps1");

// Object Literal
const myInfo = {
  name: "Fahad",
  "Full Name": "Muhammad Fahad",
  age: 20,
  location: "Pakistan",
  email: "codesfahad@google.com",
  isLoggedIn: false,
  lastActiveDays: ["Saturday", "Sunday"],
  [mySym]: "mycaps1",
  greetings: function () {
    console.log(`Hello ${this["Full Name"]}, hope you're doing well.`);
  },
};

// Accessing properties using dot notation and bracket notation
console.log(myInfo.email);
console.log(myInfo["Full Name"]);
console.log(myInfo[mySym]);

// Modifying a property
myInfo.age = 19;
console.log(myInfo.age);

myInfo.greetings(); // Call the greetings method

// Freeze the object to prevent further modifications
Object.freeze(myInfo);
