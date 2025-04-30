const poll = new Map();
function addOption(option) {
  if(!option) {
    return `Option cannot be empty.`;
  }
  if(!poll.has(option)) {
    poll.set(option, new Set());
    return `Option "${option}" added to the poll.`;
  }else {
    return `Option "${option}" already exists.`;
  }
}

function vote(option, voterId) {
  if(!poll.has(option)) {
    return `Option "${option}" does not exist.`;
  }else if(poll.get(option).has(voterId)){
    return `Voter ${voterId} has already voted for "${option}".`
  }else {
    poll.get(option).add(voterId);
    return `Voter ${voterId} voted for "${option}".`;
  }
}

function displayResults() {
  let message = 'Poll Results:\n';
  poll.forEach( (voters, option)=> {
    message += `${option}: ${voters.size} votes\n`
  })
  return message.trim();
}

addOption('Turkey');
addOption('Morocco');
addOption('Spain');

vote('Turkey', 'traveler1');
vote('Spain', 'traveler2');
vote('Morocco', 'traveler3');
console.log(displayResults());