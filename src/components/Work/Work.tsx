import React, { useState } from 'react';

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
import Modal from '../shared/Modal/Modal';
import Title from '../shared/Title/Title';
import { ImageWrap } from './Work.styles';

const Work: React.FunctionComponent = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [image, setImage] = useState<string>('');
  const toggleModal = (e: React.MouseEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setImage(target.alt);
    setModal(!modal);
  };
  return (
    <section id="work">
      <Title titleText="Projects i&#39;ve built" />
      <h3>I design and build websites for clients. More work avaliable on request.</h3>
      <ImageWrap>
        <input
          type="image"
          className="modalImage"
          alt={abbey}
          src={abbey}
          onClick={toggleModal}
        />
        <input
          type="image"
          className="modalImage"
          alt={aetc}
          src={aetc}
          onClick={toggleModal}
        />
        <input
          type="image"
          className="modalImage"
          alt={betting}
          src={betting}
          onClick={toggleModal}
        />
        <input
          type="image"
          className="modalImage"
          alt={hsscp}
          src={hsscp}
          onClick={toggleModal}
        />
        <input
          type="image"
          className="modalImage"
          alt={leeds}
          src={leeds}
          onClick={toggleModal}
        />
        <input
          type="image"
          className="modalImage"
          alt={lscb}
          src={lscb}
          onClick={toggleModal}
        />
        <input
          type="image"
          className="modalImage"
          alt={midwife}
          src={midwife}
          onClick={toggleModal}
        />
        <input
          type="image"
          className="modalImage"
          alt={morality}
          src={morality}
          onClick={toggleModal}
        />
        <input
          type="image"
          className="modalImage"
          alt={peopletracing}
          src={peopletracing}
          onClick={toggleModal}
        />
        <input
          type="image"
          className="modalImage"
          alt={portfolio}
          src={portfolio}
          onClick={toggleModal}
        />
        <input
          type="image"
          className="modalImage"
          alt={runner}
          src={runner}
          onClick={toggleModal}
        />
      </ImageWrap>
      {modal ? <Modal alt={image} image={image} toggleModal={toggleModal} /> : null}
    </section>
  );
};

export default Work;
