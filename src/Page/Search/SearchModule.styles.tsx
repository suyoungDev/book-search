import styled from 'styled-components';

interface ImgProps {
  source: string;
}

export const ImgBook = styled.div<ImgProps>`
  background-image: ${({ source }) => `url(${source})`};
  background-repeat: no-repeat;
  background-size: cover;
  width: 82px;
  height: 116px;
  margin-right: 1rem;
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

export const Container = styled.div`
  display: grid;
  grid-template-columns: 82px 1fr;
  grid-gap: 1rem;

  background-color: ${(props) => props.theme.colors.body40};
  padding: 1rem;
  border-radius: ${(props) => props.theme.size.borderRadius50};
  width: 90%;

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

export const Description = styled.div`
  p {
    color: ${(props) => props.theme.colors.ink40};
    line-height: 1rem;
    font-weight: 200;
    font-size: 0.7rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    overflow: hidden;
    -webkit-box-orient: vertical;
  }

  ${(props) => props.theme.media.tablet} {
    width: 100%;
  }
`;
