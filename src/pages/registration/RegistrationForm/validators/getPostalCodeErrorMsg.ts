import { COUNTRIES_DATA } from '../../../../constants/countries';
import { ICountriesData } from '../../../../types/countryTypes';
import { cancelValidate } from './cancelValidate';

export function getPostalCodeValidator(countryKey: keyof ICountriesData | '') {
  if (countryKey === '') return cancelValidate;
  const { postalCodePattern, example } = COUNTRIES_DATA[countryKey];
  return (value: string) => {
    if (!value.length) return 'Required';
    if (!postalCodePattern.test(value))
      return `Postal code must be of type: ${example}`;
    return '';
  };
}
