import styled from 'styled-components';

export const LeftWrapper = styled.div`
  display: none;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.body60};
  border-right: 1px solid ${(props) => props.theme.colors.border};
  position: relative;

  ${(props) => props.theme.media.tablet} {
    display: flex;
    flex-direction: column;
    width: 150px;
  }
  ${(props) => props.theme.media.desktop} {
    width: 200px;
  }
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
