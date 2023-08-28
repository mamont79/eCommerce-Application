import { StyledLabelWrapper } from './style';
import { IAddressLabelProps } from './types';

export function AddressLabel({ isBilling, isDefault }: IAddressLabelProps) {
  return (
    <StyledLabelWrapper $default={isDefault}>
      {isDefault ? 'Default' : ''}
      {isBilling ? 'Billing' : 'Shipping'}
    </StyledLabelWrapper>
  );
}

AddressLabel.defaultProps = { isBilling: false, isDefault: false };
