import { ChangeEvent } from 'react';
import isValidPostalCode from './isValidPostalCode';
import type COUNTRY from '../../CountryPostalCodeMap';

export default function getPostalCodeValidator(
  setPostalCode: (a: string) => void,
  setPostalCodeError: (a: string) => void,
  country: typeof COUNTRY.us | ''
) {
  return (e: ChangeEvent<HTMLInputElement>) => {
    setPostalCode(e.target.value);
    e.target.classList.add('invalid');
    if (country === '') {
      setPostalCode('');
      setPostalCodeError(`Choose country first.`);
    } else if (!isValidPostalCode(e.target.value, country.postalCodePattern)) {
      setPostalCodeError(
        `Postal code in ${country.name} must be of "${country.example}" format.`
      );
    } else {
      setPostalCodeError('');
      e.target.classList.remove('invalid');
    }
  };
}
