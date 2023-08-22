import { StyledBtn } from '../../components/styledBtn';
import handleSayHello from './helpers/hello';
import WelcomeWrapper from './style';

export default function Welcome() {
  return (
    <WelcomeWrapper>
      <h1>Your Lazy Zone - for Lazy Shopping</h1>
      <StyledBtn onClick={handleSayHello}>Say hi</StyledBtn>
    </WelcomeWrapper>
  );
}
