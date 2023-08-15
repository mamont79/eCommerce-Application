import NAME_ALLOWED_SYMBOLS_PATTERN from './name-validation/constants';

export default function isLettersOnly(userInput: string) {
  let isValid = true;

  userInput.split('').forEach((char) => {
    if (!NAME_ALLOWED_SYMBOLS_PATTERN.test(char)) {
      isValid = false;
    }
  });

  return isValid;
}
