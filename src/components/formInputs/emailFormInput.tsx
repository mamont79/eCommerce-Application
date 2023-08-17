import { StyledFormInput } from '../styledInput';
import getEmailErrorMsg from './validation/validationEmail';

export default function EmailFormInput() {
  return (
    <StyledFormInput
      name="email"
      validate={getEmailErrorMsg}
      placeholder="e-mail"
    />
  );
}
