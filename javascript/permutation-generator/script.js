let count = 0;
function permuteString(string, prefix = '', results = []) {
  if(string.length === 0) {
    results.push(prefix);
    return results;
  }

  string
    .split('')
    .forEach((char) => {
      results.push(prefix + string);
      permuteString(string.replace(new RegExp(char), ''), prefix + char, results);
  });

   return [...new Set(results)];
}