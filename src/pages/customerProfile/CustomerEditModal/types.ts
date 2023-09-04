import { IValidator } from '../../registration/RegistrationForm/validators/types';

export type ICustomerEditModatProps = {
  cancelEdit: () => void;
  currentValue: string;
  setCurrentValue: (newValue: string) => void;
  saveValue: () => void;
  validator: IValidator;
  type: string;
};
