import { StyledAddressLabel } from './style';

export function AddressLabel({
  type,
  isDefault,
}: {
  type: 'Shipping' | 'Billing';
  isDefault: boolean;
}) {
  const label = isDefault ? `Default ${type}` : type;
  return <StyledAddressLabel $default={isDefault}>{label}</StyledAddressLabel>;
}
