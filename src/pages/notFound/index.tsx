import { Link } from 'react-router-dom';
import {
  StyledErrorPage,
  StyledErrorMessage,
  StyledErrorSolution,
  StyledIconWrapper,
} from './style';
import ErrorIcon from '../../assets/error404Icon';

export default function NotFound() {
  return (
    <StyledErrorPage>
      <StyledErrorMessage>Sorry, the page not found</StyledErrorMessage>
      <StyledIconWrapper>
        <Link to="/">
          <ErrorIcon />
        </Link>
      </StyledIconWrapper>
      <StyledErrorSolution>
        Click `404` to see more amazing things
      </StyledErrorSolution>
    </StyledErrorPage>
  );
}
