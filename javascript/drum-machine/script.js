const padBank = document.querySelector('#pad-bank');
const drumMachine = document.getElementById('drum-machine');
const display = document.getElementById('display');
const audioClipNames = [
  {
    id: "heater-1",
    name: "Heater 1"
  },
  {
    id: "heater-2",
    name: "Heater 2"
  },
  {
    id: "heater-3",
    name: "Heater 3"
  },
  {
    id: "heater-4",
    name: "Heater 4"
  },
  {
    id: "open-hh",
    name: "Open-HH"
  },
  {
    id: "kick-n-hat",
    name: "Kick-n'-Hat"
  },
  {
    id: "closed-hh",
    name: "Closed-HH"
  }, 
  {
    id: "kick",
    name: "Kick"
  },
  {
    id: "clap",
    name: "Clap"
  }
];

function displaySoundName(drumPad) {
  const audioId = drumPad?.id;
  const audioClip  = audioClipNames.find( (element) => element.id === audioId);
  display.innerText = audioClip?.name;
}

padBank.addEventListener('click', (e)=> {
  if(e.target.id !== 'pad-bank') {
    const drumPad = document.getElementById(e.target.id);
    const audio = drumPad.querySelector('audio.clip');
    if(audio) {
      audio.volume = 0.5;
      audio.currentTime = 0;
      audio.play();
      displaySoundName(drumPad); 
    }
  }
});

document.addEventListener('keydown', (e)=> {
 const audio = document.getElementById(e.key.toUpperCase());
 if(audio){
    audio.volume = 0.5;
    audio.currentTime = 0;
   const drumPad = document.querySelector(`div.drum-pad:has(#${audio?.id}`);
   audio.play();
   displaySoundName(drumPad);
 }

});

