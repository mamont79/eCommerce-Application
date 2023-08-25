import { NewCustomerAddressData } from '../CustomFormElements/type';
import { RegistrationFormFields } from '../formFields';
import { getAddresses } from './getAddresses';

export function getAddressData(
  values: RegistrationFormFields
): NewCustomerAddressData {
  const addresses = getAddresses(values);
  const shippingAddress = 0;
  const billingAddress = addresses.length === 2 ? 1 : 0;
  const defaultShippingAddress = values.isDefaultShippingAddress
    ? shippingAddress
    : null;
  const defaultBillingAddress = values.isDefaultBillingAddress
    ? billingAddress
    : null;
  return {
    addresses,
    billingAddress,
    defaultBillingAddress,
    defaultShippingAddress,
    shippingAddress,
  };
}
