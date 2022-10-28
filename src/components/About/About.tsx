import React, { ReactElement } from 'react';

import config from '../../data/config';
import logo from '../../images/me.png';
import Title from '../shared/Title/Title';
import { ListItems, Logo, Wrap } from './About.styles';

const About = (): ReactElement => {
  const aboutWording = config.sections.about.p;
  const techList = config.sections.about.list;
  return (
    <section id="about">
      <Title titleText={config.sections.about.title} />
      <Wrap>
        <div>
          {aboutWording?.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <ListItems>
            {techList?.map((list) => (
              <li key={list}>{list}</li>
            ))}
          </ListItems>
        </div>
        <div>
          <Logo src={logo} alt="me" />
        </div>
      </Wrap>
    </section>
  );
};

export default About;
