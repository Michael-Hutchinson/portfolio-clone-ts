import React, { ReactElement, useEffect, useState } from 'react';

import images from '../../../images';
import { ModalButton, ModalImage, ModalOpen, Wrapper } from './Modal.styles';

interface IModalProps {
  alt: string;
  image: string;
  toggleModal: (e: React.MouseEvent<HTMLInputElement>) => void;
}

const Modal = ({ alt, toggleModal }: IModalProps): ReactElement => {
  const [image, setImage] = useState<string>();
  useEffect(() => {
    images.forEach((img) => {
      if (alt === img[1]) {
        setImage(img[2]);
      }
    });
  }, [toggleModal, alt]);
  return (
    <Wrapper>
      <ModalOpen>
        <ModalButton onClick={toggleModal} defaultValue="Close" />
        <ModalImage src={image} alt={alt} />
      </ModalOpen>
    </Wrapper>
  );
};

export default Modal;
