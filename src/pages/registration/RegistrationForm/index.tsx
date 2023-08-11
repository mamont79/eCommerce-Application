import { StyledBtn } from '../../../components/styledBtn';
import StyledInput from '../../../components/styledInput';
import StyledSelect from '../../../components/StyledSelect';
import { StyledForm, StyledWrapper } from './style';
import Checkbox from '../../../components/Checkobox';

export default function RegistrationForm() {
  return (
    <StyledForm action="#">
      <StyledWrapper>
        <StyledInput placeholder="First Name" type="text" />
        <StyledInput placeholder="Second Name" type="text" />
        <StyledInput $maxWidth="168px" type="date" />
        <StyledInput placeholder="E-mail" type="email" />
        <StyledInput placeholder="Password" type="password" />
      </StyledWrapper>

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
