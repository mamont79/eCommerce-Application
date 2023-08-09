export default function isValidPrefix(name: string): boolean {
  return isNameLengthLessOrequal64Chars(name) && isValidSpecialChars(name);
}

function isValidSpecialChars(name: string): boolean {
  let isValidName = true;

  name.split('').forEach((char, index) => {
    if (!isSpecChar(char)) return;
    if (index === 0 || index === name.length - 1) {
      isValidName = false;
      return;
    }

    const prevChar = name[index - 1];
    const nextChar = name[index + 1];
    if (isSpecChar(prevChar) || isSpecChar(nextChar)) {
      isValidName = false;
    }
  });

  return isValidName;
}

function isSpecChar(char: string): boolean {
  const ValidSpecialCharacters = ['-', '_', '.'];
  return ValidSpecialCharacters.includes(char);
}

function isNameLengthLessOrequal64Chars(name: string): boolean {
  return name.length <= 64;
}
