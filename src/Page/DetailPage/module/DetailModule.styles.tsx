import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  max-width: 300px;
  height: 100%;

  ${(props) => props.theme.media.tablet} {
    max-width: 500px;
  }
`;

export const Title = styled.div`
  margin: 0 0 2rem 0;
  color: ${(props) => props.theme.colors.primary50};
`;

export const Link = styled.div`
  a {
    word-break: keep-all;
    color: ${(props) => props.theme.colors.primary50};
    font-size: 0.9rem;
    text-decoration: none;
    :hover {
      color: ${(props) => props.theme.colors.primary60};
    }
    transition: color ease 0.5s;
  }

  ${(props) => props.theme.media.phone} {
    font-size: 1rem;
  }
`;

export const SaveComment = styled.div`
  word-break: keep-all;
  background-color: ${(props) => props.theme.colors.primary50};
  color: white;
  font-weight: bold;
  border-radius: 2rem;
  cursor: pointer;
  font-size: 0.9rem;
  padding: 0.7em 1.5em;

  :hover {
    transition: all ease 0.5s;
    background-color: ${(props) => props.theme.colors.primary60};
  }

  ${(props) => props.theme.media.phone} {
    font-size: 1rem;
  }
`;

export const Bar = styled.div`
  height: 100%;
  width: 1px;
  border-right: 1px solid ${(props) => props.theme.colors.ink20};
`;

export const RecordBar = styled(Bar)`
  display: none;
  margin: 0 0.5rem;
  height: 20%;

  ${(props) => props.theme.media.tablet} {
    display: flex;
  }
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem 0;
  word-break: keep-all;
  text-align: center;

  p {
    font-weight: bold;
    font-size: 0.7rem;
    margin-bottom: 0.3rem;
    color: ${(props) => props.theme.colors.ink40};
  }
  span {
    font-size: 0.6rem;
    color: ${(props) => props.theme.colors.ink30};
  }
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  max-width: 300px;
  margin: 1rem 0;
  background: ${(props) => props.theme.colors.body60};
  padding: 1rem 0.5rem;
  border-radius: 0.5rem;

  ${(props) => props.theme.media.tablet} {
    max-width: 100%;
  }
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin: 3rem 0 0 0;
  padding: 0 0 3rem 0;

  ${(props) => props.theme.media.phone} {
    flex-direction: row;
  }

  ${(props) => props.theme.media.tablet} {
    flex-direction: row;
    width: 100%;
  }
`;
