import { StyledFormInput } from '../styledInput';
import validationEmail from './validation/validationEmail';

export default function EmailFormInput() {
  return (
    <StyledFormInput
      name="email"
      validate={validationEmail}
      placeholder="e-mail"
    />
  );
}
