import styled from 'styled-components';

export const SectionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Container = styled.div`
  width: 85%;
  display: grid;
  grid-template-rows: repeat(5, minmax(1fr, 1fr));
  grid-template-areas: 'txt' 'txt' 'img' 'img' 'img';
  background-color: ${(props) => props.theme.colors.body40};
  max-width: 800px;
  border-radius: 50px;

  ${(props) => props.theme.media.phone} {
    height: 300px;

    grid-template-columns: repeat(7, minmax(20px, 1fr));
    grid-template-areas:
      '. txt txt txt txt txt'
      '. txt txt txt txt txt'
      '. txt txt txt txt txt'
      '. txt txt txt txt txt'
      '. txt txt txt txt txt';
  }

  ${(props) => props.theme.media.tablet} {
    grid-template-areas:
      'txt txt txt txt img img img'
      'txt txt txt txt img img img'
      'txt txt txt txt img img img'
      'txt txt txt txt img img img'
      'txt txt txt txt img img img'
      'txt txt txt txt img img img';
  }
`;

export const ImageContainer = styled.div`
  grid-area: img;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  ${(props) => props.theme.media.phone} {
    padding: 0;
    display: none;
  }
  ${(props) => props.theme.media.tablet} {
    display: flex;
  }
`;

export const ContextContainer = styled.div`
  grid-area: txt;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: flex-start;
  word-break: keep-all;

  ${(props) => props.theme.media.phone} {
    padding: 0;
  }

  ${(props) => props.theme.media.tablet} {
    padding: 2rem 2rem 2rem 3rem;
  }
`;

export const Title = styled.div`
  width: 100%;
  color: ${(props) => props.theme.colors.ink50};
  ${(props) => props.theme.media.phone} {
    margin-bottom: 1.2rem;
  }
`;

export const Content = styled.div`
  width: 100%;
  margin: 1rem 0 0 0;
  p {
    color: ${(props) => props.theme.colors.ink40};
    :not(:last-of-type) {
      margin-bottom: 0.5rem;
    }
  }
`;

export const Wrapper = styled.div`
  ${(props) => props.theme.media.tablet} {
    align-items: flex-start;
    justify-content: flex-start;
    h1 {
      font-size: 1.6rem;
      margin: 0;
    }
    > div {
      margin: 2rem 0;
    }
  }
`;
