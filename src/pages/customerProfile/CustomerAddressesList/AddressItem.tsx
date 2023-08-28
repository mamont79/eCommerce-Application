import { type IAddressItem } from './type';
import { CustomerDataField } from '../CustomerDataField';
import { AddressLabel } from './AddressLabel';
import { StyledAddressListItem, StyledLabelsWrapper } from './style';

export function AddressItem({
  address,
  isBilling,
  isShipping,
  isDefaultBilling,
  isDefaultShipping,
}: IAddressItem) {
  return (
    <StyledAddressListItem key={address.id}>
      <StyledLabelsWrapper>
        {isShipping && <AddressLabel isDefault={isDefaultShipping} />}
        {isBilling && <AddressLabel isBilling isDefault={isDefaultBilling} />}
      </StyledLabelsWrapper>
      <div>
        <CustomerDataField label="Country" value={address.country} />
        <CustomerDataField label="Postal code" value={address.postalCode} />
        <CustomerDataField label="City" value={address.city} />
        <CustomerDataField label="Street" value={address.streetName} />
      </div>
    </StyledAddressListItem>
  );
}
