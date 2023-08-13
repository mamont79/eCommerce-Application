import { ChangeEvent } from 'react';
import {
  PASSWORD_LOWER_CASE_SYMBOL_CHECK,
  PASSWORD_UPPER_CASE_SYMBOL_CHECK,
  PASSWORD_NUMBER_CHECK,
  PASSWORD_SPECIAL_SYMBOL_CHECK,
  PASSWORD_SYMOLS_NUMBER_CHECK,
} from '../constants';
import checkSpaces from '../../helpers/check-spaces';

export default function getPasswordHandler(
  setPassword: (a: string) => void,
  setPasswordError: (a: string) => void
) {
  return (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value as string);
    e.target.classList.add('invalid');

    if (!PASSWORD_LOWER_CASE_SYMBOL_CHECK.test(String(e.target.value))) {
      setPasswordError(
        'Password must contain at least one lowercase letter (a-z).'
      );
    } else if (!PASSWORD_UPPER_CASE_SYMBOL_CHECK.test(String(e.target.value))) {
      setPasswordError(
        'Password must contain at least one uppercase letter (A-Z).'
      );
    } else if (!PASSWORD_NUMBER_CHECK.test(String(e.target.value))) {
      setPasswordError('Password must contain at least one digit (0-9).');
    } else if (!PASSWORD_SPECIAL_SYMBOL_CHECK.test(String(e.target.value))) {
      setPasswordError(
        'Password must contain at least one special character (e.g., !@#$%^&*).'
      );
    } else if (!PASSWORD_SYMOLS_NUMBER_CHECK.test(String(e.target.value))) {
      setPasswordError('Password must be at least 8 characters long.');
    } else if (checkSpaces(e)) {
      setPasswordError(
        'Password must not contain leading or trailing whitespace.'
      );
    } else {
      setPasswordError('');
      e.target.classList.remove('invalid');
    }
  };
}
