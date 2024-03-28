const num = 400;
console.log(num); // Output: 400

const balanceScore = new Number(100);
console.log(balanceScore); // Output: [Number: 100]

console.log(balanceScore.toString()); // Output: '100'

const totalAmount = 1598.36985645;
console.log(totalAmount.toFixed(2)); // Output: '1598.37'
// toFixed() is used to format the number with a specific number of digits after the decimal point.

const newAmount = 123.569;
console.log(newAmount.toPrecision(4)); // Output: '123.6'
// toPrecision() is used to format the number with a specified total number of significant digits.

const stringNum = 100000;
console.log(stringNum.toLocaleString("en-PK")); // Output: '100,000'
