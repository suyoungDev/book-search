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

export const TitleBook = styled.div`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.ink50};
  font-weight: bold;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  overflow: hidden;
  -webkit-box-orient: vertical;
  height: 1.2rem;
`;

export const AuthorBook = styled.div`
  font-size: 0.8rem;
  color: ${(props) => props.theme.colors.ink40};
  font-weight: 200;
`;

export const AuthorDetail = styled(AuthorBook)`
  margin: 0.5rem 0;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 82px 1fr;
  grid-gap: 1rem;

  background-color: ${(props) => props.theme.colors.body40};
  padding: 1rem;
  border-radius: ${(props) => props.theme.size.borderRadius50};
  width: 100%;

  ${(props) => props.theme.media.tablet} {
    width: 100%;
    max-width: 700px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 116px;
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
`;

export const Description = styled(DescriptionDetail)`
  p {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    overflow: hidden;
    -webkit-box-orient: vertical;
  }
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
