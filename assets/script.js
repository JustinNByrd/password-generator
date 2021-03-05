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

// Generate the pasword
function generatePassword() {
  var includeUpperCase, includeLowerCase, includeSpecial, includeNumbers, passwordLength;
  var charPool = [];
  
  // Do while user input does not meet requirements of at least one char type and password length between 8 and 128.
  while (charPool.length === 0 || (passwordLength < 8 || passwordLength > 128)) {
    includeUpperCase = confirm("Would you like to include uppercase character?");
    // If yes, push ascii values for uppercase chars to charPool array.
    if (includeUpperCase === true) {
      for (i = 65; i <= 90; i++) {
        charPool.push(i);
      }
    }
    includeLowerCase = confirm("Would you like to include lowercase characters?")
    // If yes, push ascii values for lowercase chars to charPool array.
    if (includeLowerCase === true) {
      for ( i= 97; i <= 122) {
        charPool.push(i);
      }
    }
    includeSpecial = confirm("Would you like to include special characters?")
    // If yes, push special chars to charPool array.
    if (includeSpecial === true) {
      for (i = )
    }
  }
}