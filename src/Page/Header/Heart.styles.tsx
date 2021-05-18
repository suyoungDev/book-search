import styled from 'styled-components';

export const HeartWrapper = styled.div`
  position: relative;
  height: 1.3rem;

  .icons {
    font-size: 1.4rem;
  }

  margin: 1rem 0 0 0;
  display: none;

  ${(props) => props.theme.media.phone} {
    display: flex;
  }

  ${(props) => props.theme.media.tablet} {
    margin: 0;
  }
`;

export const Count = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  pointer-events: none;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;

  span {
    font-size: 0.5rem;
    color: ${(props) => props.theme.colors.invert};
  }
`;
