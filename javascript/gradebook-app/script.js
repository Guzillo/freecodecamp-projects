function validateNumber(arg) {
  const numScore = Number(arg);
  if(isNaN(numScore)) {
    console.log("item is not a number");
  }
}

function getAverage(testScoresArray) {
  let average = 0;

  for(const score of testScoresArray){
    const numScore = Number(score);
    validateNumber(numScore);
    average += numScore;
  }
  const numbersCount = testScoresArray.length;
  average/=numbersCount;
  return average;
}

function getGrade(score) {
  let numScore = Number(score);
  validateNumber(numScore);
  if(!(numScore >= 0 && numScore <=100)) {
    return "Invalid grade!";
  }
  let grade;
  if (numScore === 100) {
    grade = "A+";
  } else if(numScore >= 90) {
    grade = "A";
  } else if(numScore >= 80) {
    grade = "B";
  } else if(numScore >= 70) {
    grade = "C";
  } else if(numScore >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }
  return grade;
}

const hasPassingGrade = score => {
  const grade = getGrade(score);
  return (
    grade === "A+"|| 
    grade === "A" || 
    grade === "B" ||
    grade === "C" || 
    grade === "D"
  );
}

const studentMsg = (scoresArray, studentScore) => {
  const classAverage = getAverage(scoresArray);
  const hasTheStudentPassed = hasPassingGrade(studentScore);
  const studentGrade = getGrade(studentScore); 
  let messagePart1 = `Class average: ${classAverage}. Your grade: ${studentGrade}.`;
  const messagePart2 = hasTheStudentPassed ?
    ` You passed the course.` :
    ` You failed the course.` ;
  return messagePart1 += messagePart2;
}
