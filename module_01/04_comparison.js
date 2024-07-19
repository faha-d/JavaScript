// Comparison Operators

// console.log(2 > 1); // true
// console.log(2 >= 1); // true
// console.log(2 < 1); // false
// console.log(2 == 1); // false
// console.log(2 != 1); // true

// console.log("2" > 1); // true (string "2" is converted to number 2)
// console.log("02" > 1); // true (string "02" is converted to number 2)

console.log(null > 0); // false (null is treated as 0 for comparison)
console.log(null == 0); // false (null is equal only to undefined using loose equality)
console.log(null >= 0); // true (null is treated as 0 for greater than or equal comparison)

console.log(undefined > 0); // false (undefined is converted to NaN during comparison)

// Strict equality check
console.log("2" === 2); // false (strict equality, different types)