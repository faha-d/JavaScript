// Functions can be defined as: Multiple lines of codes wrapped in a packaged which can be run on a single call of function.

function myName() {
  console.log("Fahad");
}

// myName();

// function addTwoNumbers(number1, number2) {
//   if (typeof number1 !== 'number' || typeof number2 !== 'number') {
//     console.log("Please enter values as numbers");
//   } else {
//     console.log(number1 + number2);
//   }
// }

// addTwoNumbers(5,8)

// function addTwoNumbers(num1, num2) {
//   if (typeof num1 !== "number" || typeof num2 !== "number") {
//     console.error("Please enter values as numbers");
//     return null;
//   } else {
//     return num1 + num2;
//   }
// }

// console.log(addTwoNumbers(5, "5"));

function loginUserMessage(username) {
  if (typeof username !== "string" || username === "") {
    console.error("Please provide valid username");
    return null;
  } else {
    return console.log(`${username}, just logged in`);
  }
}

loginUserMessage();
