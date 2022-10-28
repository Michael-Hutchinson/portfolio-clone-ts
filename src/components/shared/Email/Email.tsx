import React, { ReactElement } from 'react';

import { Wrapper } from './Email.styles';

const Email = (): ReactElement => {
  return (
    <Wrapper>
      <a href="mailto:michael-hutchinson@hotmail.co.uk">
        michael-hutchinson@hotmail.co.uk
      </a>
    </Wrapper>
  );
};

export default Email;
