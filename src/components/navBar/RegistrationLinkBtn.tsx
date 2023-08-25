import { Link } from 'react-router-dom';
import UserIconSvg from '../../assets/userIcon';

export function RegistrationLinkBtn({ isVisible }: { isVisible: boolean }) {
  if (!isVisible) return null;
  return (
    <Link to="/registration">
      <UserIconSvg color="#FFA555" />
    </Link>
  );
}
