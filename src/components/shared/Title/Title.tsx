import React, { ReactElement } from 'react';

import { SubTitle } from './Title.styles';

interface ITitleProps {
  titleText?: string;
}

const Title = ({ titleText }: ITitleProps): ReactElement => {
  return <SubTitle>{titleText}</SubTitle>;
};

export default Title;
