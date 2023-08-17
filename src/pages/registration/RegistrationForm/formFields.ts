const registrationFormPersonalDataValues = {
  firstName: '',
  secondName: '',
  birthDate: '',
  email: '',
  password: '',
  userDataProcessingConsent: false,
};

const shippingAddressValues = {
  shippingCountry: '',
  shippingPostalCode: '',
  shippingCity: '',
  shippingStreet: '',
};

const billingAddressValues = {
  billingCountry: '',
  billingPostalCode: '',
  billingCity: '',
  billingStreet: '',
};

export const registrationFormValues = {
  sameBillingShipping: true,
  ...registrationFormPersonalDataValues,
  ...shippingAddressValues,
  ...billingAddressValues,
};

export type RegistrationFormValues = typeof registrationFormValues;
