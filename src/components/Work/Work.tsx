import React from 'react';

import aetc from '../../images/work/aetc-work.png';
import Title from '../shared/Title/Title';
import { ImageWrap } from './Work.styles';

const Work: React.FunctionComponent = () => {
  return (
    <section id="work">
      <Title titleText="Projects i&#39;ve built" />
      <h3>I design and build websites for clients. More work avaliable on request.</h3>
      <ImageWrap>
        <input type="image" className="modalImage" alt={aetc} src={aetc} />
      </ImageWrap>
    </section>
  );
};

export default Work;
