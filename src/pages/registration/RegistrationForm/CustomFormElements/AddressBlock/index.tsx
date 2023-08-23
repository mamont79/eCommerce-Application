import { useState, useEffect } from 'react';
import { Address } from './Address';
import { StyledBLockHeading } from '../../style';
import { FormGroup } from '../../../../../components/formInputs/commonStyle';
import { IRegistrationPageAddressBlockProps } from './type';

export function RegistrationPageAddressBlock({
  errors,
  touched,
  setFieldValue,
  values,
}: IRegistrationPageAddressBlockProps) {
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

  function toggleBillingSameAsShipping() {
    setBillingSameAsShipping(!isBillingSameAsShipping);
  }

  return (
    <FormGroup>
      <StyledBLockHeading>Shipping address</StyledBLockHeading>
      <Address
        errors={errors}
        touched={touched}
        values={values}
        setFieldValue={setFieldValue}
      />

      <label htmlFor="billingSameAsShipping">
        <input
          id="billingSameAsShipping"
          type="checkbox"
          checked={isBillingSameAsShipping}
          onChange={toggleBillingSameAsShipping}
        />
        Billing same as shipping address
      </label>

      <StyledBLockHeading>Billing address</StyledBLockHeading>
      <Address
        errors={errors}
        touched={touched}
        values={values}
        setFieldValue={setFieldValue}
        billing
        isSame={isBillingSameAsShipping}
      />
    </FormGroup>
  );
}
