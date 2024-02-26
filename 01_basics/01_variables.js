const userId = 698;
let userEmail = "xyz@gmail.com";
var userPassword = 456789;
userCountry = "Pakistan"; // not prefered
let userState;
// userId = 45;  // not allowed

userEmail = "abc@gmail.com";
userPassword = "424242";
userCountry = "Dubai";

/*
Prefer not to use var because of issue in block and functional scope.
*/

console.table([userId, userEmail, userPassword, userCountry, userState])
