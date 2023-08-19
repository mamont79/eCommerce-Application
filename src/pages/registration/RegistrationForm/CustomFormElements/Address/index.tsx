import { useState, useEffect } from 'react';
import { FormikErrors, FormikTouched } from 'formik';
import { FormGroup } from '../../style';
import { getTextErrorMsg } from '../../validators/getTextErrorMsg';
import { makeCountryOptions } from '../CountryOptions';
import { CustomFormikInput } from '../CustomFormikInput';
import { CustomFormikSelect } from '../CustomFormikSelect';
import { COUNTRIES_DATA } from '../constants';
import { AddressFields, RegistrationFormValues } from '../../formFields';
import { cancelValidate } from '../../validators/noValidate';
import { getRequiredErrorMsg } from '../../validators/getRequiredErrorMsg';
import StyledErrorMessage from '../../../../../components/errorMessage/styledErrorMessage';
import { getPostalCodeValidator } from '../../validators/getPostalCodeErrorMsg';

export function Address({
  isSame,
  billing,
  errors,
  touched,
  values,
}: {
  isSame?: boolean;
  errors: FormikErrors<AddressFields>;
  touched: FormikTouched<AddressFields>;
  billing?: boolean;
  values: RegistrationFormValues;
}) {
  const countryOptions = makeCountryOptions(COUNTRIES_DATA);
  const [shippingPostalCodeValidator, setShippingPostalCodeValidator] =
    useState<ReturnType<typeof getPostalCodeValidator>>(
      getPostalCodeValidator('')
    );
  const [billingPostalCodeValidator, setBillingPostalCodeValidator] = useState<
    ReturnType<typeof getPostalCodeValidator>
  >(getPostalCodeValidator(''));

  useEffect(() => {
    setShippingPostalCodeValidator(
      getPostalCodeValidator(values.shippingCountry)
    );
    setBillingPostalCodeValidator(
      getPostalCodeValidator(values.billingCountry)
    );
  }, [values.shippingCountry, values.billingCountry]);

  return (
    <FormGroup>
      <CustomFormikSelect
        name={`${billing ? 'billing' : 'shipping'}Country`}
        options={countryOptions}
        defaultOption="Country"
        disabled={isSame}
        getValidationMsg={isSame ? cancelValidate : getRequiredErrorMsg}
      />
      {billing
        ? errors.billingCountry &&
          touched.billingCountry && (
            <StyledErrorMessage>{errors.billingCountry}</StyledErrorMessage>
          )
        : errors.shippingCountry &&
          touched.shippingCountry && (
            <StyledErrorMessage>{errors.shippingCountry}</StyledErrorMessage>
          )}
      <CustomFormikInput
        name={`${billing ? 'billing' : 'shipping'}PostalCode`}
        placeholder="Postal code"
        disabled={isSame}
        getValidationMsg={
          // eslint-disable-next-line no-nested-ternary
          isSame
            ? cancelValidate
            : billing
            ? billingPostalCodeValidator
            : shippingPostalCodeValidator
        }
      />
      {billing
        ? errors.billingPostalCode &&
          touched.billingPostalCode && (
            <StyledErrorMessage>{errors.billingPostalCode}</StyledErrorMessage>
          )
        : errors.shippingPostalCode &&
          touched.shippingPostalCode && (
            <StyledErrorMessage>{errors.shippingPostalCode}</StyledErrorMessage>
          )}
      <CustomFormikInput
        name={`${billing ? 'billing' : 'shipping'}City`}
        placeholder="City"
        disabled={isSame}
        getValidationMsg={isSame ? cancelValidate : getTextErrorMsg}
      />
      {billing
        ? errors.billingCity &&
          touched.billingCity && (
            <StyledErrorMessage>{errors.billingCity}</StyledErrorMessage>
          )
        : errors.shippingCity &&
          touched.shippingCity && (
            <StyledErrorMessage>{errors.shippingCity}</StyledErrorMessage>
          )}
      <CustomFormikInput
        name={`${billing ? 'billing' : 'shipping'}Street`}
        placeholder="Street"
        disabled={isSame}
        getValidationMsg={isSame ? cancelValidate : getTextErrorMsg}
      />
      {billing
        ? errors.billingStreet &&
          touched.billingStreet && (
            <StyledErrorMessage>{errors.billingStreet}</StyledErrorMessage>
          )
        : errors.shippingStreet &&
          touched.shippingStreet && (
            <StyledErrorMessage>{errors.shippingStreet}</StyledErrorMessage>
          )}
    </FormGroup>
  );
}

Address.defaultProps = {
  billing: false,
  isSame: false,
};
