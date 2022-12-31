// Assignment code here
// all the variables for each character set
var possibleCharacters = [];
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "?", "/", "-", ":", ";", "[", "]", "{", "}", ".", "<", ">", "=", "_", "`", "|", "~"];


//logic
// function passwordOptions() {
//     var length = parseInt(prompt("What's the length?(8-128)")); 
//     var hasLower = confirm("Do you want lowercase?");
//     var hasUpper = confirm("Do you want uppercase?");
//     var hasNumbers = confirm("Do you want numbers?");
//     var hasSpecialCharacters = confirm("Do you want special characters?")
//     var options = {}
// }


function generatePassword(){
    var password = "";
    var length = parseInt(prompt("What's your password length? (8-128)")); 
      if (length<8){
        alert("Password must contain at least 8 characters")
        return ""
      }
      if (length>128){
        alert("Password cannot contain more than 128 characters")
        return ""
      }
      console.log(length);
    var hasLower = confirm("Do you want lowercase?");
      console.log(hasLower);
      if(hasLower == true){
        possibleCharacters = possibleCharacters.concat(lowercaseCharacters);
      }
    var hasUpper = confirm("Do you want uppercase?");
      console.log(hasUpper);
      if(hasUpper == true){
        possibleCharacters = possibleCharacters.concat(uppercaseCharacters);
      }
    var hasNumbers = confirm("Do you want numbers?");
      console.log(hasNumbers);
      if(hasNumbers == true){
        possibleCharacters = possibleCharacters.concat(numericCharacters);
      }
    var hasSpecialCharacters = confirm("Do you want special characters?")  
      console.log(hasSpecialCharacters);
      if(hasSpecialCharacters == true){
        possibleCharacters = possibleCharacters.concat(specialCharacters);
      }
    for(var i=0; i<length; i++){
      password += possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)];
      console.log(password);
    }
    return password;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
