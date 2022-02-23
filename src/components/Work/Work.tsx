import React from 'react';

import abbey from '../../images/work/abbey-work.png';
import aetc from '../../images/work/aetc-work.png';
import betting from '../../images/work/betting-work.png';
import hsscp from '../../images/work/hsscp-work.png';
import leeds from '../../images/work/leeds-work.png';
import lscb from '../../images/work/lscb-work.png';
import midwife from '../../images/work/midwife-work.png';
import morality from '../../images/work/morality-work.png';
import peopletracing from '../../images/work/people-tracing-work.png';
import portfolio from '../../images/work/portfolio-work.png';
import runner from '../../images/work/runner-work.png';
import Title from '../shared/Title/Title';
import { ImageWrap } from './Work.styles';

const Work: React.FunctionComponent = () => {
  return (
    <section id="work">
      <Title titleText="Projects i&#39;ve built" />
      <h3>I design and build websites for clients. More work avaliable on request.</h3>
      <ImageWrap>
        <input type="image" className="modalImage" alt={abbey} src={abbey} />
        <input type="image" className="modalImage" alt={aetc} src={aetc} />
        <input type="image" className="modalImage" alt={betting} src={betting} />
        <input type="image" className="modalImage" alt={hsscp} src={hsscp} />
        <input type="image" className="modalImage" alt={leeds} src={leeds} />
        <input type="image" className="modalImage" alt={lscb} src={lscb} />
        <input type="image" className="modalImage" alt={midwife} src={midwife} />
        <input type="image" className="modalImage" alt={morality} src={morality} />
        <input
          type="image"
          className="modalImage"
          alt={peopletracing}
          src={peopletracing}
        />
        <input type="image" className="modalImage" alt={portfolio} src={portfolio} />
        <input type="image" className="modalImage" alt={runner} src={runner} />
      </ImageWrap>
    </section>
  );
};

export default Work;
