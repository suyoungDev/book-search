import styled from 'styled-components';

interface ImgProps {
  source?: string;
}

export const ImgBook = styled.div<ImgProps>`
  background-image: ${({ source }) => `url(${source})`};
  background-color: ${(props) => props.theme.colors.body30};
  background-repeat: no-repeat;
  background-size: cover;
  width: 82px;
  height: 116px;
  margin-right: 1rem;
`;

export const ImgDetail = styled(ImgBook)<ImgProps>`
  width: 164px;
  height: 232px;
  border-radius: 10px;
  margin-bottom: 1.5rem;
`;

export const TitleDetail = styled.div`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.ink50};
  font-weight: bold;
  display: -webkit-box;
  margin-bottom: 0.2rem;

  overflow: visible;
  word-break: keep-all;
`;

export const TitleBook = styled(TitleDetail)`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  overflow: hidden;
  -webkit-box-orient: vertical;
  margin-bottom: 0.2rem;
`;

export const AuthorBook = styled.div`
  font-size: 0.8rem;
  color: ${(props) => props.theme.colors.ink40};
  font-weight: 200;
  margin-bottom: 0.4rem;
`;

export const AuthorDetail = styled(AuthorBook)`
  color: ${(props) => props.theme.colors.ink50};
  margin: 0.5rem 0;
`;

export const ContainerButton = styled.button`
  display: grid;
  grid-template-columns: 82px 1fr;
  grid-gap: 1rem;
  background: transparent;

  width: 100%;
  height: 100%;
  padding: 1rem;

  margin: 0;
  border: none;
  outline: none;
  border: 3px solid transparent;
  border-radius: ${(props) => props.theme.size.borderRadius50};

  :hover {
    border: 3px solid ${(props) => props.theme.colors.hoverBorder};
  }
  :focus {
    border: 3px solid ${(props) => props.theme.colors.hoverBorder};
  }
`;

export const Container = styled.div`
  display: flex;

  background-color: ${(props) => props.theme.colors.body40};
  border-radius: ${(props) => props.theme.size.borderRadius50};

  ${(props) => props.theme.media.tablet} {
    max-width: 700px;
  }

  margin: 0 1rem;
  border-radius: ${(props) => props.theme.size.borderRadius50};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  width: 100%;

  ${(props) => props.theme.media.tablet} {
    width: 100%;
  }
`;

export const DescriptionDetail = styled.div`
  p {
    color: ${(props) => props.theme.colors.ink40};
    line-height: 1rem;
    font-weight: 200;
    font-size: 0.7rem;
  }

  ${(props) => props.theme.media.tablet} {
    width: 100%;
  }

  margin: 2rem 0;
`;

export const Description = styled(DescriptionDetail)`
  p {
    text-align: left;
    font-size: 0.66rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    overflow: hidden;
    -webkit-box-orient: vertical;
  }
  margin: 0;
`;

export const DummyWrapper = styled(Container)`
  border: 1px solid ${(props) => props.theme.colors.dummy01};
  height: 156px;

  ${(props) => props.theme.media.tablet} {
    width: 700px;
  }
`;

export const DummyImg = styled(ImgBook)`
  background: ${(props) => props.theme.colors.dummy02};
  border-radius: ${(props) => props.theme.size.borderRadius40};
`;

export const DummyTitle = styled(TitleBook)`
  background: ${(props) => props.theme.colors.dummy02};
  border-radius: ${(props) => props.theme.size.borderRadius40};
  width: 70%;
`;

export const DummyAuthor = styled(AuthorBook)`
  background: ${(props) => props.theme.colors.dummy02};
  border-radius: ${(props) => props.theme.size.borderRadius40};
  width: 100px;
  height: 1rem;
`;

export const DummyDescription = styled(Description)`
  background: ${(props) => props.theme.colors.dummy02};
  border-radius: ${(props) => props.theme.size.borderRadius40};
  height: 60px;
`;
