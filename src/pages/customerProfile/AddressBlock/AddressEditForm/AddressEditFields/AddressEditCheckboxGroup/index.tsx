import { RegistrationPageCheckbox } from '../../../../../registration/RegistrationForm/CustomFormElements/RegistrationPageCheckbox';
import { StyledCheckboxGroupWrapper } from './style';
import { IAddressEditCheckboxProps } from './types';

export function AddressEditCheckboxGroup({
  isBilling,
  values,
}: IAddressEditCheckboxProps) {
  const commonLabel = isBilling ? 'Billing' : 'Shipping';
  const commonName = isBilling ? 'billingAddress' : 'shippingAddress';
  const defaultName = isBilling ? 'defaultBilling' : 'defaultShipping';
  const isDefaultActive = isBilling
    ? values.billingAddress
    : values.shippingAddress;

  return (
    <StyledCheckboxGroupWrapper>
      <RegistrationPageCheckbox label={commonLabel} name={commonName} />
      {!isDefaultActive || (
        <RegistrationPageCheckbox label="Default" name={defaultName} />
      )}
    </StyledCheckboxGroupWrapper>
  );
}

AddressEditCheckboxGroup.defaultProps = {
  isBilling: false,
};
