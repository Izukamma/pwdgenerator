// Assignment code here

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
//WHEN asked for character types to include in the password
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page

const upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const numbers = ["0","1","2","3","4","5","6","7","8","9"];
const specialChar = ['#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','['];

var length;
var upperConfirm;
var lowerConfirm;
var numConfirm;
var specialConfirm;
var charChoice = [""];
var password2 = "";

function generatePassword() {
length=prompt("choose Password length: at least 8 characters and no more than 128 characters ");
upperConfirm=confirm("do you want uppercase letters");
if (upperConfirm){
  alert("you choose uppercase");



}

else {
  alert("no uppercase will be added to your password");
}


lowerConfirm=confirm("do you want lowercase letters");
if (lowerConfirm){
  alert("you choose lowercase");



}

else {
  alert("no lowercase will be added to your password");
}
numConfirm=confirm("do you want numbers");
if (numConfirm){
  alert("you choose numbers");



}

else {
  alert("no numbers will be added to your password");
}

specialConfirm=confirm("so you want special charecters");
if (specialConfirm){
  alert("you choose special charectors");



}

else {
  alert("no special charectors will be added to your password");
}


if (upperConfirm) {
  charChoice=charChoice.concat(upperCase);
}

if (lowerConfirm) {
  charChoice=charChoice.concat(lowerCase);
}

if (numConfirm) {
  charChoice=charChoice.concat(numbers);
}

if (specialConfirm) {
  charChoice=charChoice.concat(specialChar);
}

for (i=0; i<length; i++) {
  password2=password2+charChoice[Math.floor(Math.random()*charChoice.length)];
}

return password2;

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
