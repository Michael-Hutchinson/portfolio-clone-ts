import React from 'react';

import Social from '../shared/Social/Social';
import { Bottom } from './Footer.styles';

const Footer: React.FunctionComponent = () => {
  return (
    <Bottom>
      <p>Copyright © Michael Hutchinson | 2022</p>
      <Social />
    </Bottom>
  );
};

export default Footer;
