import { Formik } from 'formik';
import { StyledBtn } from '../../../../components/styledBtn';
import { StyledBtnsWrapper, StyledFormikCustomerEditForm } from './style';
import { FirstNameValidatedField } from './CustomerFormFields/FirstNameValidatedField';
import { IEditFormFields } from './CustomerFormFields/types';
import { LastNameValidatedField } from './CustomerFormFields/LastNameValidatedField';
import { DateOfBirthValidatedField } from './CustomerFormFields/DateOfBirthValidatedField';

export type CustomerEditProps = {
  cancelEdit: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  customerOldData: any;
};

export function CustomerPersonalDataEditor({
  cancelEdit,
  customerOldData,
}: CustomerEditProps) {
  const { firstName, lastName, dateOfBirth } = customerOldData.customer;

  const initialValues: IEditFormFields = {
    firstName,
    lastName,
    dateOfBirth,
  };
  return (
    <Formik
      initialValues={initialValues}
      // eslint-disable-next-line no-console
      onSubmit={(values) => console.log(values)}
    >
      {({ errors, touched }) => (
        <StyledFormikCustomerEditForm>
          <FirstNameValidatedField errors={errors} touched={touched} />
          <LastNameValidatedField errors={errors} touched={touched} />
          <DateOfBirthValidatedField errors={errors} touched={touched} />
          <StyledBtnsWrapper>
            <StyledBtn type="button" onClick={cancelEdit}>
              Cancel
            </StyledBtn>
            <StyledBtn $primary type="submit">
              Update
            </StyledBtn>
          </StyledBtnsWrapper>
        </StyledFormikCustomerEditForm>
      )}
    </Formik>
  );
}
