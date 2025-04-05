const questions = [
  {
    category: "Geography",
    question: "Which is the largest desert in the world?",
    choices: ["Sahara", "Gobi", "Arctic"],
    answer: "Sahara",
  },

  {
    category: "General Knowledge",
    question: "What is the capital of France?",
    choices: ["Berlin", "Madrid", "Paris"],
    answer: "Paris",
  },

  {
    category: "Science",
    question: "What is the chemical symbol for water?",
    choices: ["H2O", "C02", "O2"],
    answer: "H2O",
  },

  {
    category: "Mathematics",
    question: "What is the value of Pi (π) ?",
    choices: ["3.14", "2.718", "1.618"],
    answer: "3.14",
  },

  {
    category: "Literature",
    question: 'Who wrote "Romeo and Juliet"?',
    choices: ["William Shakespeare", "Mark Twain", "Charles Dickens"],
    answer: "William Shakespeare",
  },
];

function getRandomQuestion(questionsArray) {
  const upperBound = questionsArray.length -1;
  const randomIndex = (Math.random() * upperBound).toFixed();
  return questionsArray[randomIndex];
}

function getRandomComputerChoice(choicesArray) {
  const upperBound = choicesArray.length -1;
  const randomIndex = (Math.random() * upperBound).toFixed();
  return choicesArray[randomIndex];
}

const getResults = (questionObj, computerChoice) => 
  questionObj.answer === computerChoice ? 
  "The computer's choice is correct!" :
  `The computer's choice is wrong. The correct answer is: ${questionObj.answer}`;

