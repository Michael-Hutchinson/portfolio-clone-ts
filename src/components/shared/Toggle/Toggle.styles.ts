import styled from 'styled-components';

export const LightIcon = styled.div`
  align-items: center;
  display: flex;
  font-size: 0.938rem;
  height: 100%;
  justify-content: center;
  padding-right: 0.188rem;
  color: ${({ theme }) => theme.icon};
`;

export const DarkIcon = styled(LightIcon)`
  padding-right: 0;
`;
