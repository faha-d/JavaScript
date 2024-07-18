// Create a new Date object with the current date and time
let currentDate = new Date();
console.log(currentDate.toString());
console.log(currentDate.toLocaleDateString()); 
console.log(typeof currentDate);

// Create a new Date object for a specific birthdate
let myBirthDate = new Date(2002, 9, 24, 5, 0); // Note: month is 0-indexed, so 9 means October
console.log(`BirthDate: ${myBirthDate.toLocaleString()}`);

// Get the current month (0-indexed)
let getMonth = new Date().getMonth();
console.log(`Month: ${(getMonth + 1).toLocaleString()}`); // Add 1 to month to convert from 0-indexed to 1-indexed

// Get the current day of the week (0 for Sunday, 1 for Monday, etc.)
let getDay = new Date().getDay();
console.log(`WeekDay: ${getDay.toLocaleString()}`);

// Get the current year
let getYear = new Date().getFullYear();
console.log(`Year: ${getYear.toLocaleString()}`);

// Get the current time in milliseconds
let getTime = new Date().getTime();
console.log(`Time in MiliSecond: ${getTime.toLocaleString()}`);
console.log(`Time in Second: ${(getTime / 1000).toFixed(2)}`); // Convert milliseconds to seconds and output it

// Get the current timestamp in milliseconds
let getTimeStamp = Date.now();
console.log(getTimeStamp);

// Create a custom date format with the short weekday and two-digit day for the locale "en-PK"
const customDateFormat = new Date().toLocaleString("en-PK", {
  weekday: "short",
  day: "2-digit",
});
console.log(customDateFormat);