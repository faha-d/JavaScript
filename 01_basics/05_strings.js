let userName = "Fahad";
let repoCount = 50;

console.log(
  `Hello, my name is ${userName.toUpperCase()} and my Repo Count is ${repoCount}`
);

let gameName = new String("GTA V");
let anotherGame = new String("GTA IV");

console.log(gameName.length);
console.log(gameName.concat(anotherGame));
console.log(gameName.includes("GTA"));
console.log(anotherGame[0]);
console.log(anotherGame.startsWith("G"));
console.log(gameName.charAt(4));
console.log(gameName.indexOf("A"));

const newString = gameName.substring(0, 3);
const anotherString = anotherGame.slice(-6, 1);
console.log(newString);
console.log(anotherString);

const myName = "     fehdi     ";
console.log(myName);
console.log(myName.trim());

const url = "https://www.youtube.com%40";
console.log(url.replace("%40", "/"));

const countryName = "Pakistan";
console.log(countryName.split(""));
