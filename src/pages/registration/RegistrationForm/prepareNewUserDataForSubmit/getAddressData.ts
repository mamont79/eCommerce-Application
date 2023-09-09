import { ICustomerDraft } from '../../../../types/customerTypes';
import { RegistrationFormFields } from '../formFields';
import { getAddresses } from './getAddresses';

export function getAddressData(
  values: RegistrationFormFields
): Pick<
  ICustomerDraft,
  | 'addresses'
  | 'billingAddresses'
  | 'defaultBillingAddress'
  | 'defaultShippingAddress'
  | 'shippingAddresses'
> {
  const addresses = getAddresses(values);
  const shippingAddresses = [0];
  const billingAddresses = [addresses.length - 1];
  const defaultShippingAddress = values.isDefaultShippingAddress
    ? shippingAddresses[0]
    : undefined;
  const defaultBillingAddress = values.isDefaultBillingAddress
    ? billingAddresses[0]
    : undefined;
  return {
    addresses,
    billingAddresses,
    defaultBillingAddress,
    defaultShippingAddress,
    shippingAddresses,
  };
}
