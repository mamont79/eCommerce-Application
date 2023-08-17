import styled from 'styled-components';
import { Form, Formik } from 'formik';
import { registrationFormValues } from '../formFields';
import { FormGroup } from '../style';
import { CustomFormikInput } from './CustomFormikInput';
import { getBirthDateErrorMsg } from '../validators/getBirthDateErrorMsg';
import { getTextErrorMsg } from '../validators/getTextErrorMsg';
import { getEmailErrorMsg } from '../validators/getEmailErrorMsg';
import { getPasswordErrorMsg } from '../validators/getPasswordErrorMsg';
import { CustomFormikSelect } from './CustomFormikSelect';
import { makeCountryOptions } from './CountryOptions';
import { COUNTRIES_DATA } from './constants';

export const StyledFormikForm = styled(Form)`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export function RegistrationForm() {
  const fieldNames: { [key: string]: string } = {};
  Object.keys(registrationFormValues).forEach((key) => {
    fieldNames[key] = key;
  });

  return (
    <Formik
      initialValues={registrationFormValues}
      onSubmit={(values) => {
        // eslint-disable-next-line no-console
        console.log(JSON.stringify(values, null, 2));
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <FormGroup>
            <CustomFormikInput
              name={fieldNames.firstName}
              placeholder="First name"
              getValidationMsg={getTextErrorMsg}
            />
            {errors.firstName && touched.firstName && (
              <div>{errors.firstName}</div>
            )}
            <CustomFormikInput
              name={fieldNames.secondName}
              placeholder="Second name"
              getValidationMsg={getTextErrorMsg}
            />
            {errors.secondName && touched.secondName && (
              <div>{errors.secondName}</div>
            )}
            <CustomFormikInput
              name={fieldNames.birthDate}
              type="date"
              getValidationMsg={getBirthDateErrorMsg}
            />
            {errors.birthDate && touched.birthDate && (
              <div>{errors.birthDate}</div>
            )}
            <CustomFormikInput
              name={fieldNames.email}
              getValidationMsg={getEmailErrorMsg}
              type="email"
              placeholder="email"
            />
            {errors.email && touched.email && <div>{errors.email}</div>}
            <CustomFormikInput
              name={fieldNames.password}
              type="password"
              getValidationMsg={getPasswordErrorMsg}
            />
            {errors.password && touched.password && (
              <div>{errors.password}</div>
            )}
            <CustomFormikSelect
              name={fieldNames.shippingCountry}
              defaultOption="Country"
              options={makeCountryOptions(COUNTRIES_DATA)}
            />
          </FormGroup>
          <button type="submit">Sm</button>
        </Form>
      )}
    </Formik>
  );
}
