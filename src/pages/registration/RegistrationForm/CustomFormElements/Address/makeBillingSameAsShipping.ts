import { RegistrationFormValues } from '../../formFields';

export type Mutator = {
  values: RegistrationFormValues;
  setValues: (
    values: React.SetStateAction<RegistrationFormValues>,
    shouldValidate?: boolean
  ) => void;
};

export function makeBillingSameAsShippingAddress({
  values,
  setValues,
}: Mutator) {
  const billingCountry = values.shippingCountry;
  const billingPostalCode = values.shippingPostalCode;
  const billingCity = values.shippingCity;
  const billingStreet = values.shippingStreet;
  setValues(
    {
      ...values,
      billingCountry,
      billingPostalCode,
      billingCity,
      billingStreet,
    },
    false
  );
}
