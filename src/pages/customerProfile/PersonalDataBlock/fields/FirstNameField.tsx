import { useState } from 'react';
import { isBodyScroll } from '../../../../components/BodyBlinder/toggleBodyScrolling';
import { StyledBtn } from '../../../../components/styledBtn';
import { getTextErrorMsg } from '../../../registration/RegistrationForm/validators/getTextErrorMsg';
import { makePersonalDataChangeAction } from '../../customerProfileData/makePersonalDataChangeAction';
import { CustomerEditModal } from '../CustomerEditModal';
import { StyledFieldContentWrapper } from './style';
import { type ICommonPersonalDataBlockProps } from '../types';
import { customerChangeActions } from '../../listOfChangeActions';

export function FirstNameField({ customer }: ICommonPersonalDataBlockProps) {
  const [isShownModal, setIsShownModal] = useState<boolean>(false);
  const showModal = () => {
    isBodyScroll(isShownModal);
    setIsShownModal(true);
  };
  const hideModal = () => {
    isBodyScroll(isShownModal);
    setIsShownModal(false);
  };

  const [currentFirstName, setCurrentFirstName] = useState(customer.firstName);

  const saveNewName = () => {
    const changeAction = makePersonalDataChangeAction(
      'firstName',
      currentFirstName
    );
    customerChangeActions.addCustomerChangeAction(changeAction);
    hideModal();
  };
  return (
    <StyledFieldContentWrapper>
      <span>
        <strong>First name:</strong> {currentFirstName}
      </span>
      <StyledBtn onClick={showModal}>Edit</StyledBtn>
      {isShownModal && (
        <CustomerEditModal
          cancelEdit={hideModal}
          setCurrentValue={setCurrentFirstName}
          saveValue={saveNewName}
          currentValue={currentFirstName}
          validator={getTextErrorMsg}
          type="text"
        />
      )}
    </StyledFieldContentWrapper>
  );
}
