import { COUNTRIES_DATA, CountriesData } from '../CustomFormElements/constants';

export function getPostalCodeValidator(countryKey: keyof CountriesData | '') {
  if (countryKey === '') return () => '';
  const { postalCodePattern, example } = COUNTRIES_DATA[countryKey];
  return (value: string) => {
    if (value.length === 0) return 'Required';
    if (!postalCodePattern.test(value))
      return `Postal code must be of type: ${example}`;
    return '';
  };
}
