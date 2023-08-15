import { StyledBtn, StyledCheckBtn } from '../../components/styledBtn';
import WelcomeWrapper from './style';

export default function Login() {
  return (
    <WelcomeWrapper>
      <h1>Login</h1>
      <StyledBtn>Open</StyledBtn>
      <StyledBtn $primary>Close</StyledBtn>
      <StyledCheckBtn>Check</StyledCheckBtn>
    </WelcomeWrapper>
  );
}
