import styled from 'styled-components';

interface WrapperProps {
  readonly width: number;
  readonly maxWidth: number;
}

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.body50};
  width: ${({ width }) => `${width}vw`};
  min-width: 200px;
  max-width: ${({ maxWidth }) => `${maxWidth}px`};
  overflow: hidden;

  ${(props) => props.theme.media.tablet} {
    display: none;
  }
`;

export const LeftWrapper = styled(Wrapper)`
  border-right: 1px solid ${(props) => props.theme.colors.ink40};
`;

export const RightWrapper = styled(Wrapper)`
  border-left: 1px solid ${(props) => props.theme.colors.ink40};
`;
