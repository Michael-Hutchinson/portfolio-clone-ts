import React, { ReactElement } from 'react';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

import config from '../../../data/config.json';
import { Icon, Wrapper } from './Social.styles';

const Social = (): ReactElement => {
  return (
    <Wrapper>
      <Icon>
        <li>
          <a
            href={config.socialMedia.twitter.url}
            target="_blank"
            rel="noopender noreferrer">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a
            href={config.socialMedia.github.url}
            target="_blank"
            rel="noopender noreferrer">
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            href={config.socialMedia.linkedin.url}
            target="_blank"
            rel="noopender noreferrer">
            <FaLinkedinIn />
          </a>
        </li>
      </Icon>
    </Wrapper>
  );
};

export default Social;
