import styled from 'styled-components';

export const Name = styled.h5`
  color: var(--gold);
  font-family: var(--font-mono);
  margin: 0 0 0 0.25rem;
  font-size: 0.875rem;
`;

export const Title = styled.h1`
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: bold;
  margin: 0;
`;

export const SubTitle = styled.h2`
  color: var(--light-slate);
  font-size: clamp(2.5rem, 6vw, 4rem);
  margin: 0;
`;

export const Text = styled.p`
  margin: 1.25rem 0 3.125rem;
`;
