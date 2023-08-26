import { ICustomerAddress, ICustomerData } from '../types/userProfileDataType';
import { CustomerDataField } from './CustomerDataField';

export function AddressItem({
  address,
  isDefaultShipping,
  isDefaultBIlling,
}: {
  address: ICustomerAddress;
  isDefaultShipping: boolean;
  isDefaultBIlling: boolean;
}) {
  return (
    <li key={address.id}>
      {isDefaultShipping && <h4>Default shipping Address</h4>}
      {isDefaultBIlling && <h4>Default billing Address</h4>}
      <CustomerDataField label="Country" value={address.country} />
      <CustomerDataField label="Postal code" value={address.postalCode} />
      <CustomerDataField label="City" value={address.city} />
      <CustomerDataField label="Street" value={address.streetName} />
    </li>
  );
}

export function CustomerAddressesList({
  customer,
}: {
  customer: ICustomerData;
}) {
  const addressItems = customer.addresses.map((address) =>
    AddressItem({
      address,
      isDefaultShipping: address.id === customer.defaultShippingAddressId,
      isDefaultBIlling: address.id === customer.defaultBillingAddressId,
    })
  );
  return <ul>{addressItems}</ul>;
}
