import { ICustomerDraft } from '../../../../types/customerTypes';
import { RegistrationFormFields } from '../formFields';

export function getPersonalData(
  values: RegistrationFormFields
): Pick<
  ICustomerDraft,
  'firstName' | 'lastName' | 'email' | 'dateOfBirth' | 'password'
> {
  const { firstName, lastName, password, email, birthDate } = values;
  return { firstName, lastName, password, email, dateOfBirth: birthDate };
}
