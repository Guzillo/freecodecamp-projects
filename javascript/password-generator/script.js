function generatePassword(length) {
  let password = "";
  const possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()".split("");
  for(let i = 0; i < length; i++) {
    let randomIndex = (Math.random() * possibleChars.length).toFixed();
    password += possibleChars[randomIndex];     
  }
  console.log(`Generated password: ${password}`);
  return password;
}

const password = generatePassword(50);