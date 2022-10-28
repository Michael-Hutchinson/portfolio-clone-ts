import React, { ReactElement, useEffect, useState } from 'react';

import Navbar from '../shared/Navbar/Navbar';
import { Top } from './Header.styles';

const Header = (): ReactElement => {
  const navClass = [];
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  if (scroll) {
    navClass.push('navBackground');
  }

  return (
    <Top className={navClass.join()}>
      <Navbar />
    </Top>
  );
};

export default Header;
