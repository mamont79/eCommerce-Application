import { StyledBtn, StyledCheckBtn } from '../../components/styledBtn';
import { decrement, increment } from '../../features/users/usersSlice';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import WelcomeWrapper from './style';

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
    </WelcomeWrapper>
  );
}
