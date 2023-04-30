// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Generate password
function generatePassword() {
  var passwordLength = prompt("Password length?(8-128 characters)");
  var uppercaseLetters = confirm("Uppercase letters?");
  var lowercaseLetters = confirm("Lowercase letters?");
  var numbers = confirm("Using numbers?");
  var specialCharacters = confirm("Special characters?");
}
//Defining possible characters to use in password
if (uppercaseLetters) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
if (lowercaseLetters) characters += "abcdefghijklmnopqrstuvwxyz";
if (numbers) characters += "0123456789";
if (specialCharacters) characters += "!@#$%^&*()_+-=[]{}\\|;:'\",.<>/?`~";
