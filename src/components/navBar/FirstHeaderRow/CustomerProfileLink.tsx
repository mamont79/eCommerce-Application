import { Link } from 'react-router-dom';
import UserIconSvg from '../../../assets/userIcon';
import { StyledMenuLinkContainer, StyledMenuLinkLabel } from '../style';

interface ProfileProps {
  isVisible: boolean;
}

export function CustomerProfileLink({ isVisible }: ProfileProps) {
  if (!isVisible) return null;
  return (
    <Link to="/profile">
      <StyledMenuLinkContainer>
        <UserIconSvg color="#FFA555" />
        <StyledMenuLinkLabel>Account </StyledMenuLinkLabel>
      </StyledMenuLinkContainer>
    </Link>
  );
}
