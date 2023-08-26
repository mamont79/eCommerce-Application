import { ICustomer } from '../type';
import { AddressItem } from './AddressItem';
import { StyledAddressListWrapper } from './style';

export function CustomerAddressesList({ customer }: ICustomer) {
  const addressItems = customer.addresses.map((address) =>
    AddressItem({
      address,
      isShipping: customer.shippingAddressIds.includes(address.id),
      isBilling: customer.billingAddressIds.includes(address.id),
      isDefaultShipping: address.id === customer.defaultShippingAddressId,
      isDefaultBilling: address.id === customer.defaultBillingAddressId,
    })
  );
  return <StyledAddressListWrapper>{addressItems}</StyledAddressListWrapper>;
}
