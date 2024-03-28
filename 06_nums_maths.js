const num = 400;
console.log(num); // Output: 400

const balanceScore = new Number(100);
console.log(balanceScore); // Output: [Number: 100]

console.log(balanceScore.toString()); // Output: '100'

const totalAmount = 1598.36985645;
console.log(totalAmount.toFixed(2)); // Output: '1598.37'

const newAmount = 123.569;
console.log(newAmount.toPrecision(4)); // Output: '123.6'

const stringNum = 100000;
console.log(stringNum.toLocaleString("en-PK")); // Output: '100,000'

console.log(Math.abs(-10)); // Output: 10
console.log(Math.round(50.69)); // Output: 51
console.log(Math.ceil(5.1)); // Output: 6
console.log(Math.floor(5.9)); // Output: 5
console.log(Math.min(3, 8, 7, 5)); // Output: 3
console.log(Math.max(3, 8, 7, 5)); // Output: 8

console.log(Math.random() * 10 + 1); // Output: Random number between 1 and 10
console.log(Math.round(Math.random() * 10 + 1)); // Output: Random whole number between 1 and 10

let min = 20;
let max = 30;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// Output: Random whole number between 20 and 30
