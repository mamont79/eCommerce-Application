import { ICustomer } from '../../../types/customerTypes';

export function getInitialAddressData({
  addresses,
  billingAddressIds,
  shippingAddressIds,
  defaultBillingAddressId,
  defaultShippingAddressId,
}: ICustomer) {
  const addressData = {
    addresses,
    billingAddressIds,
    shippingAddressIds,
    defaultBillingAddressId,
    defaultShippingAddressId,
  };
  return addressData;
}
