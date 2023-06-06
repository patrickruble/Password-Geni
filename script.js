
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
