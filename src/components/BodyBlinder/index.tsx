import { ReactNode } from 'react';
import { StyledBodyBlinder, StyledModalContentWrapper } from './style';

type BodyBlinderProps = {
  children: ReactNode;
};

export function BodyBlinder({ children }: BodyBlinderProps) {
  return (
    <StyledBodyBlinder>
      <StyledModalContentWrapper>{children}</StyledModalContentWrapper>
    </StyledBodyBlinder>
  );
}
