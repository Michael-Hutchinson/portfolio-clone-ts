import React from 'react';

import logo from '../../images/me.png';
import { ListItems, Logo, Wrap } from './About.styles';

const About: React.FunctionComponent = () => {
  return (
    <section id="about">
      <h2>A little more about me</h2>
      <Wrap>
        <div>
          <p>
            Experienced Web Developer with a history of working in the IT industry.
            Skilled in Web Design & Development including HTML, CSS & Javascript.
          </p>
          <p>
            Strong UX portfolio with a Master’s degree in Information Technology from
            Leeds University.
          </p>
          <p>
            If you want to know more just email me at michael-hutchinson@hotmail.co.uk or
            use the contact form at the bottom of the page.
          </p>
          <p>TL;DR? Here are a few technologies I’ve been working with recently:</p>
          <ListItems>
            <li>Javascript (ES6+)</li>
            <li>Node.js</li>
            <li>Cypress</li>
            <li>React</li>
            <li>HTML & (S)CSS</li>
            <li>XML & JSON</li>
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
