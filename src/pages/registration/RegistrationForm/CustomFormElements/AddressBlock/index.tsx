import { useEffect } from 'react';
import { Address } from './Address';
import { StyledBLockHeading } from '../../style';
import { FormGroup } from '../../../../../components/formInputs/commonStyle';
import { IRegistrationPageAddressBlockProps } from './type';
import { RegistrationPageCheckbox } from '../RegistrationPageCheckbox';

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

      <RegistrationPageCheckbox
        name="billingSameAsShipping"
        label="Billing address coincide with shipping address"
      />

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
