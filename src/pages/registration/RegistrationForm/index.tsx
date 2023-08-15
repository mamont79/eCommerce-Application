import { Link } from 'react-router-dom';
import Checkbox from '../../../components/Checkobox';
import ValidatedBirthDateInput from '../validation-chekcs/date-validation/isValidDateOfBirth';
import ValidatedEmailInput from '../validation-chekcs/email-validation/isValidEmail';
import ValidatedRegistrationName from '../validation-chekcs/name-validation/isValidName';
import ValidatedPasswordInput from '../validation-chekcs/password-validation/isValidPassword';
import { StyledBlockWrapper, StyledForm } from './style';
import { StyledBtn } from '../../../components/styledBtn';
import AddressContainer from '../validation-chekcs/Address';

export default function RegistrationForm() {
  return (
    <StyledForm action="submit">
      <StyledBlockWrapper>
        <ValidatedRegistrationName placeholder="Name" />
        <ValidatedRegistrationName placeholder="Last Name" />
        <ValidatedBirthDateInput />
        <ValidatedEmailInput />
        <ValidatedPasswordInput />
      </StyledBlockWrapper>

      <StyledBlockWrapper>
        <AddressContainer>
          <h3 style={{ margin: '0' }}>Shipping address</h3>
        </AddressContainer>
        <Checkbox checkboxId="billing-as-shipping-address-checkbox">
          Shipping and billing address coincide
        </Checkbox>
        <AddressContainer>
          <h3 style={{ margin: '0' }}>Billing address</h3>
        </AddressContainer>
      </StyledBlockWrapper>

      <StyledBlockWrapper>
        <Checkbox checkboxId="user-data-processing-consent">
          <Link to="1">
            Hereby, I provide my consent for personal data processing.
          </Link>
        </Checkbox>
        <StyledBtn $primary>Register</StyledBtn>
      </StyledBlockWrapper>
    </StyledForm>
  );
}
