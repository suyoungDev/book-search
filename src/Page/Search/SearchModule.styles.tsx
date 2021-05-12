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
`;

export const ImgDetail = styled(ImgBook)<ImgProps>`
  width: 164px;
  height: 232px;
  border-radius: 10px;
  margin: 2rem 0;

  ${(props) => props.theme.media.tablet} {
    margin-bottom: 3rem;
  }
  ${(props) => props.theme.media.desktop} {
  }
`;

export const TitleDetail = styled.div`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.ink50};
  font-weight: bold;
  margin-bottom: 0.2rem;
  text-align: center;
  word-break: normal;
  width: 100%;

  ${(props) => props.theme.media.phone} {
    font-size: 1.2rem;
  }
`;

export const TitleBook = styled(TitleDetail)`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  overflow: hidden;
  -webkit-box-orient: vertical;
  margin-bottom: 0.2rem;
  word-break: keep-all;
  text-align: left;
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

  ${(props) => props.theme.media.tablet} {
    font-size: 1rem;
  }
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
  margin-top: 1rem;

  p {
    color: ${(props) => props.theme.colors.ink40};
    line-height: 1rem;
    font-weight: 200;
    font-size: 0.7rem;
  }

  ${(props) => props.theme.media.tablet} {
    margin-top: 3rem;
  }
`;

export const Description = styled(DescriptionDetail)`
  p {
    text-align: left;
    font-size: 0.66rem;

    width: 100%;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  margin: 0;
`;

export const DummyContainerButton = styled(ContainerButton)``;

export const DummyContainer = styled(Container)`
  border: 1px solid ${(props) => props.theme.colors.dummy01};
`;

export const DummyImg = styled(ImgBook)`
  background: ${(props) => props.theme.colors.dummy02};
  border-radius: ${(props) => props.theme.size.borderRadius40};
`;

export const DummyTitle = styled(TitleBook)`
  background: ${(props) => props.theme.colors.dummy02};
  border-radius: ${(props) => props.theme.size.borderRadius40};
  width: 70%;
  height: 1rem;
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
