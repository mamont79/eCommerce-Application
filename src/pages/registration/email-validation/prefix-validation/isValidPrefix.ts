import VALID_SPECIAL_CHARACTERS from './constants';

export default function isValidPrefix(name: string): boolean {
  return isNameLengthLessOrequal64Chars(name) && isValidFormat(name);
}

function isValidFormat(name: string): boolean {
  let isValidName = true;

  name.split('').forEach((char, index) => {
    if (!isValidSymbol(char)) {
      isValidName = false;
      return;
    }
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

function isValidSymbol(char: string): boolean {
  const isWordCharacterPattern = /[\w]/;
  return isWordCharacterPattern.test(char) || VALID_SPECIAL_CHARACTERS.includes(char);
}

function isSpecChar(char: string): boolean {
  return VALID_SPECIAL_CHARACTERS.includes(char);
}

function isNameLengthLessOrequal64Chars(name: string): boolean {
  return name.length <= 64;
}
