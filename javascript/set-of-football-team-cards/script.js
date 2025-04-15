const footballTeam = {
  team: "FC Iron Eagles",
  year: 2024,
  headCoach: "Marco Santini",
  players: [
    {name: "Jake Matthews", position: "forward",isCaptain : false},
    {name: "Ryan Cooper",position: "midfielder",isCaptain : true},
    {name: "Ethan Brooks",position: "defender",isCaptain : false},
    {name: "Lucas Reed",position: "midfielder",isCaptain : false},
    {name: "Nathan Scott",position: "goalkeeper",isCaptain : false}
  ],
};
const {team, year, headCoach, players} = footballTeam;
const headCoachSpanElement = document.getElementById('head-coach');
const teamSpanElement = document.getElementById('team');
const yearSpanElement = document.getElementById('year');
const playerCardsElement = document.getElementById('player-cards');
const dropdownElement = document.getElementById('players');
headCoachSpanElement.innerText = footballTeam.headCoach;

teamSpanElement.innerText = team;
yearSpanElement.innerText = year;

function getPlayers(option, footballTeam) {
  let players = footballTeam.players;
  return players
  .filter( (player)=> {
    return option === 'all' ? player : player.position === option;
  })
  .reduce( (acc, { name, position, isCaptain})=> {
    return acc + 
    `<div class="player-card">
     <h2>${isCaptain ? '(Captain) ' : ''}${name}</h2>
     <p>Position: ${position}</p>
     </div>`
  }, '');
}

const updatePlayers = (option, footballTeam) => {
  playerCardsElement.innerHTML = getPlayers(option, footballTeam);
};

dropdownElement.addEventListener('change', (e)=> {
  updatePlayers(e.target.value, footballTeam);
});