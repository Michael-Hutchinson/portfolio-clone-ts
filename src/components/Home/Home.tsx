import Button from 'components/shared/Button/Button';
import React from 'react';

import { Name, SubTitle, Text, Title } from './Home.styles';

const Home: React.FunctionComponent = () => {
  return (
    <section id="home">
      <Name>Hi, my name is</Name>
      <Title>Michael Hutchinson.</Title>
      <SubTitle>I like to code things for the web.</SubTitle>
      <Text>A design-minded front-end web developer based in Manchester.</Text>
      <Button links="#about" buttonText="Learn more" />
    </section>
  );
};

export default Home;
