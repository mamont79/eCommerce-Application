import { IValidator } from '../../pages/registration/RegistrationForm/validators/types';

export type IStyledSelect = {
  disabled?: boolean;
  defaultOption: string;
  name: string;
  options: JSX.Element[];
  getValidationMsg?: IValidator;
};
