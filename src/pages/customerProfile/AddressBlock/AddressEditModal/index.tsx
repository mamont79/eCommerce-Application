import { BodyBlinder } from '../../../../components/BodyBlinder';
import { StyledBtn } from '../../../../components/styledBtn';
import { AddressEditForm } from '../AddressEditForm';
import { StyledEditedContentWrapper } from '../../CustomerEditModal/style';
import { StyeldModalBtnsWrapper } from './style';
import { IAddressEditModalProps } from './types';

export function AddressEditModal({
  oldAddress,
  cancelEdit,
  operationsWithAddress,
  isBilling,
  isShipping,
  isDefaultBilling,
  isDefaultShipping,
}: IAddressEditModalProps) {
  const formName = 'addressEditForm';

  return (
    <BodyBlinder>
      <StyledEditedContentWrapper>
        <AddressEditForm
          id={formName}
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
