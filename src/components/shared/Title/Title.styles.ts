import styled from 'styled-components';

export const SubTitle = styled.h2`
  align-items: center;
  color: var(--gold);
  display: flex;
  font-size: clamp(1.625rem, 5vw, 2rem);
  font-family: var(--font-mono);
  margin: 0.625rem 0 2.5rem;
  white-space: nowrap;
  :after {
    content: '';
    display: block;
    position: relative;
    width: 12.5rem;
    height: 0.063rem;
    margin-left: 1.25rem;
    background-color: var(--light-slate);
    @media (max-width: 48rem) {
      width: 100%;
    }
  }
`;
