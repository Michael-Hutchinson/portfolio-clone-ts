interface SectionType {
  id?: string;
  title?: string;
  h1?: string;
  h2?: string;
  h3?: string;
  p?: string[];
  url?: string;
  nav?: string;
  list?: string[];
}

interface IConfigProps {
  sections: {
    home: SectionType;
    about: SectionType;
    work: SectionType;
    contact: SectionType;
    footer: SectionType;
  };
  socialMedia: {
    github: {
      url: string;
    };
    twitter: {
      url: string;
    };
    linkedin: {
      url: string;
    };
  };
  contactForm: {
    successMessage: string;
    errorMessage: string;
  };
}

const config: IConfigProps = {
  sections: {
    home: {
      id: '1',
      title: 'Hi, my name is',
      h1: 'Michael Hutchinson.',
      h2: 'I like to <code> things for the web.',
      p: ['A design-minded front-end web developer based in Manchester.'],
      url: '/#home',
      nav: 'Home',
    },
    about: {
      id: '2',
      title: 'A little more about me',
      p: [
        'Experienced Web Developer with a history of working in the IT industry. Skilled in Web Design & Development including HTML, CSS & Javascript.',
        'Strong UX portfolio with a Master’s degree in Information Technology from Leeds University.',
        'If you want to know more just email me at michael-hutchinson@hotmail.co.uk or use the contact form at the bottom of the page.',
        'TL;DR? Here are a few technologies I’ve been working with recently:',
      ],
      list: [
        'Javascript (ES6+)',
        'React',
        'Node.js',
        'HTML & (S)CSS',
        'Cypress',
        'XML & JSON',
      ],
      url: '/#about',
      nav: 'About me',
    },
    work: {
      id: '3',
      title: "Projects i've built",
      h3: 'I design and build websites for clients. More work avaliable on request.',
      url: '/#work',
      nav: 'My work',
    },
    contact: {
      id: '4',
      title: 'Get in touch',
      h3: 'If you have any questions or want to know more, please use the contact form below.',
      url: '/#contact',
      nav: 'Contact',
    },
    footer: {
      p: ['Copyright © Michael Hutchinson | 2022'],
    },
  },
  socialMedia: {
    github: {
      url: 'https://github.com/iTsHutchy',
    },
    twitter: {
      url: 'https://www.twitter.com/itshutchy2',
    },
    linkedin: {
      url: 'https://www.linkedin.com/in/mhutchinson4',
    },
  },
  contactForm: {
    successMessage: 'The email was sent sucessfully!',
    errorMessage: 'There was a problem sending your email!',
  },
};

export default config;
