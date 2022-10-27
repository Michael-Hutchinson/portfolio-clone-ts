import React, { ReactElement } from 'react';

import { ModalButton, ModalImage, ModalOpen, Wrapper } from './Modal.styles';

interface IModalProps {
  alt: string;
  image: string;
  toggleModal: (e: React.MouseEvent<HTMLInputElement>) => void;
}

const Modal = ({ alt, image, toggleModal }: IModalProps): ReactElement => {
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
