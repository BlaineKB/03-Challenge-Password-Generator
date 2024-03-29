// Select the generate password button
var generateBtn = document.querySelector("#generate")

// Function for generating password with random characters
function generatePassword() {
  var charLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var charUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var charNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var charSymbol = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "="]

  // Prompt user for all of the password criteria
  var newPassword = [];
  var input = [];

  // Prompts user with a password length question that must be between 8 and 128 characters
  var length = prompt ("Choose a password length between 8 and 128 characters.");

  if (length < 8 || length > 128 || length === "" || isNaN(length)){
    alert("You must choose a password length that's a number between 8 and 128 characters.");

    return
  }

  // Prompt questions that user must select in order to generate password
  var lowercasePrompt = confirm ("Would you like your password to contain lowercase letters?");
  var uppercasePrompt = confirm ("Would you like your password to contain uppercase letters?");
  var numberPrompt = confirm ("Would you like your password to contain numbers?");
  var symbolPrompt = confirm ("Would you like your password to contain special characters?");

  // Joins user prompt selections into final password
  if (numberPrompt){newPassword = newPassword.concat(charNumber);
  }
  
  if (uppercasePrompt){newPassword = newPassword.concat(charUpper);
  }
  
  if (lowercasePrompt){newPassword = newPassword.concat(charLower);
  }
  
  if (symbolPrompt){newPassword = newPassword.concat(charSymbol);
  }
  
  

  // Randomly generates password including the user prompt selections
  for (var i = 0; i < length; i++) {
      
    input.push (newPassword[Math.floor(Math.random() * newPassword.length)]); 
  }
  
  return input.join("");
}
  

// Writes password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
