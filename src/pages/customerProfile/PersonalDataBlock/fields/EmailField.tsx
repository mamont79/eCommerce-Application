import { useState } from 'react';
import { makePersonalDataChangeAction } from '../../customerProfileData/makePersonalDataChangeAction';
import { actions } from '../../listOfChangeActions';
import { toggleBodyScrolling } from '../../../../components/BodyBlinder/toggleBodyScrolling';
import { CustomerEditModal } from '../../CustomerEditModal';
import { StyledBtn } from '../../../../components/styledBtn';
import getEmailErrorMsg from '../../../../components/formInputs/validation/getEmailErrorMsg';
import { StyledFieldContentWrapper } from './style';
import { ICommonPersonalDataBlockProps } from '../types';

export function EmailField({ customer }: ICommonPersonalDataBlockProps) {
  const [isShownModal, setIsShownModal] = useState<boolean>(false);
  const showModal = () => {
    toggleBodyScrolling(isShownModal);
    setIsShownModal(true);
  };
  const hideModal = () => {
    toggleBodyScrolling(isShownModal);
    setIsShownModal(false);
  };

  const [currentEmail, setCurrentEmail] = useState(customer.email);

  const saveNewEmail = () => {
    const changeAction = makePersonalDataChangeAction('email', currentEmail);
    actions.push(changeAction);
    hideModal();
  };
  return (
    <StyledFieldContentWrapper>
      <span>
        <strong>Last name:</strong> {currentEmail}
      </span>
      <StyledBtn onClick={showModal}>Edit</StyledBtn>
      {isShownModal && (
        <CustomerEditModal
          cancelEdit={hideModal}
          setCurrentValue={setCurrentEmail}
          saveValue={saveNewEmail}
          currentValue={currentEmail}
          validator={getEmailErrorMsg}
          type="email"
        />
      )}
    </StyledFieldContentWrapper>
  );
}
