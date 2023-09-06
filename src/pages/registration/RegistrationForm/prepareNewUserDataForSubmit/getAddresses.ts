import { IDraftAddress } from '../../../../types/customerTypes';
import { RegistrationFormFields } from '../formFields';
import { makeAddress } from './makeAddress';

export function getAddresses(values: RegistrationFormFields): IDraftAddress[] {
  const shippingAddress = makeAddress(values);
  if (values.billingSameAsShipping) return [shippingAddress];
  const billingAddress = makeAddress(values, true);
  return [shippingAddress, billingAddress];
}
