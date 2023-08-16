import { Formik, Form, Field } from 'formik';
import { StyledBtn, StyledCheckBtn } from '../../components/styledBtn';
import { decrement, increment } from '../../features/users/usersSlice';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import WelcomeWrapper from './style';
import validationEmail from './validation';

export default function Welcome() {
  const count = useAppSelector((state) => state.users.value);
  const dispatch = useAppDispatch();
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleIncrement = () => {
    dispatch(increment());
  };

  return (
    <WelcomeWrapper>
      <h1>Hello world</h1>
      <StyledBtn onClick={handleIncrement}>Open</StyledBtn>
      <StyledBtn $primary onClick={handleDecrement}>
        Close
      </StyledBtn>
      <StyledCheckBtn>Check</StyledCheckBtn>
      <p>{count}</p>

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
