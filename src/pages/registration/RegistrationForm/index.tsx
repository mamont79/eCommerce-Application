import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import { toast } from 'react-toastify';
import { RegistrationFormFields, registrationFormFields } from './formFields';
import { getBirthDateErrorMsg } from './validators/getBirthDateErrorMsg';
import { getTextErrorMsg } from './validators/getTextErrorMsg';
import { RegistrationPageCheckbox } from './CustomFormElements/CustomFormikCheckbox';
import StyledErrorMessage from '../../../components/errorMessage/styledErrorMessage';
import { StyledPasswordInputWrapper } from '../../../components/formInputs/StyledPasswordInputWrapper';
import { StyledFormikInput } from '../../../components/StyledInput';
import { StyledBtn } from '../../../components/styledBtn';
import getEmailErrorMsg from '../../../components/formInputs/validation/getEmailErrorMsg';
import {
  FormGroup,
  StyledFormikForm,
} from '../../../components/formInputs/commonStyle';
import { RegistrationPageAddressBlock } from './CustomFormElements/AddressBlock/RegistrationPageAddressBlock';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { UserStatusTypes } from '../../../features/users/usersReducerTypes';
import { INewUserData } from './CustomFormElements/requestTypes';
import { fetchRegisterCustomer } from '../../../features/users/usersSlice';

export function RegistrationForm() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { user, status, message } = useAppSelector((state) => state.users);

  useEffect(() => {
    if (status === UserStatusTypes.ERROR) {
      toast.error(message, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }

    if (status === UserStatusTypes.SUCCESS || user) {
      toast.success(
        `Welcome ${user.customer.firstName} ${user.customer.lastName}`,
        {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        }
      );
      navigate('/');
    }
  }, [user, message, status, navigate]);

  return (
    <Formik
      initialValues={registrationFormFields}
      onSubmit={(values: RegistrationFormFields) => {
        const newUserData: INewUserData = values;
        dispatch(fetchRegisterCustomer(newUserData));
      }}
    >
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
            <Link to="/login">Already have an account? Login!</Link>
            <StyledBtn $primary type="submit">
              Submit
            </StyledBtn>
          </FormGroup>
        </StyledFormikForm>
      )}
    </Formik>
  );
}
