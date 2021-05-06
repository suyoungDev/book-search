import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LandingWrapper = styled(Wrapper)`
  height: 92vh;
  overflow-y: auto;
  justify-content: flex-start;
`;

export const SmallWrapper = styled(Wrapper)`
  width: 100%;
  height: 100%;
  color: ${(props) => props.theme.colors.ink40};
`;
