import React, { ReactElement } from 'react';

import Form from '../../components/shared/Form/Form';
import config from '../../data/config';
import Title from '../shared/Title/Title';

const Contact = (): ReactElement => {
  return (
    <section id="contact">
      <Title titleText={config.sections.contact.title} />
      <h3>{config.sections.contact.h3}</h3>
      <Form />
    </section>
  );
};

export default Contact;
