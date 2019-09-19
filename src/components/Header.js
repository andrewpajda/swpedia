import React from 'react';
import InlineSVG from 'react-svg-inline';
import logo from '../assets/LOGO.svg';

const Header = () => {
  return (
    <header id="header">
      <InlineSVG svg={logo} className="header-logo" />
    </header>
  );
}
 
export default Header;