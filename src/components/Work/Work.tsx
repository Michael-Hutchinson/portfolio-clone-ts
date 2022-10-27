import Modal from 'components/shared/Modal/Modal';
import React, { useState } from 'react';

import config from '../../data/config.json';
import images from '../../images';
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
      <Title titleText={config.sections.work.title} />
      <h3>{config.sections.work.h3}</h3>
      <ImageWrap>
        {images.map((img) => (
          <input
            type="image"
            className="modalImage"
            onClick={toggleModal}
            key={img[0]}
            src={img[0]}
            alt={img[2]}
          />
        ))}
      </ImageWrap>
      {modal ? <Modal image={image} alt={image} toggleModal={toggleModal} /> : null}
    </section>
  );
};

export default Work;
