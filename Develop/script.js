// Select the generate password button
var generateBtn = document.querySelector("#generate")

// Keys with value pairs of functions that generate random characters
var randomCharacters = {
  charSymbol: genRandomSymbol,
	charNum: genRandomNumber,
  charUpper: genRandomUpper,
  charLower: genRandomLower, 
};

function genRandomSymbol(){
  var symbols = '!@#$%^&*(){}[]=<>/,.'
  return symbols [Math.floor(Math.random() * symbols.length)]
}

function genRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 45)
}

function genRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 77)
}

// Functions for generating random characters
function genRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 88)
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
