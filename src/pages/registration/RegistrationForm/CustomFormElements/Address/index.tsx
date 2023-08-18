import { FormikErrors, FormikTouched } from 'formik';
import { FormGroup } from '../../style';
import { getTextErrorMsg } from '../../validators/getTextErrorMsg';
import { makeCountryOptions } from '../CountryOptions';
import { CustomFormikInput } from '../CustomFormikInput';
import { CustomFormikSelect } from '../CustomFormikSelect';
import { COUNTRIES_DATA } from '../constants';
// import { getPostalCodeErrorMsg } from '../../validators/getPostalCodeErrorMsg';
import { AddressFields } from '../../formFields';
import { cancelValidate } from '../../validators/noValidate';
import { getRequiredErrorMsg } from '../../validators/getRequiredErrorMsg';
// import { setBillingAsShippingAddress } from './setBillingAsShippingAddress';

export function Address({
  billing,
  errors,
  touched,
}: {
  errors: FormikErrors<AddressFields>;
  touched: FormikTouched<AddressFields>;
  billing?: boolean;
}) {
  const countryOptions = makeCountryOptions(COUNTRIES_DATA);
  const isSame = false;

  return (
    <FormGroup>
      <CustomFormikSelect
        name={`${billing ? 'billing' : 'shipping'}Country`}
        options={countryOptions}
        defaultOption="Country"
        getValidationMsg={isSame ? cancelValidate : getRequiredErrorMsg}
        disabled={isSame}
      />
      {billing
        ? errors.billingCountry &&
          touched.billingCountry && <div>{errors.billingCountry}</div>
        : errors.shippingCountry &&
          touched.shippingCountry && <div>{errors.shippingCountry}</div>}
      {/* <CustomFormikInput
        name={`${billing ? 'billing' : 'shipping'}PostalCode`}
        placeholder="Postal code"
        getValidationMsg={getPostalCodeErrorMsg}
      /> */}
      <CustomFormikInput
        name={`${billing ? 'billing' : 'shipping'}City`}
        placeholder="City"
        disabled={isSame}
        getValidationMsg={isSame ? getTextErrorMsg : cancelValidate}
      />
      {billing
        ? errors.billingCity &&
          touched.billingCity && <div>{errors.billingCity}</div>
        : errors.shippingCity &&
          touched.shippingCity && <div>{errors.shippingCity}</div>}
      <CustomFormikInput
        name={`${billing ? 'billing' : 'shipping'}Street`}
        placeholder="Street"
        disabled={isSame}
        getValidationMsg={isSame ? getTextErrorMsg : cancelValidate}
      />
      {billing
        ? errors.billingStreet &&
          touched.billingStreet && <div>{errors.billingStreet}</div>
        : errors.shippingStreet &&
          touched.shippingStreet && <div>{errors.shippingStreet}</div>}
    </FormGroup>
  );
}

Address.defaultProps = {
  billing: false,
};
