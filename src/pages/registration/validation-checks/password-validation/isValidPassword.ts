import PASSWORD_MIN_LENGTH from './constants';

export default function isValidPassword(password: string): boolean {
  return (
    isValidLength(password) &&
    hasUpperCaseLetter(password) &&
    hasLowerCaseLetter(password) &&
    hasDigits(password)
  );
}

function hasDigits(password: string): boolean {
  let hasDigit = false;

  password.split('').forEach((char) => {
    if (!isLetter(char)) hasDigit = true;
  });

  return hasDigit;
}

function hasUpperCaseLetter(password: string): boolean {
  let hasUppercase = false;

  password.split('').forEach((char) => {
    if (isLetter(char) && char.toUpperCase() === char) hasUppercase = true;
  });

  return hasUppercase;
}

function hasLowerCaseLetter(password: string): boolean {
  let hasLowercase = false;

  password.split('').forEach((char) => {
    if (isLetter(char) && char.toLowerCase() === char) hasLowercase = true;
  });

  return hasLowercase;
}

function isValidLength(password: string): boolean {
  return password.length >= PASSWORD_MIN_LENGTH;
}

function isLetter(char: string): boolean {
  return Number.isNaN(Number(char));
}
