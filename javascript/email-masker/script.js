let email = "myEmail@email.com";

const maskEmail = (email) => {
  if (typeof email !== 'string') {
    return 'argument is not an email!'
  }  
  let maskedEmail = email;
  const domainStartIndex = email.indexOf('@');
  let userNamePart = email.slice(0, domainStartIndex);
  const asterix = '*';

  if (userNamePart.length >= 3) {
    const maskStartIndex = 1;
    const maskEndIndex = -2;
    // Adding + 1 to the maskEndIndex because slice given end is not inclusive
    const strToBeReplaced = userNamePart.slice(maskStartIndex, maskEndIndex + 1);
    const asterixString = asterix.repeat(strToBeReplaced.length);
    maskedEmail = maskedEmail.replace(strToBeReplaced, asterixString);
  } else {
    const asterixString = asterix.repeat(userNamePart.length);
    maskedEmail.replace(userNamePart, asterixString);
  }
  return maskedEmail;
}
console.log(maskEmail(email));