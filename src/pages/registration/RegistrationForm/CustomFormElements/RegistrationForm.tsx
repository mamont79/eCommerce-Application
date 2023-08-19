import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Form, Formik } from 'formik';
import { registrationFormFields } from '../formFields';
import { FormGroup } from '../style';
import { CustomFormikInput } from './CustomFormikInput';
import { getBirthDateErrorMsg } from '../validators/getBirthDateErrorMsg';
import { getTextErrorMsg } from '../validators/getTextErrorMsg';
import { getEmailErrorMsg } from '../validators/getEmailErrorMsg';
import { getPasswordErrorMsg } from '../validators/getPasswordErrorMsg';
import { CustomFromikCheckbox } from './CustomFormikCheckbox';
import StyledErrorMessage from '../../../../components/errorMessage/styledErrorMessage';
import { StyledBtn } from '../../../../components/styledBtn';
import { RegistrationPageAddressBlock } from './AddressBlock/RegistrationPageAddressBlock';

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
            <CustomFormikInput
              name="firstName"
              placeholder="First name"
              getValidationMsg={getTextErrorMsg}
            />
            {errors.firstName && touched.firstName && (
              <StyledErrorMessage>{errors.firstName}</StyledErrorMessage>
            )}
            <CustomFormikInput
              name="secondName"
              placeholder="Second name"
              getValidationMsg={getTextErrorMsg}
            />
            {errors.secondName && touched.secondName && (
              <StyledErrorMessage>{errors.secondName}</StyledErrorMessage>
            )}
            <CustomFormikInput
              name="birthDate"
              type="date"
              getValidationMsg={getBirthDateErrorMsg}
            />
            {errors.birthDate && touched.birthDate && (
              <StyledErrorMessage>{errors.birthDate}</StyledErrorMessage>
            )}
            <CustomFormikInput
              name="email"
              getValidationMsg={getEmailErrorMsg}
              type="email"
              placeholder="email"
            />
            {errors.email && touched.email && (
              <StyledErrorMessage>{errors.email}</StyledErrorMessage>
            )}
            <CustomFormikInput
              name="password"
              type="password"
              getValidationMsg={getPasswordErrorMsg}
            />
            {errors.password && touched.password && (
              <StyledErrorMessage>{errors.password}</StyledErrorMessage>
            )}
            <CustomFromikCheckbox
              name="userDataProcessingConsent"
              label={
                <Link to="/notFound">
                  Hereby I provide my consent for processing my personal data.
                </Link>
              }
            />
          </FormGroup>

          <RegistrationPageAddressBlock
            errors={errors}
            touched={touched}
            values={values}
            setFieldValue={setFieldValue}
          />

          <FormGroup>
            <StyledBtn type="submit">Submit</StyledBtn>
          </FormGroup>
        </StyledFormikForm>
      )}
    </Formik>
  );
}
