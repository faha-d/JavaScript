const userId = 698;
let userEmail = "xyz@gmail.com";
var userPassword = 456789;
userCountry = "Pakistan"; // Not preferred, creates a global variable
let userState;

// userId = 45;  // Not allowed, as 'userId' is a constant

userEmail = "abc@gmail.com";
userPassword = "424242";
userCountry = "Dubai";

/*
   Prefer not to use 'var' because of issues in block and functional scope.
*/

console.table([userId, userEmail, userPassword, userCountry, userState]);
