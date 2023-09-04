import { useState } from 'react';
import { toggleBodyScrolling } from '../../../../components/BodyBlinder/toggleBodyScrolling';
import { StyledBtn } from '../../../../components/styledBtn';
import { getTextErrorMsg } from '../../../registration/RegistrationForm/validators/getTextErrorMsg';
import { makePersonalDataChangeAction } from '../../customerProfileData/makePersonalDataChangeAction';
import { actions } from '../../listOfChangeActions';
import { CustomerEditModal } from '../../CustomerEditModal';
import { StyledFieldContentWrapper } from './style';
import { type ICommonPersonalDataBlockProps } from '../types';

export function FirstNameField({ customer }: ICommonPersonalDataBlockProps) {
  const [isShownModal, setIsShownModal] = useState<boolean>(false);
  const showModal = () => {
    toggleBodyScrolling(isShownModal);
    setIsShownModal(true);
  };
  const hideModal = () => {
    toggleBodyScrolling(isShownModal);
    setIsShownModal(false);
  };

  const [currentFirstName, setCurrentFirstName] = useState(customer.firstName);

  const saveNewName = () => {
    const changeAction = makePersonalDataChangeAction(
      'firstName',
      currentFirstName
    );
    actions.push(changeAction);
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
