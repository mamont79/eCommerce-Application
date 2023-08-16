import { ChangeEventHandler } from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
  font-size: 18px;
`;

const StyledInput = styled.input`
  width: 1.11em;
  height: 1.11em;
`;

export function CustomStyledCheckbox({
  label,
  onChange,
  isChecked,
  name,
}: {
  label: string;
  onChange: ChangeEventHandler;
  isChecked: boolean;
  name: string;
}) {
  return (
    <StyledLabel>
      <StyledInput
        checked={isChecked}
        name={name}
        onChange={onChange}
        type="checkbox"
      />
      {label}
    </StyledLabel>
  );
}
