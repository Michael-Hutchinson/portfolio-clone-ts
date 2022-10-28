import emailjs from 'emailjs-com';
import React, { ReactElement, useState } from 'react';

import config from '../../../data/config';
import { Contact, Fields, InputFields, MessageBox, SendButton } from './Form.styles';

const Form = (): ReactElement => {
  const [sent, setSent] = useState<boolean | null>(null);
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    const target = e.target as HTMLFormElement;
    e.preventDefault();

    emailjs
      .sendForm(
        'service_8vvwcw6',
        'template_tjcmx0d',
        target,
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
    target.reset();
  };

  let successMessage = '';

  if (sent) {
    successMessage = `${config.contactForm.successMessage}`;
  } else if (sent === false) {
    successMessage = `${config.contactForm.errorMessage}`;
  }

  return (
    <Contact className="contact-form" onSubmit={sendEmail}>
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
