import { IDraftAddress } from '../../../../types/customerTypes';
import { RegistrationFormFields } from '../formFields';

export function makeAddress(
  values: RegistrationFormFields,
  isBilling = false
): IDraftAddress {
  const country = isBilling ? values.billingCountry : values.shippingCountry;
  const postalCode = isBilling
    ? values.billingPostalCode
    : values.shippingPostalCode;
  const city = isBilling ? values.billingCity : values.shippingCity;
  const streetName = isBilling ? values.billingStreet : values.shippingStreet;

  if (country === '')
    throw new Error('Invalid country values on registration submit.');

  return { country, postalCode, city, streetName };
}
