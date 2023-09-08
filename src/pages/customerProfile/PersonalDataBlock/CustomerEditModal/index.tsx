import { ChangeEvent, useState } from 'react';
import { BodyBlinder } from '../../../../components/BodyBlinder';
import { StyledBtn } from '../../../../components/styledBtn';
import StyledErrorMessage from '../../../../components/errorMessage/styledErrorMessage';
import { StyledEditedContentWrapper } from './style';
import { type ICustomerEditModatProps } from './types';

export function CustomerEditModal({
  cancelEdit,
  currentValue,
  setCurrentValue,
  saveValue,
  validator,
  type,
}: ICustomerEditModatProps) {
  const [errorMsg, setErrorMsg] = useState<string>('');

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.value;
    setCurrentValue(newValue);
    setErrorMsg(validator(newValue));
  }
  return (
    <BodyBlinder>
      <StyledEditedContentWrapper>
        <input type={type} value={currentValue} onChange={handleChange} />
        {errorMsg && <StyledErrorMessage>{errorMsg}</StyledErrorMessage>}
        <StyledBtn onClick={cancelEdit}>Cancel</StyledBtn>
        <StyledBtn disabled={Boolean(errorMsg)} onClick={saveValue}>
          Save New Value
        </StyledBtn>
      </StyledEditedContentWrapper>
    </BodyBlinder>
  );
}
