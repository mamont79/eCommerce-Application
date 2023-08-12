import { ReactNode } from 'react';
import { StyledInput, StyledLabel } from './style';

export default function Checkbox({
  children,
  checkboxId,
}: {
  checkboxId: string;
  children: ReactNode;
}) {
  return (
    <StyledLabel htmlFor={checkboxId}>
      <StyledInput type="checkbox" id={checkboxId} />
      {children}
    </StyledLabel>
  );
}
