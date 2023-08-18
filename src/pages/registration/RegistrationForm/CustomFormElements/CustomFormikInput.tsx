import { IValidator } from '../validators/types';
import { StyledFormInput } from '../../../../components/styledInput';

export function CustomFormikInput({
  name,
  disabled,
  type,
  placeholder,
  getValidationMsg,
}: {
  name: string;
  disabled?: boolean;
  type?: string;
  placeholder?: string;
  getValidationMsg: IValidator;
}) {
  return (
    <StyledFormInput
      name={name}
      type={type}
      disabled={disabled}
      placeholder={placeholder}
      validate={getValidationMsg}
    />
  );
}

CustomFormikInput.defaultProps = {
  type: 'text',
  placeholder: '',
  disabled: false,
};
