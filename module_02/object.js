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

// const snapChatUser = new Object() // Singleton Object

const snapChatUser = {
  id: "fehdi_here",
  name: "Fehdi",
  isLoggedIn: false,
};
console.log(snapChatUser);

const regularUser = {
  email: "abc@gmail.com",
  fullName: {
    firstName: "Muhammad",
    lastName: "Fahad",
    userName: "fehdi_here",
  },
};

console.log(regularUser.fullName); // Will get whole object
console.log(regularUser.fullName?.firstName); // Will get FirstName inside the fullName object.

const obj1 = { 1: "A", 2: "B", 3: "C" };
const obj2 = { 4: "D", 5: "E", 6: "F" };
// const mergedObj = Object.assign({}, obj1, obj2); // empty object is target and remaining objects are source.
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj);

const users = [
  {
    id: 1,
    email: "fahad@google.com",
    userName: "Fehdi",
  },
  {
    id: 2,
    email: "talha@google.com",
    userName: "Talha",
  },
  {
    id: 3,
    email: "huzzi@google.com",
    userName: "Huzzi",
  },
];

users.map((users) => {
  console.log(users);
});

console.log(Object.keys(snapChatUser));
console.log(Object.values(snapChatUser));
console.log(Object.entries(snapChatUser)); // Giving in the array form.
console.log(snapChatUser.hasOwnProperty("isLoggedIn"));

// Object Destructuring
const course = {
  courseName: "DSA",
  courseFee: 999,
  courseInstructor: "Sir Fahad",
};
// console.log(course.courseFee)

const {courseFee, courseInstructor: instructor, courseName} = course;
console.log(instructor);





