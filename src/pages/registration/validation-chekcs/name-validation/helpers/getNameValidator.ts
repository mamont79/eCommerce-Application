import { ChangeEvent } from 'react';
import isLettersOnly from '../../isLettersOnly';

export default function getNameValidator(
  setName: (a: string) => void,
  setNameError: (a: string) => void
) {
  return (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value as string);
    e.target.classList.add('invalid');

    const userInput = e.target.value;

    if (!isLettersOnly(userInput)) {
      setNameError(
        'First name and second name must contain only latin letters.'
      );
    } else {
      setNameError('');
      e.target.classList.remove('invalid');
    }
  };
}
