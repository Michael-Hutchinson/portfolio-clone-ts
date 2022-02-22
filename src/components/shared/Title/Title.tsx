import React from 'react';

import { SubTitle } from './Title.styles';

interface ITitleProps {
  titleText: string;
}

const Title: React.FunctionComponent<ITitleProps> = ({ titleText }) => {
  return <SubTitle>{titleText}</SubTitle>;
};

export default Title;
