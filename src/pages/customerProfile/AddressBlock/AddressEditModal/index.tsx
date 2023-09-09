import { BodyBlinder } from '../../../../components/BodyBlinder';
import { StyledBtn } from '../../../../components/styledBtn';
import { AddressEditForm } from '../AddressEditForm';
import { StyeldModalBtnsWrapper, StyledEditedContentWrapper } from './style';
import { IAddressEditModalProps } from './types';

export function AddressEditModal({
  oldAddress,
  cancelEdit,
  operationsWithAddress,
  billingAddressIds,
  shippingAddressIds,
  defaultBillingAddressId,
  defaultShippingAddressId,
}: IAddressEditModalProps) {
  const formName = 'addressEditForm';

  const isNewAddress = !('id' in oldAddress);
  const isBilling = !isNewAddress && billingAddressIds.includes(oldAddress.id);
  const isShipping =
    !isNewAddress && shippingAddressIds.includes(oldAddress.id);
  const isDefaultBilling =
    !isNewAddress && defaultBillingAddressId === oldAddress.id;
  const isDefaultShipping =
    !isNewAddress && defaultShippingAddressId === oldAddress.id;

  return (
    <BodyBlinder>
      <StyledEditedContentWrapper>
        <AddressEditForm
          formId={formName}
          operationsWithAddress={operationsWithAddress}
          oldAddress={oldAddress}
          isBilling={isBilling}
          isShipping={isShipping}
          isDefaultBilling={isDefaultBilling}
          isDefaultShipping={isDefaultShipping}
        />
        <StyeldModalBtnsWrapper>
          <StyledBtn onClick={cancelEdit}>Cancel</StyledBtn>
          <StyledBtn type="submit" form={formName}>
            Save New Value
          </StyledBtn>
        </StyeldModalBtnsWrapper>
      </StyledEditedContentWrapper>
    </BodyBlinder>
  );
}

AddressEditModal.defaultProps = {
  isBilling: false,
  isShipping: false,
  isDefaultBilling: false,
  isDefaultShipping: false,
};
