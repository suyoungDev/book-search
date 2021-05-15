import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LandingWrapper = styled(Wrapper)`
  height: 90vh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  overflow-x: hidden;

  ${(props) => props.theme.media.desktop} {
    min-width: 800px;
  }
  ::-webkit-scrollbar {
    background-color: ${(props) => props.theme.colors.body40};
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.primary50};
    border-radius: 5px;
  }
`;

export const SmallWrapper = styled(Wrapper)`
  width: 100%;
  height: 100%;
  color: ${(props) => props.theme.colors.ink40};
`;

export const PageWrapper = styled(Wrapper)`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
`;

export const ButtonWrapper = styled.div`
  margin-left: 1.2rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  ${(props) => props.theme.media.tablet} {
    margin-right: 2rem;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  font-weight: bold;
  font-size: 1.2rem;
  &.margin {
    margin-left: 1.2rem;
  }
`;
