const lunches = [];

const addLunchToEnd = (container, arg) => {
  container.push(arg);
  console.log(`${arg} added to the end of the lunch menu.`);
  return container;
}

const addLunchToStart = (container, arg) => {
  container.unshift(arg);
  console.log(`${arg} added to the start of the lunch menu.`);
  return container;
}

const removeLastLunch = container => {
  if (container.length !== 0){
    const removedItem = container.pop();
    console.log(`${removedItem} removed from the end of the lunch menu.`);
  }else {
    console.log("No lunches to remove.")
  }
  return container;
}

const removeFirstLunch = container => {
  if (container.length !== 0) {
    const removedItem = container.shift();
    console.log(`${removedItem} removed from the start of the lunch menu.`);
  }else {
    console.log("No lunches to remove.");
  }
  return container;
}

function getRandomLunch(container) {
  if (container.length !== 0) {
    const randomizerRange = container.length -1;
    let randomizedIndex = Math.random() * randomizerRange;
    randomizedIndex = randomizedIndex.toFixed();
    const lunchItem = container[randomizedIndex];
    console.log(`Randomly selected lunch: ${lunchItem}`);
  } else {
    console.log("No lunches available.")
  }
}

function showLunchMenu(container) {
  if(container.length !== 0) {
    console.log(`Menu items: ${container.join(', ')}`);
  }else {
    console.log("The menu is empty.");
  }
}

let grunches = ['grunch1', 'grunch2', 'grunch3'];
showLunchMenu(grunches);

          



