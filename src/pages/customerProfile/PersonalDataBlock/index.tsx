import { FormGroup } from '../../../components/formInputs/commonStyle';
import { CustomerDataField } from '../CustomerDataField';
import { ICustomer } from '../type';
import { StyledCustomerEditBtn } from './style';

export function PersonalDataBlock({
  customer,
  startEdit,
}: ICustomer & { startEdit: () => void }) {
  const { firstName, lastName, dateOfBirth } = customer;
  return (
    <FormGroup>
      <CustomerDataField label="First name" value={firstName} />
      <CustomerDataField label="Last name" value={lastName} />
      <CustomerDataField label="Date of birth" value={dateOfBirth} />
      <StyledCustomerEditBtn type="button" onClick={startEdit}>
        Edit personal data
      </StyledCustomerEditBtn>
    </FormGroup>
  );
}
