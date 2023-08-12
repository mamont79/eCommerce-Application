import { Link } from 'react-router-dom';
import StyledErrorPage from './style';
import ErrorIcon from '../../assets/error404Icon';

export default function NotFound() {
  return (
    <StyledErrorPage>
      <h1>Sorry, the page not found</h1>
      <Link to="/">
        <ErrorIcon />
      </Link>
      <h2>Click `404` to see more amazing things</h2>
    </StyledErrorPage>
  );
}
