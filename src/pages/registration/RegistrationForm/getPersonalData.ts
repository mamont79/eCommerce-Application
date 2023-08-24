import { RegistrationFormFields } from './formFields';

export function getPersonalData(values: RegistrationFormFields) {
  const { firstName, lastName, password, email } = values;
  return { firstName, lastName, password, email };
}
