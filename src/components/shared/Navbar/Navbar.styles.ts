import styled from 'styled-components';

export const Nav = styled.nav`
  align-items: center;
  counter-reset: item -1;
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 100%;
  z-index: 99;
`;

export const MobileLinks = styled.div`
  display: flex;
  a {
    counter-increment: item 1;
    padding: 0.625rem;
    :hover {
      color: ${({ theme }) => theme.link};
    }
    &:last-of-type {
      :before {
        content '';
        margin-right: 0;
      }
    }
  :before {
    content: "0" counter(item) ".";
    margin-right: 0.313rem;
    color: ${({ theme }) => theme.link};
    text-align: right;
    font-family: var(--font-mono);
}
  }
  }
  @media (max-width: 48rem) {
    background-color: ${({ theme }) => theme.background};
    flex-direction: column;
    overflow-y: auto;
    position: absolute;
    text-align: center;
    top: 100%;
    width: 100%;
    a {
      display: block;
      padding: 0.625rem;
    }
  }
`;

export const Input = styled.input.attrs({
  type: 'checkbox',
})`
  display: none;
  @media (max-width: 48rem) {
    :not(:checked) ~ ${MobileLinks} {
      display: none;
    }
  }
`;

export const Label = styled.label`
  svg {
    display: none;
      @media (max-width: 48rem) {
        cursor: pointer;
        display: block;
        color: ${({ theme }) => theme.title};
      }
    }
  }
`;

export const Links = styled.a`
  color: ${({ theme }) => theme.title};
  font-size: 0.875rem;
  &:hover {
    color: ${({ theme }) => theme.title};
  }
`;
