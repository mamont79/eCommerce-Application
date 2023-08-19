import { CountriesData } from './CustomFormElements/constants';

export type BasicAddressFields = {
  country: keyof CountriesData | '';
  postalCode: string;
  city: string;
  street: string;
};

const registrationFormPersonalDataFields = {
  firstName: '',
  secondName: '',
  birthDate: '2009-06-12',
  email: '',
  password: '12Qq',
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

export type RegistrationFormValues = typeof registrationFormFields;
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
