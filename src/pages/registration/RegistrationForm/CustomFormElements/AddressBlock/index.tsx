/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect } from 'react';
import { Address } from './Address';
import { StyledBLockHeading } from '../../style';
import { FormGroup } from '../../../../../components/formInputs/commonStyle';
import { IRegistrationPageAddressBlockProps } from './type';
import { StyledFormikInput } from '../../../../../components/StyledInput';

export function RegistrationPageAddressBlock({
  errors,
  touched,
  setFieldValue,
  values,
}: IRegistrationPageAddressBlockProps) {
  useEffect(() => {
    if (values.billingSameAsShipping) {
      setFieldValue('billingCountry', values.shippingCountry, false);
      setFieldValue('billingPostalCode', values.shippingPostalCode, false);
      setFieldValue('billingCity', values.shippingCity, false);
      setFieldValue('billingStreet', values.shippingStreet, false);
    }
  }, [
    values.billingSameAsShipping,
    values.shippingCountry,
    values.shippingPostalCode,
    values.shippingCity,
    values.shippingStreet,
    setFieldValue,
  ]);

  return (
    <FormGroup>
      <StyledBLockHeading>Shipping address</StyledBLockHeading>
      <Address
        errors={errors}
        touched={touched}
        values={values}
        setFieldValue={setFieldValue}
      />

      <label>
        <StyledFormikInput type="checkbox" name="billingSameAsShipping" />
        Billing address coincide with shipping address
      </label>

      <StyledBLockHeading>Billing address</StyledBLockHeading>
      <Address
        errors={errors}
        touched={touched}
        values={values}
        setFieldValue={setFieldValue}
        billing
      />
    </FormGroup>
  );
}
