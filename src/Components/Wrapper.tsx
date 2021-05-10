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
  width: 100%;

  &::-webkit-scrollbar {
    background-color: ${(props) => props.theme.colors.body40};

    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.primary50};
    border-radius: 5px;
  }
`;

export const SmallWrapper = styled(Wrapper)`
  width: 100%;
  height: 100%;
  color: ${(props) => props.theme.colors.ink40};
`;
