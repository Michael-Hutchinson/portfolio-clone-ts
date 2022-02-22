import styled from 'styled-components';

export const Cta = styled.a`
  background-color: transparent;
  border: 0.063rem solid var(--gold);
  border-radius: 0.25rem;
  color: var(--gold);
  cursor: pointer;
  display: inline-flex;
  font-family: var(--font-sans);
  font-size: 0.75rem;
  letter-spacing: 0.1rem;
  outline: 0;
  padding: 0.875rem 1.563rem;
  position: relative;
  text-transform: uppercase;
  transition: all ease-in-out 0.2s;
  :hover {
    background-color: var(--gold-shadow);
  }
`;
