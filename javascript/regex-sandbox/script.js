const regexPattern = document.getElementById('pattern');
const stringToTest = document.getElementById('test-string');
const testButton = document.getElementById('test-btn');
const testResult = document.getElementById('result');
const caseInsensitiveFlag = document.getElementById('i');
const globalFlag = document.getElementById('g');
let matches;
stringToTest.innerHTML = 'Gu1n34 P1g5';
globalFlag.checked = false;
regexPattern.value = '\\d+';
const getFlags = ()=> {
  let result = '';
  result += caseInsensitiveFlag.checked ? 'i' : '';
  result += globalFlag.checked ? 'g' : '';
  return result;
}

function getHighlightedMatches() {
  let string = stringToTest.innerText;
  const flags = getFlags();
  let regex = new RegExp(regexPattern.value, flags);
  if(flags.includes('g')) {
    matches = [...string.matchAll(regex)];
    matches.reverse();
    matches.forEach( (match)=>{
      const matchStr = match[0];
      const matchIndex = match.index;
      string =  
        string.slice(0, matchIndex) + 
        `<span class="highlight">${matchStr}</span>` +
        string.slice(matchIndex + matchStr.length);
    })
    return string;
  }
    matches = [string.match(regex)];
    string = string.replace(regex, `<span class="highlight">${matches[0]}</span>`);
    return string;
}

const displayHighlightedMatches = ()=> {
  testResult.innerText = '';
  let matchesStr = [];
  stringToTest.innerHTML = getHighlightedMatches();
  if(matches.length > 1) {
    matches.forEach( (match)=>{
      matchesStr.push(match[0]);
    });
    matchesStr.reverse();
    testResult.innerText = matchesStr.join(', ');
  }else if(matches[0] === null){
    testResult.innerText = 'no match';
  }else {
    testResult.innerText = matches[0][0];
  }
  matches = [];
}

testButton.addEventListener('click', displayHighlightedMatches);