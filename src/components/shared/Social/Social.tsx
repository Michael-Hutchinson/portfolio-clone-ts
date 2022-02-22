import React from 'react';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

import { Icon, Wrapper } from './Social.styles';

const Social: React.FunctionComponent = () => {
  return (
    <Wrapper>
      <Icon>
        <li>
          <a href="twitter" target="_blank" rel="noopender noreferrer">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="github" target="_blank" rel="noopender noreferrer">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="linkedin" target="_blank" rel="noopender noreferrer">
            <FaLinkedinIn />
          </a>
        </li>
      </Icon>
    </Wrapper>
  );
};

export default Social;
