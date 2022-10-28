import styled from 'styled-components';

export const Contact = styled.form`
  position: relative;
  width: 100%;
  z-index: 19;
`;

export const Fields = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0.625rem;
  @media (max-width: 48rem) {
    display: block;
  }
`;

export const InputFields = styled.input`
  background: transparent;
  border: 0.063rem solid ${({ theme }) => theme.link};
  border-radius: 0.25rem;
  color: ${({ theme }) => theme.link};
  font-size: 0.75rem;
  height: 3.125rem;
  margin-bottom: 0.625rem;
  padding: 0.375rem 0.75rem;
  width: 100%;
  :focus {
    outline: 0;
    background-color: ${({ theme }) => theme.shadow};
  }
`;

export const MessageBox = styled(InputFields).attrs({
  as: 'textarea',
})`
  height: auto;
  padding: 0.75rem;
`;

export const SendButton = styled.input`
  background-color: transparent;
  border: 0.063rem solid ${({ theme }) => theme.link};
  border-radius: 0.25rem;
  color: ${({ theme }) => theme.link};
  cursor: pointer;
  display: flex;
  font-family: var(--font-sans);
  font-size: 0.75rem;
  letter-spacing: 0.1rem;
  margin: 0 0 0 auto;
  outline: 0;
  padding: 0.875rem 1.563rem;
  position: relative;
  text-transform: uppercase;
  transition: all ease-in-out 0.2s;
  :hover {
    background-color: ${({ theme }) => theme.shadow};
  }
`;
