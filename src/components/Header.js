import React from 'react';
import logo from '../assets/stackline-logo.png';

import '../css/Header.css';

const Header = () => (
  <div className="header">
    <img className="stackline-logo" src={logo} alt="stackline-logo" />
  </div>
);

export default Header;