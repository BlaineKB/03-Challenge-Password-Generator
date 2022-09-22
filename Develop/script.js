// Select the generate password button
var generateBtn = document.querySelector("#generate")

// Function for generating password
function generatePassword() {
  console.log("Clicked")
  var charLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var charUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var charNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var charSymbol = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "="]

  // Prompt user for password criteria, 

  var password1 = [];
  var input = [];

  // password length between 8-128, 

  var length = prompt ("Choose a password length between 8 and 128 characters.");

  if (length < 8 || length > 128){
    alert("Choose a password length between 8 and 128 characters.");

    return
  }

  // lowercase uppercase numbers special characters

  var lowercaseQuestion = confirm ("Would you like your password to contain lowercase letters?");
  var uppercaseQuestion = confirm ("Would you like your password to contain uppercase letters?");
  var numberQuestion = confirm ("Would you like your password to contain numbers?");
  var specialQuestion = confirm ("Would you like your password to contain special characters?");

  // Validate the layout

  if (numberQuestion){password1 = password1.concat(number);
  }
  
  if (uppercaseQuestion){password1 = password1.concat(uppercase);
  }
  
  if (lowercaseQuestion){password1 = password1.concat(lowercase);
  }
  
  if (specialQuestion){password1 = password1.concat(special);
  }
  
  

  // Generate password
  
  for (var i = 0; i < length; i++) {
      
    input.push (password1[Math.floor(Math.random() * password1.length)]); 
    }
  
    return input.join("") ;
  }
  


  // Display password

  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;

}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
