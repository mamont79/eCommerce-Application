import {
  COUNTRIES_DATA,
  CountriesData,
  SingleCountryData,
} from '../CustomFormElements/constants';

export function getPostalCodeErrorMsg(
  countryKey: keyof CountriesData,
  value: string
) {
  const countryData: SingleCountryData = COUNTRIES_DATA[countryKey];
  if (!countryData.postalCodePattern.test(value))
    return `Postal code must be of type: ${countryData.example}`;
  return '';
}
