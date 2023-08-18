export type BasicAddressFields = {
  country: string;
  postalCode: string;
  city: string;
  street: string;
};

const registrationFormPersonalDataFields = {
  firstName: '',
  secondName: '',
  birthDate: '',
  email: '',
  password: '',
  userDataProcessingConsent: false,
};

const shippingAddressFields = {
  shippingCountry: '',
  shippingPostalCode: '',
  shippingCity: '',
  shippingStreet: '',
};

const billingAddressFields = {
  billingCountry: '',
  billingPostalCode: '',
  billingCity: '',
  billingStreet: '',
};

export const registrationFormFields = {
  sameBillingShippingCheckbox: true,
  ...registrationFormPersonalDataFields,
  ...shippingAddressFields,
  ...billingAddressFields,
};

export type RegistrationFormValues = typeof registrationFormFields;
export type ShippingAddressFields = typeof shippingAddressFields;
export type BillingAddressFields = typeof billingAddressFields;
export type AddressFields = ShippingAddressFields & BillingAddressFields;
