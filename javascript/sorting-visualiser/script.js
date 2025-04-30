const generateBtn = document.getElementById('generate-btn');
const startingArr = document.getElementById('starting-array');
const arrContainer = document.getElementById('array-container');
const sortBtn = document.getElementById('sort-btn');

const generateElement = () => 1 + Math.floor(Math.random() * 100);

function generateArray() {
  const arr = [];
  for(let i=0; i<5; i++) {
    arr.push(generateElement());
  }
  return arr;
}

const generateContainer = () => document.createElement('div');

const fillArrContainer = (htmlElement, array) => {
  array.forEach( (el) => {
    htmlElement.innerHTML += `<span>${el}</span>`
  });
}

const isOrdered = (intA, intB) => intA <= intB;

function swapElements(array, index) {
  if(!isOrdered(
      array[index], 
      array[index + 1]) && 
      array[index + 1]) {
        const tmp = array[index];
        array[index] = array[index + 1];
        array[index + 1] = tmp;
        return true;
  }
  return false;
}

function highlightCurrentEls(htmlElement, index) {
  index++;
  [
    htmlElement.querySelector(`:nth-child(${index})`),
    htmlElement.querySelector(`:nth-child(${index+1})`),
  ].forEach( (el) => {
    el.style.border = '1px dashed red';
  });
}

function bubbleSort(arr) {
  const arrayLength = arr.length;
  let hasSwapped = true;
  let isFirstLoop = true;
    while(hasSwapped) {
      hasSwapped = false;
      for(let i=0; i<arrayLength-1; i++) {
        const div = isFirstLoop ? 
          startingArr :
          addDivToHTMLElement(arrContainer);
        
        if(!isFirstLoop) {
          fillArrContainer(div, arr);
        }  
        highlightCurrentEls(div, i);
        const s = swapElements(arr, i);
        if(s) {
          hasSwapped = true;
        }
        isFirstLoop = false;
      }
    }

  fillArrContainer(
    addDivToHTMLElement(arrContainer),
    arr
  );
}



function addDivToHTMLElement(htmlElement) {
  const div = generateContainer();
  htmlElement.appendChild(div);
  return div;
}

function clearArrContainer() {
  const arrContainerNodes = arrContainer.querySelectorAll('div:not(#starting-array)');
  arrContainerNodes.forEach( (el) => {
    arrContainer.removeChild(el);
  })
}

function clearStartingArrContainer() {
  while(startingArr.firstChild) {
    startingArr.removeChild(startingArr.lastChild);
  }
}

generateBtn.addEventListener('click', () => {
  clearArrContainer();
  clearStartingArrContainer();
  fillArrContainer(startingArr, generateArray());
})


sortBtn.addEventListener('click', () => {
  const hasStartingArrElements = startingArr.firstChild;
  const hasArrContainerElements = arrContainer.querySelectorAll('div:not(#starting-array)').length > 0;

  if(!hasStartingArrElements) {
    return;
  }
  
  if(hasArrContainerElements) {
    clearArrContainer();
  }
  const arr = [];
  const nodes = startingArr.children;
  for(let i=0; i<nodes.length; i++) {
    arr.push(Number(nodes[i].textContent));
  }
  bubbleSort(arr);
});

