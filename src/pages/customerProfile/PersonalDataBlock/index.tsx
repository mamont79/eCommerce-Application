import { FormGroup } from '../../../components/formInputs/commonStyle';
import { CustomerDataField } from '../CustomerDataField';
import { ICustomer } from '../type';

export function PersonalDataBlock({ customer }: ICustomer) {
  const { firstName, lastName, dateOfBirth } = customer;
  return (
    <FormGroup>
      <CustomerDataField label="First name" value={firstName} />
      <CustomerDataField label="Last name" value={lastName} />
      <CustomerDataField label="Date of birth" value={dateOfBirth} />
    </FormGroup>
  );
}
