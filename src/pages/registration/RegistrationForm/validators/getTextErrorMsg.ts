export const getTextErrorMsg = (value: string) => {
  if (!value.length) return 'Required';
  if (!/^[a-zA-Z]+$/.test(value)) return 'Must consist only of letters';
  return '';
};
