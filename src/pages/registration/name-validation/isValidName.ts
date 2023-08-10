export default function isValidName(name: string): boolean {
  return isValidLength(name) && hasLettersOnly(name);
}

function isValidLength(name: string): boolean {
  return name.length >= 1;
}

function hasLettersOnly(name: string): boolean {
  let isLetters = true;

  name.split('').forEach((char) => {
    if (isLetter(char)) return;
    isLetters = false;
  });

  return isLetters;
}

function isLetter(char: string): boolean {
  const lettersPattern = /[a-zа-я]/i;
  return lettersPattern.test(char);
}
