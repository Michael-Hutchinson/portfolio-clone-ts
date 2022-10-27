import React, { ReactElement } from 'react';

import config from '../../data/config.json';
import Button from '../shared/Button/Button';
import { Name, SubTitle, Text, Title } from './Home.styles';

const Home = (): ReactElement => {
  return (
    <section id="home">
      <Name>{config.sections.home.title}</Name>
      <Title>{config.sections.home.h1}</Title>
      <SubTitle>{config.sections.home.h2}</SubTitle>
      <Text>{config.sections.home.p}</Text>
      <Button links="#about" buttonText="Learn more" />
    </section>
  );
};

export default Home;
