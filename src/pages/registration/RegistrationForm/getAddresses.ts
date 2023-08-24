import { CustomerAddress } from './CustomFormElements/type';
import { RegistrationFormFields } from './formFields';
import { makeAddress } from './makeAddress';

export function getAddresses(
  values: RegistrationFormFields
): CustomerAddress[] {
  const shippingAddress = makeAddress(values);
  if (values.billingSameAsShipping) return [shippingAddress];
  const billingAddress = makeAddress(values, true);
  return [shippingAddress, billingAddress];
}
