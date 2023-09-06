import { Formik } from 'formik';
import { CountryFormikSelect } from './AddressEditFields/CountryFormikSelect';
import { CityFormikInput } from './AddressEditFields/CityFormikInput';
import { StreetNameFormikInput } from './AddressEditFields/StreetNameFormikInput';
import { PostalCodeFormikInput } from './AddressEditFields/PostalCodeFormikInput';
import { FormGroup } from '../../../../components/formInputs/commonStyle';
import { AddressEditCheckboxGroup } from './AddressEditFields/AddressEditCheckboxGroup';
import { StyledFormikCustomerDataEditForm } from './style';
import { type IAddressEditFormProps } from './type';
import { type ICustomerEditFormFields } from '../type';

export function AddressEditForm({
  id,
  oldAddress,
  operationsWithAddress,
  isBilling,
  isShipping,
  isDefaultBilling,
  isDefaultShipping,
}: IAddressEditFormProps) {
  const initialValues: ICustomerEditFormFields = {
    ...oldAddress,
    shippingAddress: Boolean(isShipping),
    billingAddress: Boolean(isBilling),
    defaultShipping: Boolean(isDefaultShipping),
    defaultBilling: Boolean(isDefaultBilling),
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={operationsWithAddress.changeAddress}
    >
      {({ errors, touched, values }) => (
        <StyledFormikCustomerDataEditForm id={id}>
          <FormGroup>
            <CountryFormikSelect />
            <PostalCodeFormikInput
              errors={errors}
              touched={touched}
              values={values}
            />
            <CityFormikInput errors={errors} touched={touched} />
            <StreetNameFormikInput errors={errors} touched={touched} />
          </FormGroup>
          <FormGroup>
            <AddressEditCheckboxGroup values={values} />
            <AddressEditCheckboxGroup values={values} isBilling />
          </FormGroup>
        </StyledFormikCustomerDataEditForm>
      )}
    </Formik>
  );
}

AddressEditForm.defaultProps = {
  isBilling: false,
  isShipping: false,
  isDefaultBilling: false,
  isDefaultShipping: false,
};
