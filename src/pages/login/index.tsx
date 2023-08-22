import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { Formik } from 'formik';
import { LoginLink, StyledLoginForm } from './style';
import { StyledPasswordInputWrapper } from '../../components/formInputs/StyledPasswordInputWrapper';
import StyledErrorMessage from '../../components/errorMessage/styledErrorMessage';
import { StyledFormikInput } from '../../components/styledInput';
import getEmailErrorMsg from '../../components/formInputs/validation/getEmailErrorMsg';
import getPasswordErrorMsg from '../../components/formInputs/validation/passwordValidator/getPasswordErrorMsg';
import { StyledBtn } from '../../components/styledBtn';
import { StyledPageName } from '../../components/StyledPageName';

import { FormGroup } from '../registration/RegistrationForm/style';

import { StyledPageContentWrapper } from '../registration/style';
import { StyledBtn } from '../../components/styledBtn';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { UserStatusTypes } from '../../features/users/usersReducerTypes';
import {
  fetchAuthEmailToken,
  fetchLoginMeCustomer,
} from '../../features/users/usersSlice';
import { LoginData } from '../../api/authTypes';

export default function Login() {
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
  }, [user, message, status, navigate, dispatch]);

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={(values) => {
        const userData: LoginData = {
          username: values.email,
          password: values.password,
        };

        dispatch(fetchLoginMeCustomer(userData));
        dispatch(fetchAuthEmailToken(userData));
      }}
    >
      {({ errors, touched }) => (
        <StyledPageContentWrapper>
          <StyledPageName>Glad to see you!</StyledPageName>

          <StyledLoginForm>
            <FormGroup>
              <StyledFormikInput
                name="email"
                placeholder="email"
                validate={getEmailErrorMsg}
              />
              {errors.email && touched.email && (
                <StyledErrorMessage>{errors.email}</StyledErrorMessage>
              )}
              <StyledPasswordInputWrapper>
                <StyledFormikInput
                  name="password"
                  type="password"
                  placeholder="Password"
                  validate={getPasswordErrorMsg}
                />
              </StyledPasswordInputWrapper>
              {errors.password && touched.password && (
                <StyledErrorMessage>{errors.password}</StyledErrorMessage>
              )}
              <LoginLink to="1">Forgot your password?</LoginLink>
              <StyledBtn $primary type="submit">
                Log in
              </StyledBtn>

              <LoginLink to="/registration">
                Don&apos;t have an account yet? Sign up
              </LoginLink>
            </FormGroup>
          </StyledLoginForm>

        </StyledPageContentWrapper>
      )}
    </Formik>
  );
}
