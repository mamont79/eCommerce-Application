import { ChangeEvent } from 'react';
import isValidCityName from './isValidStreetName';

export default function getCityValidator(
  setCity: (a: string) => void,
  setCityError: (a: string) => void
) {
  return (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
    e.target.classList.add('invalid');
    if (!isValidCityName(e.target.value)) {
      setCityError(
        `Street name must be at least 1 character long.\n
        And must not contain any special characters or numbers.`
      );
    } else {
      setCityError('');
      e.target.classList.remove('invalid');
    }
  };
}
