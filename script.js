/*// Assignment code here
passwordGen = document.getElementById("password")
 function generatePassword() {
  const length = 8;
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const specialChars = '!@#$%^&*()';
  const numbers = '01
  23456789';

  let password = '';

  password += getRandomChar(uppercaseChars);
  password += getRandomChar(lowercaseChars);
  password += getRandomChar(specialChars);
  password += getRandomChar(numbers);

  for (let i = 0; i < length - 4; i++) {
    const charType = getRandomInt(3); // 0 for uppercase, 1 for lowercase, 2 for special character
    switch (charType) {
      case 0:
        password += getRandomChar(uppercaseChars);
        break;
      case 1:
        password += getRandomChar(lowercaseChars);
        break;
      case 2:
        password += getRandomChar(specialChars);
        break;
    }
  }

  return shuffleString(password);
}

function getRandomChar(characters) {
  const randomIndex = getRandomInt(characters.length);
  return characters.charAt(randomIndex);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function shuffleString(string) {
  let shuffledString = '';
  const stringArray = string.split('');
  while (stringArray.length > 0) {
    const randomIndex = getRandomInt(stringArray.length);
    shuffledString += stringArray.splice(randomIndex, 1);
  }
  return shuffledString;
  
}
/*
// Generate and print a password
const password = generatePassword();
console.log(password);
length = document.getElementById("length")
upperCase = document.getElementById("upper")
lowerCase = document.getElementById("lower")
specialChar = document.getElementById("special")
numberCheck = document.getElementById("number")


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
const generateBtn = document.getElementById('generate-btn');
generateBtn.addEventListener('click', function() {
  const password = generatePassword();
  console.log(password);
});
*/
// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate-btn");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
function generatePassword() {
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const specialChars = '!@#$%^&*()';
  const generateBtn = document.getElementById('generate-btn');

  let password = '';
  let selectedChars = '';

  const length = prompt('Enter the length of the password (between 8 and 128 characters):');
  const parsedLength = parseInt(length);

  if (isNaN(parsedLength) || parsedLength < 8 || parsedLength > 128) {
    alert('Invalid password length! Please try again.');
    return '';
  }

  const includeLowercase = confirm('Include lowercase characters?');
  const includeUppercase = confirm('Include uppercase characters?');
  const includeNumbers = confirm('Include numeric characters?');
  const includeSpecialChars = confirm('Include special characters?');

  if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecialChars) {
    alert('You must select at least one character type! Please try again.');
    return '';
  }

  if (includeLowercase) {
    selectedChars += lowercaseChars;
    password += getRandomChar(lowercaseChars);
  }
  if (includeUppercase) {
    selectedChars += uppercaseChars;
    password += getRandomChar(uppercaseChars);
  }
  if (includeNumbers) {
    selectedChars += numbers;
    password += getRandomChar(numbers);
  }
  if (includeSpecialChars) {
    selectedChars += specialChars;
    password += getRandomChar(specialChars);
  }

  for (let i = password.length; i < parsedLength; i++) {
    password += getRandomChar(selectedChars);
  }

  return shuffleString(password);


}



generateBtn.addEventListener('click', function() {
  const password = generatePassword();
  console.log(password);
  var generateBtn = document.querySelector("#generate-btn");

// Write password to the #password input

// Add event listener to generate button

});