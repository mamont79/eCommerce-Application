import { UserCreateRequestData } from '../CustomFormElements/type';
import { RegistrationFormFields } from '../formFields';
import { getAddressData } from './getAddressData';
import { getPersonalData } from './getPersonalData';

export function prepareNewUserDataForSubmit(values: RegistrationFormFields) {
  const personalData = getPersonalData(values);
  const addressData = getAddressData(values);
  const newUserData: UserCreateRequestData = {
    ...personalData,
    ...addressData,
  };
  return newUserData;
}
