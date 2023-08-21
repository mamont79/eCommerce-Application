export const getTextErrorMsg = (value: string) => {
  if (value === '') return 'Required';
  if (!/^[a-zA-Z]+$/.test(value)) return 'Must consist only of letters';
  return '';
};
