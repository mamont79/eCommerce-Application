import { ChangeEvent } from 'react';
import isValidStreetName from './isValidStreetName';

export default function getStreetNameValidator(
  setStreetName: (a: string) => void,
  setStreetNameError: (a: string) => void
) {
  return (e: ChangeEvent<HTMLInputElement>) => {
    setStreetName(e.target.value);
    e.target.classList.add('invalid');
    if (!isValidStreetName(e.target.value)) {
      setStreetNameError('Street name must be at least 1 character long.');
    } else {
      setStreetNameError('');
      e.target.classList.remove('invalid');
    }
  };
}
