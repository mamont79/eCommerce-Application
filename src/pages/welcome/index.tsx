import { StyledButton, CheckButton } from '../../components/button';
import WelcomeWrapper from './style';

function Welcome() {
  return (
    <WelcomeWrapper>
      <h1>Hello world</h1>
      <StyledButton>Open</StyledButton>
      <StyledButton $primary>Close</StyledButton>
      <CheckButton>Check</CheckButton>
    </WelcomeWrapper>
  );
}
export default Welcome;
