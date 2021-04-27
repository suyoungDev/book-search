import styled from 'styled-components';

interface WrapperProps {
  readonly width: number;
  readonly maxWidth: number;
}

const Wrapper = styled.div<WrapperProps>`
  display: none;
  flex-direction: column;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.body60};
  width: ${({ width }) => `${width}vw`};
  min-width: 200px;
  max-width: ${({ maxWidth }) => `${maxWidth}px`};
  overflow: hidden;

  ${(props) => props.theme.media.desktop} {
    display: flex;
  }
`;

export const LeftWrapper = styled.div`
  display: none;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.body60};
  border-right: 1px solid ${(props) => props.theme.colors.border};

  ${(props) => props.theme.media.desktop} {
    display: flex;
    width: 200px;
  }
  ${(props) => props.theme.media.desktopL} {
    width: 250px;
  }
`;

export const RightWrapper = styled(Wrapper)`
  border-left: 1px solid ${(props) => props.theme.colors.border};
  min-width: 350px;
`;

export const UpperWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 8vh;
  background-color: ${(props) => props.theme.colors.body60};
  border-bottom: 1px solid ${(props) => props.theme.colors.border};

  ${(props) => props.theme.media.desktop} {
    justify-content: flex-start;
  }
`;
