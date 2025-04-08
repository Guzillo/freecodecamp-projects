function pyramid(pattern, rowsCount, hasVertexFacingDown) {
  let result = "";
  const spaceChar = " ";
  if (pattern.length !== 1) {
    return "not valid use of a function";
  }
  for (let i = 0; i < rowsCount; i++) {
    let line = "\n";
    let spacesCount;
    let charCount;
    if (!hasVertexFacingDown) {
      spacesCount = rowsCount - 1 - i;
      charCount = i * 2 + 1;
    } else if (hasVertexFacingDown) {
      spacesCount = i;
      charCount = rowsCount * 2 - 1 + -2 * i;
    }
    line = line.concat(
      spaceChar.repeat(spacesCount) + pattern.repeat(charCount)
    );
    result = result.concat(line);
  }
  return result + "\n";
}
console.log(pyramid("L", 25, true));