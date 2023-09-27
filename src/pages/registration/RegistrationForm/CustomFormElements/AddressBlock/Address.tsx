import { StyledFormikInput } from '../../../../../components/StyledInput';
import { FormGroup } from '../../../../../components/formInputs/commonStyle';
import { CustomFormikSelect } from '../../../../../components/StyledSelect';
import StyledErrorMessage from '../../../../../components/errorMessage/styledErrorMessage';
import { makeCountryOptions } from './CountryOptions';
import { getTextErrorMsg } from '../../validators/getTextErrorMsg';
import { cancelValidate } from '../../validators/cancelValidate';
import { getRequiredErrorMsg } from '../../validators/getRequiredErrorMsg';
import { getPostalCodeValidator } from '../../validators/getPostalCodeErrorMsg';
import { type IAddressProps } from './type';
import { RegistrationPageCheckbox } from '../RegistrationPageCheckbox';
import { COUNTRIES_DATA } from '../../../../../constants/countries';

export function Address({ errors, touched, values, billing }: IAddressProps) {
  const isSame = billing && values.billingSameAsShipping;
  const countryOptions = makeCountryOptions(COUNTRIES_DATA);

  const getPostalCodeErrorMsg = getPostalCodeValidator(
    billing ? values.billingCountry : values.shippingCountry
  );

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
      <StyledFormikInput
        name={`${billing ? 'billing' : 'shipping'}PostalCode`}
        placeholder="Postal code"
        disabled={isSame}
        validate={isSame ? cancelValidate : getPostalCodeErrorMsg}
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
      <StyledFormikInput
        name={`${billing ? 'billing' : 'shipping'}City`}
        placeholder="City"
        disabled={isSame}
        validate={isSame ? cancelValidate : getTextErrorMsg}
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
      <StyledFormikInput
        name={`${billing ? 'billing' : 'shipping'}Street`}
        placeholder="Street"
        disabled={isSame}
        validate={isSame ? cancelValidate : getTextErrorMsg}
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
      <RegistrationPageCheckbox
        label={`Set as default ${billing ? 'Billing' : 'Shipping'} address`}
        name={`isDefault${billing ? 'Billing' : 'Shipping'}Address`}
      />
    </FormGroup>
  );
}

Address.defaultProps = {
  billing: false,
};
