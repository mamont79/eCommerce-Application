import { SingleCountryData } from '../CustomFormElements/constants';

export function getPostalCodeErrorMsg(
  countryData: SingleCountryData,
  value: string
) {
  if (!countryData.postalCodePattern.test(value))
    return `Postal code must be of type: ${countryData.example}`;
  return '';
}
