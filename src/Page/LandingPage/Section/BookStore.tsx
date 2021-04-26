import React from 'react';
import Bg from '../../../image/bookshop.svg';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(5, minmax(20px, 1fr));
  grid-template-areas: 'txt' 'txt' 'img' 'img' 'img';
  background-color: ${(props) => props.theme.colors.body40};
  margin: 1rem;
  max-width: 800px;
  border-radius: 50px;

  ${(props) => props.theme.media.phone} {
    height: 300px;

    grid-template-columns: repeat(5, minmax(20px, 1fr));
    grid-template-areas:
      'txt txt img img img'
      'txt txt img img img'
      'txt txt img img img'
      'txt txt img img img'
      'txt txt img img img';
  }
`;

const ImageContainer = styled.div`
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

const ContextContainer = styled.div`
  grid-area: txt;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  max-width: 300px;
  margin: 2rem 0 0 0;
  text-align: flex-start;
  word-break: keep-all;

  h1 {
    color: ${(props) => props.theme.colors.ink50};
  }

  > div {
    margin: 1rem 0 0 0;
    p {
      color: ${(props) => props.theme.colors.ink40};
      :not(:last-of-type) {
        margin-bottom: 0.5rem;
      }
    }
  }
  ${(props) => props.theme.media.phone} {
    padding: 2rem;
    margin: 0 0 0 2rem;
  }

  ${(props) => props.theme.media.tablet} {
    padding: 2rem;
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

const BookStore = () => {
  return (
    <Container>
      <ContextContainer>
        <Wrapper>
          <h1>무엇이든 검색해보세요.</h1>
          <div>
            <p>새로운 책을 발견하고, 새로운 세상을 접하세요.</p>
            <p>세상의 모든 책을 읽어보세요.</p>
          </div>
        </Wrapper>
      </ContextContainer>
      <ImageContainer>
        <img src={Bg} alt='책방' width='500' />
      </ImageContainer>
    </Container>
  );
};

export default BookStore;
