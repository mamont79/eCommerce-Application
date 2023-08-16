import { useFormik } from 'formik';
import { FormGroup, ShortStyledInput, StyledForm, StyledH3 } from './style';
import { StyledBtn } from '../../../components/styledBtn';
import StyledInput from '../../../components/styledInput';
import { CustomStyledCheckbox } from './CustomStyledCheckbox';
import { registrationFormValues } from './formValues';
import { CountrySelect } from './CountrySelect';

export default function RegistrationForm() {
  const formik = useFormik({
    initialValues: registrationFormValues,
    onSubmit: (values) => {
      // eslint-disable-next-line no-console
      console.log(JSON.stringify(values, null, 2));
    },
  });
  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <FormGroup>
        <StyledInput
          value={formik.values.firstName}
          onChange={formik.handleChange}
          type="text"
          name="firstName"
          placeholder="First Name"
        />
        <StyledInput
          value={formik.values.secondName}
          onChange={formik.handleChange}
          type="text"
          name="secondName"
          placeholder="Second Name"
        />
        <ShortStyledInput
          value={formik.values.birthDate}
          onChange={formik.handleChange}
          type="date"
          name="birthDate"
        />
        <StyledInput
          value={formik.values.email}
          onChange={formik.handleChange}
          type="email"
          name="email"
          placeholder="E-mail"
        />
        <StyledInput
          value={formik.values.password}
          onChange={formik.handleChange}
          type="password"
          name="password"
          placeholder="Password"
        />
      </FormGroup>

      <FormGroup>
        <FormGroup>
          <StyledH3>Shipping address</StyledH3>
          <CountrySelect
            value={formik.values.shippingCountry}
            handleChange={formik.handleChange}
            name="shippingCountry"
          />
          <StyledInput
            value={formik.values.shippingPostalCode}
            onChange={formik.handleChange}
            type="text"
            name="shippingPostalCode"
            placeholder="Postal code"
          />
          <StyledInput
            value={formik.values.shippingCity}
            onChange={formik.handleChange}
            type="text"
            name="shippingCity"
            placeholder="City"
          />
          <StyledInput
            value={formik.values.shippingStreet}
            onChange={formik.handleChange}
            type="text"
            name="shippingStreet"
            placeholder="Street"
          />
        </FormGroup>

        <CustomStyledCheckbox
          name="sameBillingShipping"
          onChange={formik.handleChange}
          isChecked={formik.values.sameBillingShipping}
          label="Billing address coincide with shipping address."
        />

        <FormGroup>
          <StyledH3>Billing address</StyledH3>
          <CountrySelect
            value={
              formik.values.sameBillingShipping
                ? formik.values.shippingCountry
                : formik.values.billingCountry
            }
            handleChange={formik.handleChange}
            name="billingCountry"
          />
          <StyledInput
            value={
              formik.values.sameBillingShipping
                ? formik.values.shippingPostalCode
                : formik.values.billingPostalCode
            }
            onChange={formik.handleChange}
            type="text"
            name="billingPostalCode"
            placeholder="Postal code"
          />
          <StyledInput
            value={
              formik.values.sameBillingShipping
                ? formik.values.shippingCity
                : formik.values.billingCity
            }
            onChange={formik.handleChange}
            type="text"
            name="billingCity"
            placeholder="City"
          />
          <StyledInput
            value={
              formik.values.sameBillingShipping
                ? formik.values.shippingStreet
                : formik.values.billingStreet
            }
            onChange={formik.handleChange}
            type="text"
            name="billingStreet"
            placeholder="Street"
          />
        </FormGroup>
      </FormGroup>

      <FormGroup>
        <CustomStyledCheckbox
          label="Hereby I provide my consent for personal data processing."
          name="userDataProcessingConsent"
          isChecked={formik.values.userDataProcessingConsent}
          onChange={formik.handleChange}
        />
        <StyledBtn $primary type="submit">
          Submit
        </StyledBtn>
      </FormGroup>
    </StyledForm>
  );
}
