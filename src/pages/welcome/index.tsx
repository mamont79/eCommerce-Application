import { Formik, Form, Field } from 'formik';
import { StyledBtn, StyledCheckBtn } from '../../components/styledBtn';
import { fetchAuthToken } from '../../features/users/usersSlice';
import { useAppDispatch } from '../../store/hooks';
import WelcomeWrapper from './style';
import validationEmail from './validation';
import { getTokenCookie } from '../../api/cookieToken';

getTokenCookie('access_token');

export default function Welcome() {
  const dispatch = useAppDispatch();

  const handleToken = () => {
    dispatch(fetchAuthToken());
  };

  return (
    <WelcomeWrapper>
      <h1>Hello world</h1>
      <StyledBtn>Open</StyledBtn>
      <StyledBtn $primary>Close</StyledBtn>
      <StyledBtn type="submit" onClick={handleToken}>
        Get Token
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
