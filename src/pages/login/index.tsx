import { Formik } from 'formik';
import { LoginLink } from './style';
import { StyledPasswordInputWrapper } from '../../components/formInputs/StyledPasswordInputWrapper';
import StyledErrorMessage from '../../components/errorMessage/styledErrorMessage';
import { StyledFormikInput } from '../../components/StyledInput';
import getEmailErrorMsg from '../../components/formInputs/validation/getEmailErrorMsg';
import getPasswordErrorMsg from '../../components/formInputs/validation/passwordValidator/getPasswordErrorMsg';
import { StyledPageName } from '../../components/StyledPageName';
import { StyledBtn } from '../../components/StyledBtn';
import { StyledPageContentWrapper } from '../style';
import {
  FormGroup,
  StyledFormikForm,
} from '../../components/formInputs/commonStyle';

export default function Login() {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={(values) => {
        // eslint-disable-next-line no-console
        console.log(values);
      }}
    >
      {({ errors, touched, values }) => (
        <StyledPageContentWrapper>
          <StyledPageName>Glad to see you!</StyledPageName>
          <StyledFormikForm>
            <FormGroup>
              <StyledFormikInput
                name="email"
                type="email"
                placeholder="email"
                validate={getEmailErrorMsg}
              />
              {errors.email && touched.email && (
                <StyledErrorMessage>{errors.email}</StyledErrorMessage>
              )}
              <StyledPasswordInputWrapper values={values}>
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
          </StyledFormikForm>
        </StyledPageContentWrapper>
      )}
    </Formik>
  );
}
