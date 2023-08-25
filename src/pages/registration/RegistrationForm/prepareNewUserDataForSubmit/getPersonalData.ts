import { NewCustomerPersonalData } from '../CustomFormElements/type';
import { RegistrationFormFields } from '../formFields';

export function getPersonalData(
  values: RegistrationFormFields
): NewCustomerPersonalData {
  const { firstName, lastName, password, email, birthDate } = values;
  return { firstName, lastName, password, email, dateOfBirth: birthDate };
}
