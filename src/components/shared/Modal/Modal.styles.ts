import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  position: fixed;
  z-index: 99;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.9);
`;

export const ModalOpen = styled.div`
  margin: 0 auto;
  width: 80%;
`;

export const ModalImage = styled.img`
  height: auto;
  width: 100%;
`;

export const ModalButton = styled.input`
  background-color: transparent;
  border: 0.063rem solid ${({ theme }) => theme.link};
  border-radius: 0.25rem;
  color: ${({ theme }) => theme.link};
  cursor: pointer;
  display: flex;
  font-family: var(--font-sans);
  font-size: 0.75rem;
  letter-spacing: 0.1rem;
  margin: 0.625rem auto;
  outline: 0;
  padding: 0.875rem 1.563rem;
  position: relative;
  text-transform: uppercase;
  transition: all ease-in-out 0.2s;
  text-align: center;
  :hover {
    background-color: ${({ theme }) => theme.shadow};
  }
`;
