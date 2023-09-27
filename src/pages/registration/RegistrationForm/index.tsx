import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import { toast } from 'react-toastify';
import { RegistrationFormFields, registrationFormFields } from './formFields';
import { getBirthDateErrorMsg } from './validators/getBirthDateErrorMsg';
import { getTextErrorMsg } from './validators/getTextErrorMsg';
import { RegistrationPageCheckbox } from './CustomFormElements/RegistrationPageCheckbox';
import StyledErrorMessage from '../../../components/errorMessage/styledErrorMessage';
import { StyledPasswordInputWrapper } from '../../../components/formInputs/StyledPasswordInputWrapper';
import { StyledFormikInput } from '../../../components/StyledInput';
import { StyledBtn } from '../../../components/styledBtn';
import getEmailErrorMsg from '../../../components/formInputs/validation/getEmailErrorMsg';
import {
  FormGroup,
  StyledFormikForm,
} from '../../../components/formInputs/commonStyle';
import { RegistrationPageAddressBlock } from './CustomFormElements/AddressBlock';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { UserStatusTypes } from '../../../features/users/usersReducerTypes';
import {
  fetchRegisterCustomer,
  resetStatus,
} from '../../../features/users/usersSlice';
import { prepareNewUserDataForSubmit } from './prepareNewUserDataForSubmit';
import { toastOptions } from './toastConfig';

export function RegistrationForm() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { user, status, message } = useAppSelector((state) => state.users);

  const handleSubmit = (values: RegistrationFormFields) => {
    const newCustomerData = prepareNewUserDataForSubmit(values);
    dispatch(fetchRegisterCustomer(newCustomerData));
  };

  useEffect(() => {
    if (user && status === null) {
      navigate('/');
    } else if (status === UserStatusTypes.ERROR) {
      toast.error(message, toastOptions);
    } else if (user && status === UserStatusTypes.SUCCESS) {
      toast.success(`Welcome ${user.firstName} ${user.lastName}`, toastOptions);
      dispatch(resetStatus());
      navigate('/');
    }
  }, [user, message, status, navigate, dispatch]);

  return (
    <Formik initialValues={registrationFormFields} onSubmit={handleSubmit}>
      {({ errors, touched, setFieldValue, values }) => (
        <StyledFormikForm>
          <FormGroup>
            <StyledFormikInput
              name="firstName"
              placeholder="First name"
              validate={getTextErrorMsg}
            />
            {errors.firstName && touched.firstName && (
              <StyledErrorMessage>{errors.firstName}</StyledErrorMessage>
            )}
            <StyledFormikInput
              name="lastName"
              placeholder="Second name"
              validate={getTextErrorMsg}
            />
            {errors.lastName && touched.lastName && (
              <StyledErrorMessage>{errors.lastName}</StyledErrorMessage>
            )}
            <StyledFormikInput
              name="birthDate"
              type="date"
              validate={getBirthDateErrorMsg}
            />
            {errors.birthDate && touched.birthDate && (
              <StyledErrorMessage>{errors.birthDate}</StyledErrorMessage>
            )}
            <StyledFormikInput
              name="email"
              type="email"
              placeholder="email"
              validate={getEmailErrorMsg}
            />
            {errors.email && touched.email && (
              <StyledErrorMessage>{errors.email}</StyledErrorMessage>
            )}
            <StyledPasswordInputWrapper />
            {errors.password && touched.password && (
              <StyledErrorMessage>{errors.password}</StyledErrorMessage>
            )}
            <RegistrationPageCheckbox
              name="userDataProcessingConsent"
              label="Hereby I provide my consent for processing my personal data."
            />
          </FormGroup>

          <RegistrationPageAddressBlock
            errors={errors}
            touched={touched}
            values={values}
            setFieldValue={setFieldValue}
          />

          <FormGroup>
            <StyledBtn $primary type="submit">
              Submit
            </StyledBtn>
          </FormGroup>
        </StyledFormikForm>
      )}
    </Formik>
  );
}
