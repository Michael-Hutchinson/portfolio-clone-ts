import styled from 'styled-components';

export const Cta = styled.a`
  background-color: transparent;
  border: 0.063rem solid #e3ae4a;
  border-radius: 0.25rem;
  color: #e3ae4a;
  cursor: pointer;
  display: inline-flex;
  font-family: 'Karla', sans-serif;
  font-size: 0.75rem;
  letter-spacing: 0.1rem;
  outline: 0;
  padding: 0.875rem 1.563rem;
  position: relative;
  text-transform: uppercase;
  transition: all ease-in-out 0.2s;
  :hover {
    background-color: rgba(227, 174, 74, 0.1);
  }
`;
