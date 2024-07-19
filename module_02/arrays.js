// Array is a data type that can store multiple collections of data under a single variable.
const heroNames = ["Captain America", "IronMan", "SpiderMan", "Black Widow"];

// Loop through heroNames array using for...in
for (let key in heroNames) {
  console.log("Hero Names:", heroNames[key]);
}

const numbers = new Array(1, 2, 3, 4, 5, 6);

// Loop through numbers array using a for loop
for (let i = 0; i < numbers.length; i++) {
  console.log("Numbers:", numbers[i]);
}

// Array manipulation examples
// heroNames.pop(); // Removes the last element from the array
// heroNames.push("Thor"); // Adds a new element at the end of the array
// heroNames.unshift("Black Panther"); // Adds a new element at the beginning of the array
// heroNames.shift(); // Removes the first element from the array
console.log(heroNames);

// Check if "IronMan" is in the heroNames array
console.log(heroNames.includes("IronMan"));

// Get the index of "SpiderMan" in the heroNames array
console.log(heroNames.indexOf("SpiderMan"));

// Join all elements of heroNames into a single string, separated by commas
const newArr = heroNames.join(",");
console.log(newArr);

// Create a shallow copy of heroNames array from index 0 to 3 (exclusive)
const sliceArr = heroNames.slice(0, 3);
console.log(sliceArr);

// Remove 2 elements from heroNames starting at index 0 (modifies original array)
const spliceArr = heroNames.splice(0, 2);
console.log(spliceArr);
console.log(heroNames);

const marvelHeros = ["Doctor Strange", "Vision", "Loki"];
const dcHeros = ["SuperMan", "BatMan", "Flash"];

// Combine marvelHeros and dcHeros arrays using concat method
const allHeros = marvelHeros.concat(dcHeros);
console.log(allHeros);

// Combine marvelHeros and dcHeros arrays using spread operator
const allNewHeros = [...marvelHeros, ...dcHeros];
console.log(allNewHeros);

const anotherArr = [1, 2, 3, [4, 5, 6], 7, 8, [9, 10]];
// Flatten the array by one level
const numArr = anotherArr.flat(1);
console.log(numArr);

let str = "Hey Doc";
// Create an array from a string
console.log(Array.from(str));
// Check if str is an array
console.log(Array.isArray(str));
// Create an array from an object (interesting example)
console.log(Array.from({ name: "John" }));

let score1 = 100;
let score2 = 200;
let score3 = 300;
// Create an array from individual values
console.log(Array.of(score1, score2, score3));

// Map over marvelHeros array and log hero name with its index
marvelHeros.map((hero, position) => {
  console.log("Hero Name:", hero, "Index:", position);
});