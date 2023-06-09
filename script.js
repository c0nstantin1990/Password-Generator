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
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    return alert(
      "Password length must be a number between 8 and 128 characters"
    );
  }
  var uppercaseLetters = confirm("Uppercase letters?");
  var lowercaseLetters = confirm("Lowercase letters?");
  var numbers = confirm("Numbers?");
  var specialCharacters = confirm("Special characters?");

  //Defining possible characters & types to use in password
  var characters = "";
  if (uppercaseLetters) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (lowercaseLetters) characters += "abcdefghijklmnopqrstuvwxyz";
  if (numbers) characters += "0123456789";
  if (specialCharacters) characters += "!@#$%^&*()_+-=[]{}|;:'\",.<>/?`~";

  //Makes suare selected at least 1 character type
  if (
    !uppercaseLetters &&
    !lowercaseLetters &&
    !numbers &&
    !specialCharacters
  ) {
    alert("Select at least one character type!!!");
    return "";
  }
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
  }
  return password;
}
