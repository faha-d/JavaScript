const userName = "Fahad";
const repoCount = 50;

console.log(
  `Hello, my name is ${userName.toUpperCase()} and my Repo Count is ${repoCount}`
);

const gameName = "GTA V";
const anotherGame = "GTA IV";

console.log(gameName.length); // Output: 5
console.log(gameName + anotherGame); // Output: GTA VGTA IV
console.log(gameName.includes("GTA")); // Output: true
console.log(anotherGame[0]); // Output: G
console.log(anotherGame.startsWith("G")); // Output: true
console.log(gameName.charAt(4)); // Output: V
console.log(gameName.indexOf("A")); // Output: 1

const newString = gameName.substring(0, 3);
const anotherString = anotherGame.slice(-6, -5);
console.log(newString); // Output: GTA
console.log(anotherString); // Output: G

const myName = "     fehdi     ";
console.log(myName.trim()); // Output: fehdi

const url = "https://www.youtube.com%40";
console.log(url.replace("%40", "/")); // Output: https://www.youtube.com/

const countryName = "Pakistan";
console.log(countryName.split("")); // Output: [ 'P', 'a', 'k', 'i', 's', 't', 'a', 'n' ]
