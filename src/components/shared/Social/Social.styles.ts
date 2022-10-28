import styled from 'styled-components';

export const Wrapper = styled.div`
  bottom: 0;
  left: 1.25rem;
  position: fixed;
  z-index: 10;
  @media (max-width: 48rem) {
    position: relative;
    left: 0;
  }
`;

export const Icon = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
  &:after {
    background-color: ${({ theme }) => theme.text};
    content: '';
    height: 6.25rem;
    width: 0.063rem;
  }
  li {
    &:last-of-type {
      margin-bottom: 1.25rem;
    }
    a {
      color: ${({ theme }) => theme.link};
      display: flex;
      padding: 0.625rem;
      transition: all ease-in-out 0.4s;
      &:hover {
        transform: scale(1.5);
      }
    }
  }
  @media (max-width: 48rem) {
    flex-direction: row;
    justify-content: center;
    li {
      &:last-of-type {
        margin-bottom: 0;
      }  
    }
    &:after {
      height: initial;
      width: initial;
    }
`;
