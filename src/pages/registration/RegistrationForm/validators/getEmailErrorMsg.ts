export const getEmailErrorMsg = (value: string) => {
  if (value === '') return 'Required';
  if (value.trim().length !== value.length)
    return 'No leading or trailing witespaces';
  if (!value.includes('@')) return 'Email must contain "@"-sign';
  return '';
};
