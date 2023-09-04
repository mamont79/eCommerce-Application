import { useState } from 'react';
import { makePersonalDataChangeAction } from '../../customerProfileData/makePersonalDataChangeAction';
import { actions } from '../../listOfChangeActions';
import { toggleBodyScrolling } from '../../../../components/BodyBlinder/toggleBodyScrolling';
import { CustomerEditModal } from '../../CustomerEditModal';
import { getTextErrorMsg } from '../../../registration/RegistrationForm/validators/getTextErrorMsg';
import { StyledBtn } from '../../../../components/styledBtn';
import { StyledFieldContentWrapper } from './style';
import { type ICommonPersonalDataBlockProps } from '../types';

export function LastNameField({ customer }: ICommonPersonalDataBlockProps) {
  const [isShownModal, setIsShownModal] = useState<boolean>(false);
  const showModal = () => {
    toggleBodyScrolling(isShownModal);
    setIsShownModal(true);
  };
  const hideModal = () => {
    toggleBodyScrolling(isShownModal);
    setIsShownModal(false);
  };

  const [currentLastName, setCurrentLastName] = useState(customer.lastName);

  const saveNewName = () => {
    const changeAction = makePersonalDataChangeAction(
      'lastName',
      currentLastName
    );
    actions.push(changeAction);
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
