import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Form, Formik } from 'formik';
import { registrationFormFields } from '../formFields';
import { FormGroup, StyledH3 } from '../style';
import { CustomFormikInput } from './CustomFormikInput';
import { getBirthDateErrorMsg } from '../validators/getBirthDateErrorMsg';
import { getTextErrorMsg } from '../validators/getTextErrorMsg';
import { getEmailErrorMsg } from '../validators/getEmailErrorMsg';
import { getPasswordErrorMsg } from '../validators/getPasswordErrorMsg';
import { CustomFromikCheckbox } from './CustomFormikCheckbox';
import { Address } from './Address';

export const StyledFormikForm = styled(Form)`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export function RegistrationForm() {
  const fieldNames: { [key: string]: string } = {};
  Object.keys(registrationFormFields).forEach((key) => {
    fieldNames[key] = key;
  });
  // const [isSameShippingAndBillingAddress, setSameShippingAndBillingAddress] =
  //   useState<boolean>(true);
  // function handleCheckboxClick() {
  //   setSameShippingAndBillingAddress(!isSameShippingAndBillingAddress);
  // }

  return (
    <Formik
      initialValues={registrationFormFields}
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
            <CustomFromikCheckbox
              name={fieldNames.userDataProcessingConsent}
              label={
                <Link to="/notFound">
                  Hereby I provide my consent for processing my personal data.
                </Link>
              }
            />
          </FormGroup>

          <FormGroup>
            <StyledH3>Shipping address</StyledH3>
            <Address errors={errors} touched={touched} />
            <CustomFromikCheckbox
              name="sameBillingShippingCheckbox"
              label="Billing address same as shipping address."
            />
            <StyledH3>Billing address</StyledH3>
            <Address errors={errors} touched={touched} billing />
          </FormGroup>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}
