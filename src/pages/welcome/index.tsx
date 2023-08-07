import { StyledButton, StyledCheckButton } from '../../components/button';
import WelcomeWrapper from './style';

function Welcome() {
  return (
    <WelcomeWrapper>
      <h1>Hello world</h1>
      <StyledButton>Open</StyledButton>
      <StyledButton $primary>Close</StyledButton>
      <StyledCheckButton>Check</StyledCheckButton>
    </WelcomeWrapper>
  );
}
export default Welcome;
