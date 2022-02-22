import React from 'react';

import Navbar from '../shared/Navbar/Navbar';
import { Top } from './Header.styles';

const Header: React.FunctionComponent = () => {
  return (
    <Top>
      <Navbar />
    </Top>
  );
};

export default Header;
