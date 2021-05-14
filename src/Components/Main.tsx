import styled from 'styled-components';

export const Main = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: ${(props) => props.theme.colors.body50};
  flex-direction: row;
`;

export const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  ${(props) => props.theme.media.desktopM} {
    min-width: 1000px;
  }
`;
