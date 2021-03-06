// Assignment Code
var generateBtn = document.querySelector("#generate");
const minLength = 8;
const maxLength = 128;

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
    var errorDiv = document.querySelector("#errorDiv");
    var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    var numericChars = "0123456789";
    var specialChars = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    var charPool = "";
    var generatedPassword = "";
    var conditionsMet;
    var charTypeIncluded;

    // Reset any current error message
    errorDiv.textContent = "";

    // Read user selected values from form
    var includeUpperCase = document.forms["requirementsForm"]["radioUpper"].value;
    var includeLowerCase = document.forms["requirementsForm"]["radioLower"].value;
    var includeNumeric = document.forms["requirementsForm"]["radioNumeric"].value;
    var includeSpecial = document.forms["requirementsForm"]["radioSpecial"].value;
    var passwordLength = document.forms["requirementsForm"]["passwordLength"].value;
    var enforceInclusion = document.forms["requirementsForm"]["enforceInclusion"].checked;

    // Add user selected char types into charPool
    if (includeUpperCase == "yes") {
        charPool=upperCaseChars;
    }
    if (includeLowerCase == "yes") {
        charPool+=lowerCaseChars;
    }
    if (includeNumeric == "yes") {
        charPool+=numericChars;
    }
    if (includeSpecial == "yes") {
        charPool+=specialChars;
    }
    
    // Make sure user selected at least one char type and display error if needed
    if (charPool.length == 0) {
        errorDiv.textContent = "You must select at least one character type to include.";
    }

    // Make sure user selected password length is between 8 and 128 and display error if needed
    if (passwordLength < minLength || passwordLength > maxLength) {
        if (errorDiv.textContent == "") {
            errorDiv.textContent = "Password length must be between " + minLength + " and " + maxLength + ".";
        }
        else {
            errorDiv.textContent += " Password length must be between " + minLength + " and " + maxLength + ".";
        }
    }

    // If there is an error, return ""
    if (errorDiv.textContent != "")
        return "";

    if (enforceInclusion == false) {
        for (i=0; i<passwordLength; i++) {
            // Pick a charPool index at random and add the picked char to password
            generatedPassword += charPool.charAt(Math.floor(Math.random() * charPool.length));
        }
    }
    else {
        // Loop until generated password includes all user selected char types
        do {
            generatedPassword = "";
            for (i=0; i<passwordLength; i++) {
                // Pick a charPool index at random and add the picked char to password
                generatedPassword += charPool.charAt(Math.floor(Math.random() * charPool.length));
            }

            // Ensure at least one of each char type is included
            conditionsMet = true;
            if (includeUpperCase == "yes") {
                charTypeIncluded = false;
                i=0;
                while (charTypeIncluded == false && i<generatedPassword.length) {
                    if (upperCaseChars.includes(generatedPassword.charAt(i)))
                        charTypeIncluded = true;
                    i++;
                }
                if (charTypeIncluded == false)
                    conditionsMet = false;
            }
           if (includeLowerCase == "yes" && conditionsMet == true) {
                charTypeIncluded = false;
                i=0;
                while (charTypeIncluded == false && i<generatedPassword.length) {
                    if (lowerCaseChars.includes(generatedPassword.charAt(i)))
                        charTypeIncluded = true;
                    i++;
                }
                if (charTypeIncluded == false)
                    conditionsMet = false;
            }
            if (includeNumeric == "yes" && conditionsMet == true) {
                charTypeIncluded = false;
                i=0;
                while (charTypeIncluded == false && i<generatedPassword.length) {
                    if (numericChars.includes(generatedPassword.charAt(i)))
                        charTypeIncluded = true;
                    i++;
                }
                if (charTypeIncluded == false)
                    conditionsMet = false;
            }
            if (includeSpecial == "yes" && conditionsMet == true) {
                charTypeIncluded = false;
                i=0;
                while (charTypeIncluded == false && i<generatedPassword.length) {
                    if (specialChars.includes(generatedPassword.charAt(i)))
                        charTypeIncluded = true;
                    i++;
                }
                if (charTypeIncluded == false)
                    conditionsMet = false;
            }
        } while (conditionsMet == false);
    }
    return generatedPassword;
}