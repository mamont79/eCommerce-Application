import { StyledBtn } from '../../../components/styledBtn';
import StyledInput from '../../../components/styledInput';
import StyledSelect from '../../../components/StyledSelect';
import { StyledForm, StyledWrapper } from './style';
import Checkbox from '../../../components/Checkobox';
import handleInput from '../validation-checks/HandleInput';
import CustomRegistrationInput from '../CustomRegistrationInput';
import isValidName from '../validation-checks/name-validation/isValidName';
import isValidDateOfBirth from '../validation-checks/date-of-birth-validation/isValidAge';
import isValidEmail from '../validation-checks/email-validation/isValidEmail';
import isValidPassword from '../validation-checks/password-validation/isValidPassword';

export default function RegistrationForm() {
  return (
    <StyledForm action="#">
      <StyledWrapper>
        <CustomRegistrationInput
          placeholder="First Name"
          type="text"
          onInput={handleInput(isValidName)}
        />
        <CustomRegistrationInput
          placeholder="Second Name"
          type="text"
          onInput={handleInput(isValidName)}
        />
        <CustomRegistrationInput
          $maxWidth="168px"
          type="date"
          onInput={handleInput(isValidDateOfBirth)}
        />
        <CustomRegistrationInput
          placeholder="E-mail"
          type="email"
          onInput={handleInput(isValidEmail)}
        />
        <CustomRegistrationInput
          placeholder="Password"
          type="password"
          onInput={handleInput(isValidPassword)}
        />
      </StyledWrapper>

      <StyledWrapper>
        <StyledWrapper>
          <StyledSelect id="country" defaultValue="country">
            <option value="country" hidden disabled>
              Country
            </option>
            <option value="de">Germany</option>
            <option value="us">United States</option>
            <option value="au">Australia</option>
            <option value="es">Spain</option>
          </StyledSelect>
          <StyledInput type="text" placeholder="City" />
          <StyledInput type="text" placeholder="Street" />
          <StyledInput $maxWidth="168px" type="text" placeholder="Index" />
        </StyledWrapper>

        <Checkbox checkboxId="same-shipping-address-checkbox">
          Billing address coincide with shipping address
        </Checkbox>

        <StyledWrapper>
          <StyledSelect id="country" defaultValue="country">
            <option value="country" hidden disabled>
              Country
            </option>
            <option value="de">Germany</option>
            <option value="us">United States</option>
            <option value="au">Australia</option>
            <option value="es">Spain</option>
          </StyledSelect>
          <StyledInput type="text" placeholder="City" />
          <StyledInput type="text" placeholder="Street" />
          <StyledInput $maxWidth="168px" type="text" placeholder="Index" />
        </StyledWrapper>
      </StyledWrapper>

      <StyledWrapper>
        <Checkbox checkboxId="user-consent-checkbox">
          <a href="2">
            Hereby I provide my consent for personal data processing
          </a>
        </Checkbox>
        <StyledBtn $primary type="submit" style={{ margin: '0' }}>
          Register
        </StyledBtn>
      </StyledWrapper>
    </StyledForm>
  );
}
