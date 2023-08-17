import {
  MILLISECONDS_IN_YEAR,
  MINIMUM_ALLOWED_USER_AGE_IN_YEARS,
} from './constants';

function isValidBirthDate(dateString: string): boolean {
  const date = new Date(dateString);
  const userAge = (Date.now() - date.getTime()) / MILLISECONDS_IN_YEAR;
  return userAge >= MINIMUM_ALLOWED_USER_AGE_IN_YEARS;
}

export function getBirthDateErrorMsg(value: string) {
  if (!value) return 'Required';
  if (!isValidBirthDate) return 'User must be more than 13 years old.';
  return '';
}
