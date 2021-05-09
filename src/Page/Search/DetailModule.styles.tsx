import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
`;

export const StarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0rem 0 1.2rem 0;
`;

export const Title = styled.div`
  margin: 2rem 0;
  color: ${(props) => props.theme.colors.primary50};
`;

interface TitleProp {
  title: string;
}
export const TitleWrapper: React.FC<TitleProp> = ({ title }) => {
  return (
    <Title>
      <h2>{title}</h2>
    </Title>
  );
};

export const Link = styled.div`
  a {
    color: ${(props) => props.theme.colors.primary50};
    font-size: 1.2rem;
    text-decoration: none;
    :hover {
      color: ${(props) => props.theme.colors.primary60};
    }
  }
`;

export const SaveComment = styled.div`
  background-color: ${(props) => props.theme.colors.primary50};
  color: white;
  font-weight: bold;
  padding: 0.7em 1.5em;
  border-radius: 2rem;
  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme.colors.primary60};
  }
`;

export const Bar = styled.div`
  height: 100%;
  width: 1px;
  border-right: 1px solid ${(props) => props.theme.colors.ink20};
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem 0;

  p {
    font-weight: bold;
    font-size: 0.8rem;
    margin-bottom: 0.3rem;
    color: ${(props) => props.theme.colors.ink40};
  }
  span {
    font-size: 0.7rem;
    color: ${(props) => props.theme.colors.ink30};
  }
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
`;

export const Section = styled.section`
  position: absolute;
  bottom: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
