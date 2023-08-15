import {
  MILLISECONDS_IN_YEAR,
  MINIMUM_ALLOWED_USER_AGE_IN_YEARS,
} from '../constants';

export default function isValidBirthDate(dateString: string): boolean {
  const date = new Date(dateString);
  const userAge = (Date.now() - date.getTime()) / MILLISECONDS_IN_YEAR;
  return userAge >= MINIMUM_ALLOWED_USER_AGE_IN_YEARS;
}
