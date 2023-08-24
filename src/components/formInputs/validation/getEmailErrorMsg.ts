import { EMAIL_SEPARATORS_CHECK } from './passwordValidator/constants';
import checkSpaces from './helpers/check-spaces';

function getEmailErrorMsg(value: string): string {
  if (!value) {
    return 'Field e-mail cannot be empty';
  }
  if (checkSpaces(value)) {
    return `e-mail address must not contain leading or trailing whitespace.`;
  }
  if (!EMAIL_SEPARATORS_CHECK.test(value.toLowerCase())) {
    return `e-mail address must contain an '@' and domain name.`;
  }

  return '';
}

export default getEmailErrorMsg;
