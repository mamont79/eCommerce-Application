import { CountriesData } from './CustomFormElements/constants';

const registrationFormPersonalDataFields = {
  firstName: '',
  lastName: '',
  birthDate: '',
  email: '',
  password: '',
  userDataProcessingConsent: false,
};

const shippingAddressFields: ShippingAddressFields = {
  shippingCountry: '',
  shippingPostalCode: '',
  shippingCity: '',
  shippingStreet: '',
};

const billingAddressFields: BillingAddressFields = {
  billingCountry: '',
  billingPostalCode: '',
  billingCity: '',
  billingStreet: '',
};

export const registrationFormFields = {
  ...registrationFormPersonalDataFields,
  ...shippingAddressFields,
  ...billingAddressFields,
};

export type RegistrationFormFields = typeof registrationFormFields;
export type ShippingAddressFields = {
  shippingCountry: keyof CountriesData | '';
  shippingPostalCode: string;
  shippingCity: string;
  shippingStreet: string;
};
export type BillingAddressFields = {
  billingCountry: keyof CountriesData | '';
  billingPostalCode: string;
  billingCity: string;
  billingStreet: string;
};
export type AddressFields = ShippingAddressFields & BillingAddressFields;
