import styled, { css } from 'styled-components';

interface defineProps {
  readonly left?: boolean;
  readonly right?: boolean;
}

interface WrapperProps {
  readonly width: number;
  readonly maxWidth: number;
  defineWrapper: (props: defineProps) => string;
}

const defineWrapper = (props: defineProps) => {
  if (props.right) return rightWrapper;
  if (props.left) return leftWrapper;
};

const rightWrapper = css`
  border-left: 1px solid ${(props) => props.theme.colors.ink40};
`;

const leftWrapper = css`
  border-right: 1px solid ${(props) => props.theme.colors.ink40};
`;

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => width && `${width}vw`};
  max-width: ${({ maxWidth }) => `${maxWidth}px`};
  height: 100vh;

  background-color: ${(props) => props.theme.colors.body50};

  ${defineWrapper}
`;
