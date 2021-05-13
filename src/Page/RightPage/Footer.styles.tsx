import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  height: 100%;
  display: none;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  background-color: ${(props) => props.theme.colors.body60};
  position: relative;
  padding: 0 1rem;

  ${(props) => props.theme.media.desktopM} {
    display: flex;
  }
`;

export const Wrapper = styled.div`
  display: none;
  flex-direction: column;

  ${(props) => props.theme.media.desktopXL} {
    display: flex;
  }
`;

export const SmallSpan = styled.span`
  color: ${(props) => props.theme.colors.ink30};
  font-size: 0.7rem;
`;

export const ALink = styled.span`
  a {
    display: flex;
    justify-content: flex-end;
    color: ${(props) => props.theme.colors.ink40};
    :hover {
      color: ${(props) => props.theme.colors.primary50};
    }
  }
`;

export const SmallWrapper = styled.div`
  padding: 0.6rem 1.2rem;
  text-align: right;

  h3,
  p {
    margin-bottom: 0.4rem;
  }

  p {
    color: ${(props) => props.theme.colors.ink40};
  }

  :not(:last-child) {
    padding: 1.6rem 1.2rem;
    border-bottom: 1px solid ${(props) => props.theme.colors.ink30};
  }
`;
