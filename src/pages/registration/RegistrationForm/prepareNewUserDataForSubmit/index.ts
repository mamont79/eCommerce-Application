import { ICustomerDraft } from '../../../../types/customerTypes';
import { RegistrationFormFields } from '../formFields';
import { getAddressData } from './getAddressData';
import { getPersonalData } from './getPersonalData';

export function prepareNewUserDataForSubmit(values: RegistrationFormFields) {
  const personalData = getPersonalData(values);
  const addressData = getAddressData(values);
  const newUserData: ICustomerDraft = {
    ...personalData,
    ...addressData,
  };
  return newUserData;
}
