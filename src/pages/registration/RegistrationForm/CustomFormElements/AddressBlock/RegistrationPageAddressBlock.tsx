import { useState, useEffect } from 'react';
import { FormikErrors, FormikTouched } from 'formik';
import { Address } from './Address';
import { FormGroup, StyledH3 } from '../../style';
import { AddressFields, RegistrationFormValues } from '../../formFields';

export function RegistrationPageAddressBlock({
  errors,
  touched,
  setFieldValue,
  values,
}: {
  errors: FormikErrors<AddressFields>;
  touched: FormikTouched<AddressFields>;
  setFieldValue: (
    field: string,
    value: string | boolean,
    shouldValidate?: boolean
  ) => Promise<void | FormikErrors<RegistrationFormValues>>;
  values: RegistrationFormValues;
}) {
  const [isBillingSameAsShipping, setBillingSameAsShipping] =
    useState<boolean>(true);

  useEffect(() => {
    if (isBillingSameAsShipping) {
      setFieldValue('billingCountry', values.shippingCountry, false);
      setFieldValue('billingPostalCode', values.shippingPostalCode, false);
      setFieldValue('billingCity', values.shippingCity, false);
      setFieldValue('billingStreet', values.shippingStreet, false);
    }
  }, [
    isBillingSameAsShipping,
    values.shippingCountry,
    values.shippingPostalCode,
    values.shippingCity,
    values.shippingStreet,
    setFieldValue,
  ]);

  return (
    <FormGroup>
      <StyledH3>Shipping address</StyledH3>
      <Address errors={errors} touched={touched} values={values} />

      <label htmlFor="billingSameAsShipping">
        <input
          id="billingSameAsShipping"
          type="checkbox"
          checked={isBillingSameAsShipping}
          onChange={() => setBillingSameAsShipping(!isBillingSameAsShipping)}
        />
        Billing same as shipping address
      </label>

      <StyledH3>Billing address</StyledH3>
      <Address
        errors={errors}
        touched={touched}
        billing
        values={values}
        isSame={isBillingSameAsShipping}
      />
    </FormGroup>
  );
}
