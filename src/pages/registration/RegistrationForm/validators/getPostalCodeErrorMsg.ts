import { COUNTRIES_DATA, CountriesData } from '../CustomFormElements/constants';
import { cancelValidate } from './cancelValidate';

export function getPostalCodeValidator(countryKey: keyof CountriesData | '') {
  if (countryKey === '') return cancelValidate;
  const { postalCodePattern, example } = COUNTRIES_DATA[countryKey];
  return (value: string) => {
    if (!value.length) return 'Required';
    if (!postalCodePattern.test(value))
      return `Postal code must be of type: ${example}`;
    return '';
  };
}
