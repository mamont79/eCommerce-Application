import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { Formik } from 'formik';
import { LoginLink, StyledLoginForm } from './style';
import { StyledPasswordInputWrapper } from '../../components/formInputs/StyledPasswordInputWrapper';
import StyledErrorMessage from '../../components/errorMessage/styledErrorMessage';
import getEmailErrorMsg from '../../components/formInputs/validation/getEmailErrorMsg';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { UserStatusTypes } from '../../features/users/usersReducerTypes';
import {
  fetchAuthEmailToken,
  fetchLoginMeCustomer,
  resetStatus,
} from '../../features/users/usersSlice';
import { LoginData } from '../../api/authTypes';
import { StyledPageName } from '../../components/StyledPageTitle';
import { FormGroup } from '../../components/formInputs/commonStyle';
import { StyledBtn } from '../../components/styledBtn';
import { StyledPageContentWrapper } from '../registration/style';
import { StyledFormikInput } from '../../components/StyledInput';
import { deleteMailToken } from '../../api/cookieToken';

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { user, status, message } = useAppSelector((state) => state.users);

  useEffect(() => {
    if (user && status === null) {
      navigate('/');
    } else if (status === UserStatusTypes.ERROR) {
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
    } else if (user && status === UserStatusTypes.SUCCESS) {
      toast.success(`Welcome ${user.firstName} ${user.lastName}`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      dispatch(resetStatus());
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
        deleteMailToken('mail_token');
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
              <StyledPasswordInputWrapper />
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
