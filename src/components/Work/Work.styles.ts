import styled from 'styled-components';

export const ImageWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1.25rem;
  z-index: 19;
  @media (max-width: 48rem) {
    display: block;
  }
`;
