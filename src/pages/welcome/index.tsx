import { Button, CheckButton } from '../../components/button';
import Wrapper from './style';

export default function Welcome() {
  return (
    <Wrapper>
      <h1>Hello world</h1>
      <Button>Open</Button>
      <Button $primary>Close</Button>
      <CheckButton>Check</CheckButton>
    </Wrapper>
  );
}
