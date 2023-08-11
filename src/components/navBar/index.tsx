// import React from 'react';
import { Link } from 'react-router-dom';
import StyledNavigation from './style';
import StyledWraperHeader from './header';
import MainSvgImg from '../../assets/mainSvg';
import LoginSvgImg from '../../assets/loginSvg';

export default function NavBar() {
  return (
    <StyledWraperHeader>
      <StyledNavigation>
        <Link to="/">
          <MainSvgImg />
        </Link>
        <Link to="/login">
          <LoginSvgImg />
        </Link>
      </StyledNavigation>
    </StyledWraperHeader>
  );
}
