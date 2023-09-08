import { COUNTRIES_DATA } from '../../../../constants/countries';
import { StyledBtn } from '../../../../components/styledBtn';
import { AddressLabel } from '../AddressLabel';
import {
  StyledAddressFieldsWrapper,
  StyledAddressItemLabelsWrapper,
  StyledAddressItemWrapper,
} from './style';
import { IAddressItemProps } from './types';

export function AddressItem({
  address,
  operationsWithAddress,
  showModal,
  isBilling,
  isShipping,
  isDefaultBilling,
  isDefaultShipping,
}: IAddressItemProps) {
  const { country, city, postalCode, streetName, id } = address;

  const handleEditBtnClick = () => {
    showModal(address);
  };

  const handleRemoveBtnClick = () => {
    operationsWithAddress.removeAddress(id);
  };
  return (
    <StyledAddressItemWrapper key={id}>
      <StyledAddressItemLabelsWrapper>
        {isBilling && (
          <AddressLabel isDefault={Boolean(isDefaultBilling)} type="Billing" />
        )}
        {isShipping && (
          <AddressLabel
            isDefault={Boolean(isDefaultShipping)}
            type="Shipping"
          />
        )}
      </StyledAddressItemLabelsWrapper>

      <StyledAddressFieldsWrapper>
        <div>
          <strong>Country:</strong> {COUNTRIES_DATA[country].name}
        </div>
        <div>
          <strong>Postal code:</strong> {postalCode}
        </div>
        <div>
          <strong>City:</strong> {city}
        </div>
        <div>
          <strong>Street:</strong> {streetName}
        </div>
      </StyledAddressFieldsWrapper>

      <StyledAddressFieldsWrapper>
        <StyledBtn onClick={handleEditBtnClick}>Edit</StyledBtn>
        <StyledBtn onClick={handleRemoveBtnClick}>Remove</StyledBtn>
      </StyledAddressFieldsWrapper>
    </StyledAddressItemWrapper>
  );
}

AddressItem.defaultProps = {
  isBilling: false,
  isShipping: false,
  isDefaultBilling: false,
  isDefaultShipping: false,
};
