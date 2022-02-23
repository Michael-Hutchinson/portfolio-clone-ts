import emailjs from 'emailjs-com';
import React, { useState } from 'react';

import { Contact, Fields, InputFields, MessageBox, SendButton } from './Form.styles';

const Form: React.FunctionComponent = () => {
  const [sent, setSent] = useState<boolean>();
  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_8vvwcw6',
        'template_tjcmx0d',
        e.target,
        'user_sT5IC7cV94BXANfidUr3y',
      )
      .then(
        () => {
          setSent(true);
        },
        () => {
          setSent(false);
        },
      );
    e.target.reset();
  };

  let successMessage = '';

  if (sent) {
    successMessage = `The email was sent sucessfully!`;
  } else if (sent === false) {
    successMessage = `There was a problem sending your email!`;
  }
  return (
    <Contact className="contact-form" onSubmit={(e) => sendEmail(e)}>
      <Fields>
        <InputFields type="text" name="name" placeholder="Name" required />
        <InputFields type="email" name="email" placeholder="Email" required />
        <InputFields type="text" name="subject" placeholder="Subject" required />
      </Fields>
      <MessageBox as="textarea" rows={8} name="message" placeholder="Message" required />
      <SendButton type="submit" value="Send message" />
      <p>{successMessage}</p>
    </Contact>
  );
};

export default Form;
