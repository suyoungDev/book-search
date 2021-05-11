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
  align-items: center;
  border-left: 1px solid ${(props) => props.theme.colors.border};
  min-width: 350px;
`;

export const UpperWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 8vh;
  min-height: 60px;
  background-color: ${(props) => props.theme.colors.body60};
  border-bottom: 1px solid ${(props) => props.theme.colors.border};

  &.goback {
    justify-content: flex-start;
    .icons {
      font-size: 1.2rem;
    }
  }
`;

export const ButtonWrapper = styled.div`
  margin-left: 1.2rem;
`;

export const InputWrapper = styled.div`
  margin-right: 2rem;
`;
