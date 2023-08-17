import { MINIMUM_PASSWORD_LENGTH } from './constants';

export const getPasswordErrorMsg = (value: string) => {
  if (value === '') return 'Required';
  if (hasEdgeWhitespaces(value)) return 'No leading or trailing witespaces';
  if (!hasLowerCase(value)) return 'Must have at least 1 lower case letter.';
  if (!hasUpperCase(value)) return 'Must have at least 1 upper case letter.';
  if (!hasDigit(value)) return 'Must have at least 1 digit.';
  if (!isLongEnough(value))
    return 'Password must be at least 8 characters long.';
  return '';
};

function isLongEnough(value: string) {
  return value.length >= MINIMUM_PASSWORD_LENGTH;
}

function hasEdgeWhitespaces(value: string) {
  return value.trim().length !== value.length;
}

function hasDigit(value: string) {
  const numberPattern = /[0-9]/;
  return numberPattern.test(value);
}

function hasUpperCase(value: string) {
  const upperCasePattern = /[A-Z]/;
  return upperCasePattern.test(value);
}

function hasLowerCase(value: string) {
  const lowerCasePattern = /[a-z]/;
  return lowerCasePattern.test(value);
}
