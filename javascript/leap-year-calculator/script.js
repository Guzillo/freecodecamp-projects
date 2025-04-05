const year = 2000;
const year2 = 1900;

const isLeapYear = (year) => {
  const message = 
    (year % 4 === 0 &&
     (year % 100 !== 0 || 
     year % 400 === 0)) ?
     `${year} is a leap year.` :
     `${year} is not a leap year.`;
  return message;
}

const result = isLeapYear(year);
console.log(result);