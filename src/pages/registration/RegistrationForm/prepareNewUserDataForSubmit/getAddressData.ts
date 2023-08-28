import { NewCustomerAddressData } from '../CustomFormElements/type';
import { RegistrationFormFields } from '../formFields';
import { getAddresses } from './getAddresses';

export function getAddressData(
  values: RegistrationFormFields
): NewCustomerAddressData {
  const addresses = getAddresses(values);
  const shippingAddresses = [0];
  const billingAddresses = [addresses.length - 1];
  const defaultShippingAddress = values.isDefaultShippingAddress
    ? shippingAddresses[0]
    : null;
  const defaultBillingAddress = values.isDefaultBillingAddress
    ? billingAddresses[0]
    : null;
  return {
    addresses,
    billingAddresses,
    defaultBillingAddress,
    defaultShippingAddress,
    shippingAddresses,
  };
}
