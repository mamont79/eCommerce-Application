import { StyledAddressLabel } from './style';
import { IAddressLabelProps } from './types';

export function AddressLabel({ type, isDefault }: IAddressLabelProps) {
  const label = isDefault ? `Default ${type}` : type;
  return <StyledAddressLabel $default={isDefault}>{label}</StyledAddressLabel>;
}
