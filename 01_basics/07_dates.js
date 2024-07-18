let currentDate = new Date();
console.log(currentDate.toString());
console.log(currentDate.toLocaleDateString());
console.log(typeof currentDate);

let myBirthDate = new Date(2002, 9, 24, 5, 0);
console.log(`BirthDate: ${myBirthDate.toLocaleString()}`);

let getMonth = new Date().getMonth();
console.log(`Month: ${getMonth.toLocaleString() + 1}`);

let getDay = new Date().getDay();
console.log(`WeekDay: ${getDay.toLocaleString()}`);

let getYear = new Date().getFullYear();
console.log(`Year: ${getYear.toLocaleString()}`);

let getTime = new Date().getTime();
console.log(`Time in MiliSecond: ${getTime.toLocaleString()}`); // Getting time in milisec to convert it into sec. Need to divide by 1000
console.log(`Time in Second: ${Math.floor(getTime / 1000).toFixed(2)}`);

let getTimeStamp = Date.now();
console.log(getTimeStamp);

const customDateFormat = new Date().toLocaleString("en-PK", {
  weekday: "short",
  day: "2-digit",
});
console.log(customDateFormat);
