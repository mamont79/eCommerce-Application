import { Formik, Form, Field } from 'formik';

import {
  decrement,
  fetchAuthEmailToken,
  fetchAuthToken,
  fetchLoginCustomer,
  fetchRegisterCustomer,
  increment,
} from '../../features/users/usersSlice';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { StyledBtn, StyledCheckBtn } from '../../components/styledBtn';
import WelcomeWrapper from './style';
import validationEmail from './validation';

export default function Welcome() {
  const dispatch = useAppDispatch();

  const handleToken = () => {
    dispatch(fetchAuthToken());
  };
  const handleEmailToken = () => {
    dispatch(fetchAuthEmailToken());
  };
  const handleLogin = () => {
    dispatch(fetchLoginCustomer());
  };
  const handleRegistration = () => {
    dispatch(fetchRegisterCustomer());
  };

  return (
    <WelcomeWrapper>
      <h1>Hello world</h1>
      <StyledBtn>Open</StyledBtn>
      <StyledBtn $primary>Close</StyledBtn>
      <StyledBtn type="submit" onClick={handleToken}>
        Get Token
      </StyledBtn>
      <StyledBtn type="submit" onClick={handleEmailToken}>
        Get Email Token
      </StyledBtn>
      <StyledBtn type="submit" onClick={handleRegistration}>
        Register
      </StyledBtn>
      <StyledBtn type="submit" onClick={handleLogin}>
        login
      </StyledBtn>
      <StyledBtn type="submit">Get Email Token</StyledBtn>

      <StyledCheckBtn>Get Customers</StyledCheckBtn>

      <Formik
        initialValues={{
          email: '',
        }}
        onSubmit={(values) => {
          // eslint-disable-next-line no-console
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field
              name="email"
              validate={validationEmail}
              placeholder="email"
            />
            {errors.email && touched.email && <p>{errors.email}</p>}
            <StyledBtn $primary type="submit">
              Form
            </StyledBtn>
          </Form>
        )}
      </Formik>
    </WelcomeWrapper>
  );
}
