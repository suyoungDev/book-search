import React from 'react';
import styled from 'styled-components';
import StarBox from './StarBox';
import PubDate from './PubDate';
import { Row } from '../../Components/Row';

interface ImgProps {
  source: string;
}

const ImgBook = styled.div<ImgProps>`
  background-image: ${({ source }) => `url(${source})`};
  background-repeat: no-repeat;
  background-size: cover;
  width: 82px;
  height: 116px;
  margin-right: 1rem;
`;

const TitleBook = styled.div`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.ink50};
  font-weight: bold;

  display: -webkit-box;
  -webkit-line-clamp: 1;
  overflow: hidden;
  -webkit-box-orient: vertical;
`;

const AuthorBook = styled.div`
  font-size: 0.8rem;
  color: ${(props) => props.theme.colors.ink40};
  font-weight: 200;
`;

const Container = styled.div`
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 116px;
  width: 100%;

  ${(props) => props.theme.media.tablet} {
    width: 100%;
  }
`;

const Description = styled.div`
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

const SearchModule = () => {
  return (
    <Container>
      <ImgBook
        source={`http://bookthumb.phinf.naver.net/cover/108/346/10834650.jpg?type=m1&udate=20160902`}
      />
      <Wrapper>
        <Row className='js-sb'>
          <TitleBook>불곰의 주식 투자 불패공식</TitleBook>
          <PubDate>20160729</PubDate>
        </Row>
        <AuthorBook>불곰</AuthorBook>
        <Description>
          <p>
            잘못된 <b>주식</b>투자 습관을 버리고, 절대로 지지 않는 투자법을
            체득하다!불곰<b>주식</b>연구소 대표 ‘불곰’이 알려 주는 세상에서 가장
            쉬운 ‘<b>주식</b>투자 불패공식’ 『불곰의 <b>주식</b>투자 불패공식』.
            불곰은 전업투자자가 아니다. 불곰<b>주식</b>연구소는 태평스럽게도 한
            달에 한 종목 정도만 추천할 따름이다. 그럼에도...
          </p>
        </Description>
        <StarBox />
      </Wrapper>
    </Container>
  );
};

export default SearchModule;
