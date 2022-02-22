import React from 'react';

import { Cta } from './Button.styles';

interface IButtonProps {
  buttonText: string;
  links: string;
}

const Button: React.FunctionComponent<IButtonProps> = ({ buttonText, links }) => {
  return <Cta href={links}>{buttonText}</Cta>;
};

export default Button;
