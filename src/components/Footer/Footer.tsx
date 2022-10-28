import React, { ReactElement } from 'react';

import config from '../../data/config';
import Social from '../shared/Social/Social';
import { Bottom } from './Footer.styles';

const Footer = (): ReactElement => {
  return (
    <Bottom>
      <p>{config.sections.footer.p}</p>
      <Social />
    </Bottom>
  );
};

export default Footer;
