import React, { ReactElement } from 'react';

import { Cta } from './Button.styles';

interface IButtonProps {
  buttonText: string;
  links: string;
}

const Button = ({ buttonText, links }: IButtonProps): ReactElement => {
  return <Cta href={links}>{buttonText}</Cta>;
};

export default Button;
