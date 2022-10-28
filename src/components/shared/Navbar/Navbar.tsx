import React, { ReactElement } from 'react';
import { FaBars } from 'react-icons/fa';

import config from '../../../data/config';
import cv from '../../../images/cv.jpeg';
import Button from '../Button/Button';
import Toggle from '../Toggle/Toggle';
import { Input, Label, Links, MobileLinks, Nav } from './Navbar.styles';

const Navbar = (): ReactElement => {
  return (
    <Nav>
      <Input id="nav-responsive" />
      <div>
        <Toggle />
      </div>
      <div>
        <Label htmlFor="nav-responsive">
          <FaBars />
        </Label>
      </div>
      <MobileLinks>
        {Object.values(config.sections).map((link) =>
          link.url ? (
            <Links key={link.id} href={link.url}>
              {link.nav}
            </Links>
          ) : null,
        )}
        <Button links={cv} buttonText="Download My CV" />
      </MobileLinks>
    </Nav>
  );
};

export default Navbar;
