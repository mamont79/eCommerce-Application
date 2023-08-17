export const getTextErrorMsg = (value: string) => {
  if (value === '') return 'Required';
  if (!isLettersOnly) return 'Must consist only of letters';
  return '';
};

function isLettersOnly(value: string) {
  const letterPattern = /[a-z]/i;
  let hasLettersOnly = true;
  value.split('').forEach((char) => {
    if (!letterPattern.test(char)) hasLettersOnly = false;
  });
  return hasLettersOnly;
}
