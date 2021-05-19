import styled, { keyframes, css } from 'styled-components';

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
`;

export const TitleDetail = styled.div`
  p {
    font-size: 1rem;
    color: ${(props) => props.theme.colors.ink50};
    font-weight: bold;
    word-break: keep-all;
    width: 100%;
    text-align: left;
  }

  ${(props) => props.theme.media.phone} {
    p {
      margin-bottom: 0.2rem;
      text-align: center;
      font-size: 1.2rem;
    }
  }
`;

export const TitleBook = styled(TitleDetail)`
  p {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    overflow: hidden;
    -webkit-box-orient: vertical;
    margin-bottom: 0.2rem;
    word-break: keep-all;
    text-align: left;
  }
`;

export const AuthorBook = styled.div`
  font-size: 0.8rem;
  color: ${(props) => props.theme.colors.ink40};
  font-weight: 200;
  margin-bottom: 0.4rem;
  width: 100%;
  text-align: left;
`;

export const AuthorDetail = styled(AuthorBook)`
  color: ${(props) => props.theme.colors.ink50};
  margin: 0.3rem 0;
  text-align: center;
`;

export const ContainerButton = styled.button`
  background: transparent;

  margin: 0;
  border: none;
  outline: none;
  border-radius: ${(props) => props.theme.size.borderRadius50};
`;

export const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 82px 1fr;
  grid-gap: 1rem;

  width: 100%;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.body50};
  border-bottom: 1px solid ${(props) => props.theme.colors.border};

  ${(props) => props.theme.media.tablet} {
    padding: 1rem 3rem;
    max-width: 1000px;
  }

  :hover {
    background-color: ${(props) => props.theme.colors.body40};
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
    margin-top: 2rem;
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

const morph = keyframes`
  0%{
    opacity: 1;
  }
  50%{
    opacity: .7;
  }
  100%{
    opacity: 1;
  }
`;

const morphAnimation = css`
  animation: ${morph} 2s infinite ease-in-out;
`;

export const DummyContainer = styled(Container)`
  border-bottom: 1px solid ${(props) => props.theme.colors.dummyBorder};
`;

export const DummyImg = styled(ImgBook)`
  border-radius: ${(props) => props.theme.size.borderRadius40};
  background-color: ${(props) => props.theme.colors.dummyBG};
  ${morphAnimation}
`;

export const DummyTitle = styled(TitleBook)`
  border-radius: ${(props) => props.theme.size.borderRadius40};
  background-color: ${(props) => props.theme.colors.dummyBG};

  width: 70%;
  height: 1rem;
  ${morphAnimation}
`;

export const DummyAuthor = styled(AuthorBook)`
  border-radius: ${(props) => props.theme.size.borderRadius40};
  background-color: ${(props) => props.theme.colors.dummyBG};

  width: 100px;
  height: 1rem;
  ${morphAnimation}
`;

export const DummyDescription = styled(Description)`
  border-radius: ${(props) => props.theme.size.borderRadius40};
  background-color: ${(props) => props.theme.colors.dummyBG};

  height: 60px;
  ${morphAnimation}
`;

export const RecordDescription = styled(Description)`
  p {
    -webkit-line-clamp: 3;
  }
  &.active {
    p {
      display: flex;
      -webkit-line-clamp: none;
      overflow: visible;
    }
  }
  cursor: pointer;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1.5rem 1rem 1fr;
  grid-gap: 0.2rem;
  ${(props) => props.theme.media.tablet} {
    width: 100%;
  }
`;

export const RecordTitleBook = styled(TitleBook)`
  height: 100%;
  display: flex;
  align-items: baseline;
  justify-content: center;
  max-width: 300px;
`;
