import { RegistrationPageCheckbox } from '../../../../../registration/RegistrationForm/CustomFormElements/RegistrationPageCheckbox';
import { StyledCheckboxGroupWrapper } from './style';
import { IAddressEditCheckboxProps } from './types';

export function AddressEditCheckboxGroup({
  isBilling,
}: IAddressEditCheckboxProps) {
  const commonLabel = isBilling ? 'Billing' : 'Shipping';
  const commonName = isBilling ? 'billingAddress' : 'shippingAddress';
  const defaultName = isBilling ? 'defaultBilling' : 'defaultShipping';
  return (
    <StyledCheckboxGroupWrapper>
      <RegistrationPageCheckbox label={commonLabel} name={commonName} />
      <RegistrationPageCheckbox label="Default" name={defaultName} />
    </StyledCheckboxGroupWrapper>
  );
}

AddressEditCheckboxGroup.defaultProps = {
  isBilling: false,
};
