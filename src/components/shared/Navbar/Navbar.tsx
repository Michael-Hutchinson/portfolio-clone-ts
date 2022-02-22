import React from 'react';
import { FaBars } from 'react-icons/fa';

import cv from '../../../images/cv.jpeg';
import Button from '../Button/Button';
import { Input, Label, Links, MobileLinks, Nav } from './Navbar.styles';

const Navbar: React.FunctionComponent = () => {
  return (
    <Nav>
      <Input id="nav-responsive" />
      <div>
        <p>Hello</p>
      </div>
      <div>
        <Label htmlFor="nav-responsive">
          <FaBars />
        </Label>
      </div>
      <MobileLinks>
        <Links href="#home">Home</Links>
        <Links href="#about">About me</Links>
        <Links href="#work">My work</Links>
        <Links href="#contact">Contact</Links>
        <Button links={cv} buttonText="Download My CV" />
      </MobileLinks>
    </Nav>
  );
};

export default Navbar;
