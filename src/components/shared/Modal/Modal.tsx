import React from 'react';

import { ModalButton, ModalImage, ModalOpen, Wrapper } from './Modal.styles';

interface IModalProps {
  alt: string;
  image: string;
}

const Modal: React.FunctionComponent<IModalProps> = ({ alt, image }) => {
  return (
    <Wrapper>
      <ModalOpen>
        <ModalButton defaultValue="Close" />
        <ModalImage src={image} alt={alt} />
      </ModalOpen>
    </Wrapper>
  );
};

export default Modal;
