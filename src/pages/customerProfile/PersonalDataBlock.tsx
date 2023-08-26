import { FormGroup } from '../../components/formInputs/commonStyle';
import { ICustomerData } from '../types/userProfileDataType';
import { CustomerDataField } from './CustomerDataField';

export function PersonalDataBlock({ customer }: { customer: ICustomerData }) {
  const { firstName, lastName, dateOfBirth } = customer;
  return (
    <FormGroup>
      <CustomerDataField label="First name" value={firstName} />
      <CustomerDataField label="Last name" value={lastName} />
      <CustomerDataField label="Date of birth" value={dateOfBirth} />
    </FormGroup>
  );
}
