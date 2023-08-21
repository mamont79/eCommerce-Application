import {
  PASSWORD_LOWER_CASE_SYMBOL_CHECK,
  PASSWORD_NUMBER_CHECK,
  PASSWORD_SPECIAL_SYMBOL_CHECK,
  PASSWORD_SYMOLS_NUMBER_CHECK,
  PASSWORD_UPPER_CASE_SYMBOL_CHECK,
} from './constants';
import checkSpaces from '../helpers/check-spaces';

function getPasswordErrorMsg(value: string): string {
  if (!value) {
    return 'Field password cannot be empty';
  }
  if (checkSpaces(value)) {
    return `Password must not contain leading or trailing whitespace.`;
  }
  if (!PASSWORD_LOWER_CASE_SYMBOL_CHECK.test(value)) {
    return `Password must contain at least one lowercase letter (a-z).`;
  }
  if (!PASSWORD_UPPER_CASE_SYMBOL_CHECK.test(value)) {
    return `Password must contain at least one uppercase letter (A-Z).`;
  }
  if (!PASSWORD_NUMBER_CHECK.test(value)) {
    return `Password must contain at least one digit (0-9).`;
  }
  if (!PASSWORD_SPECIAL_SYMBOL_CHECK.test(value)) {
    return `Password must contain at least one special character (e.g., !@#$%^&*).`;
  }
  if (!PASSWORD_SYMOLS_NUMBER_CHECK.test(value)) {
    return `Password must be at least 8 characters long.`;
  }

  return '';
}

export default getPasswordErrorMsg;
