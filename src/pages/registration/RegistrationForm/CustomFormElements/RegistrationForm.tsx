import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Form, Formik } from 'formik';
import { registrationFormFields } from '../formFields';
import { getBirthDateErrorMsg } from '../validators/getBirthDateErrorMsg';
import { getTextErrorMsg } from '../validators/getTextErrorMsg';
import { FormGroup } from '../style';
import { CustomFormikCheckbox } from './CustomFormikCheckbox';
import StyledErrorMessage from '../../../../components/errorMessage/styledErrorMessage';
import { RegistrationPageAddressBlock } from './AddressBlock/RegistrationPageAddressBlock';
import { StyledPasswordInputWrapper } from '../../../../components/formInputs/StyledPasswordInputWrapper';
import getPasswordErrorMsg from '../../../../components/formInputs/validation/passwordValidator/getPasswordErrorMsg';
import { StyledFormikInput } from '../../../../components/StyledInput';
import { StyledBtn } from '../../../../components/styledBtn';
import getEmailErrorMsg from '../../../../components/formInputs/validation/getEmailErrorMsg';

export const StyledFormikForm = styled(Form)`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export function RegistrationForm() {
  return (
    <Formik
      initialValues={registrationFormFields}
      onSubmit={(values) => {
        // eslint-disable-next-line no-console
        console.log(JSON.stringify(values, null, 2));
      }}
    >
      {({ errors, touched, setFieldValue, values }) => (
        <StyledFormikForm>
          <FormGroup>
            <StyledFormikInput
              name="firstName"
              placeholder="First name"
              validate={getTextErrorMsg}
            />
            {errors.firstName && touched.firstName && (
              <StyledErrorMessage>{errors.firstName}</StyledErrorMessage>
            )}
            <StyledFormikInput
              name="secondName"
              placeholder="Second name"
              validate={getTextErrorMsg}
            />
            {errors.secondName && touched.secondName && (
              <StyledErrorMessage>{errors.secondName}</StyledErrorMessage>
            )}
            <StyledFormikInput
              name="birthDate"
              type="date"
              validate={getBirthDateErrorMsg}
            />
            {errors.birthDate && touched.birthDate && (
              <StyledErrorMessage>{errors.birthDate}</StyledErrorMessage>
            )}
            <StyledFormikInput
              name="email"
              type="email"
              placeholder="email"
              validate={getEmailErrorMsg}
            />
            {errors.email && touched.email && (
              <StyledErrorMessage>{errors.email}</StyledErrorMessage>
            )}
            <StyledPasswordInputWrapper values={values}>
              <StyledFormikInput
                name="password"
                type="password"
                placeholder="Password"
                validate={getPasswordErrorMsg}
              />
            </StyledPasswordInputWrapper>
            {errors.password && touched.password && (
              <StyledErrorMessage>{errors.password}</StyledErrorMessage>
            )}
            <CustomFormikCheckbox
              name="userDataProcessingConsent"
              label="Hereby I provide my consent for processing my personal data."
            />
          </FormGroup>

          <RegistrationPageAddressBlock
            errors={errors}
            touched={touched}
            values={values}
            setFieldValue={setFieldValue}
          />

          <FormGroup>
            <Link to="/login">Already have an account? Login!</Link>
            <StyledBtn $primary type="submit">
              Submit
            </StyledBtn>
          </FormGroup>
        </StyledFormikForm>
      )}
    </Formik>
  );
}
