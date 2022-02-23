import React from 'react';

import Form from '../../components/shared/Form/Form';
import Title from '../shared/Title/Title';

const Contact: React.FunctionComponent = () => {
  return (
    <section id="contact">
      <Title titleText="Get in touch" />
      <h3>
        If you have any questions or want to know more, please use the contact form below
      </h3>
      <Form />
    </section>
  );
};

export default Contact;
