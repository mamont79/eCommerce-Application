import { ChangeEvent } from 'react';
import { MINIMUM_ALLOWED_USER_AGE_IN_YEARS } from '../constants';
import isValidBirthDate from './isValidBirthDate';

export default function getBirthDateValidator(
  setEmail: (a: string) => void,
  setEmailError: (a: string) => void
) {
  return (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    e.target.classList.add('invalid');
    if (!isValidBirthDate(String(e.target.value))) {
      setEmailError(
        `You must be at least ${MINIMUM_ALLOWED_USER_AGE_IN_YEARS} years old`
      );
    } else {
      setEmailError('');
      e.target.classList.remove('invalid');
    }
  };
}
