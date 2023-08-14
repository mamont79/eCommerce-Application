import { ChangeEvent } from 'react';
import checkSpaces from '../../helpers/check-spaces';
import EMAIL_SEPARATORS_CHECK from '../constants';

export default function getEmailHandler(
  setEmail: (a: string) => void,
  setEmailError: (a: string) => void
) {
  return (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    e.target.classList.add('invalid');
    if (checkSpaces(e)) {
      setEmailError(
        'mail address must not contain leading or trailing whitespace.'
      );
    } else if (
      !EMAIL_SEPARATORS_CHECK.test(String(e.target.value).toLowerCase())
    ) {
      setEmailError("Email address must contain an '@' and domain name.");
    } else {
      setEmailError('');
      e.target.classList.remove('invalid');
    }
  };
}
