const checkBtn = document.getElementById('check-btn');
const textInput = document.getElementById('text-input');
const resultText = document.getElementById('result');
const regexes = [
  /[^a-zA-Z0-9]/ig
];

let [nonAlphaNumericRegex] = regexes;

checkBtn.addEventListener('click', ()=> {
  let userInput = textInput.value;
  if(isEmpty(userInput)) {
    alert('Please input a value');
    return;
  }
  const userInputConverted = convertToAlphaNumeric(userInput);
  resultText.innerText = `${userInput} is${isPalindrome(userInputConverted) ? '' : ' not'} a palindrome`;
});

const isEmpty = (input) => input === ''; 

const convertToAlphaNumeric = (string)=> {
  return string
    .replaceAll(nonAlphaNumericRegex, '')
    .toLowerCase();
}

function isPalindrome(string) {
  const strLength = string.length;
  const middleIndex = Math.floor(strLength / 2);
  const isEven = strLength % 2 === 0;
  let counter = 1;
  for(let i = middleIndex; i < strLength; i++){
      if(isEven) {
        if(string[middleIndex - counter] !== string[middleIndex + counter -1]){
          return false;
        }
      }else{
        if(string[middleIndex - counter] !== string[middleIndex + counter]){
          return false;
        }
      }
      counter++;
  }
  return true;
}