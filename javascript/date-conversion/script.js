const currentDate = new Date();
const currentDateFormat = `Current Date and Time: ${currentDate}`;

console.log(currentDateFormat);
const formatDateMMDDYYYY = (date) => `Formatted Date (MM/DD/YYYY): ${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
console.log(formatDateMMDDYYYY(currentDate));

const formatDateLong = (date) => {
const options = {
  month: "long",
  day: "numeric",
  year: "numeric",
}
const localeDate = date.toLocaleDateString('en-US', options);

return `Formatted Date (Month Day, Year): ${localeDate}`
}
console.log(formatDateLong(currentDate));