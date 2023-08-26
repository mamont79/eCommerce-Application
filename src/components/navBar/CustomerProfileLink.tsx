import { Link } from 'react-router-dom';
import UserIconSvg from '../../assets/userIcon';

export function CustomerProfileLink({ isVisible }: { isVisible: boolean }) {
  if (!isVisible) return null;
  return (
    <Link to="/profile">
      <UserIconSvg color="#FFA555" />
    </Link>
  );
}
