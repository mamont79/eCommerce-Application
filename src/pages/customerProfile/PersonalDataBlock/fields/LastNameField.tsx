import { useState } from 'react';
import { makePersonalDataChangeAction } from '../../customerProfileData/makePersonalDataChangeAction';
import { customerChangeActions } from '../../listOfChangeActions';
import { isBodyScroll } from '../../../../components/BodyBlinder/toggleBodyScrolling';
import { CustomerEditModal } from '../CustomerEditModal';
import { getTextErrorMsg } from '../../../registration/RegistrationForm/validators/getTextErrorMsg';
import { StyledBtn } from '../../../../components/styledBtn';
import { StyledFieldContentWrapper } from './style';
import { type ICommonPersonalDataBlockProps } from '../types';

export function LastNameField({ customer }: ICommonPersonalDataBlockProps) {
  const [isShownModal, setIsShownModal] = useState<boolean>(false);
  const showModal = () => {
    isBodyScroll(isShownModal);
    setIsShownModal(true);
  };
  const hideModal = () => {
    isBodyScroll(isShownModal);
    setIsShownModal(false);
  };

  const [currentLastName, setCurrentLastName] = useState(customer.lastName);

  const saveNewName = () => {
    const changeAction = makePersonalDataChangeAction(
      'lastName',
      currentLastName
    );
    customerChangeActions.addCustomerChangeAction(changeAction);
    hideModal();
  };
  return (
    <StyledFieldContentWrapper>
      <span>
        <strong>Last name:</strong> {currentLastName}
      </span>
      <StyledBtn onClick={showModal}>Edit</StyledBtn>
      {isShownModal && (
        <CustomerEditModal
          cancelEdit={hideModal}
          setCurrentValue={setCurrentLastName}
          saveValue={saveNewName}
          currentValue={currentLastName}
          validator={getTextErrorMsg}
          type="text"
        />
      )}
    </StyledFieldContentWrapper>
  );
}
