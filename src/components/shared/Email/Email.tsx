import React from 'react';

import { Wrapper } from './Email.styles';

const Email: React.FunctionComponent = () => {
  return (
    <Wrapper>
      <a href="mailto:michael-hutchinson@hotmail.co.uk">
        michael-hutchinson@hotmail.co.uk
      </a>
    </Wrapper>
  );
};

export default Email;
