import React from 'react';
import { useSelector } from 'react-redux';
import { RootReducerType } from '../../reducer/store';
import {
  ImgDetail,
  TitleBook,
  AuthorDetail,
  DescriptionDetail,
} from './SearchModule.styles';
import {
  Container,
  SaveComment,
  Link,
  Title,
  StarContainer,
  Bar,
  Price,
} from './DetailModule.styles';
import StarBox from './StarBox';
import { Row } from '../../Components/Row';

const DetailModule: React.FC = () => {
  const { data } = useSelector((state: RootReducerType) => state.detailReducer);
  console.log(data);

  if (!data) return <div>업슴</div>;

  return (
    <Container>
      <Title>
        <h2>책 소개</h2>
      </Title>
      <ImgDetail source={data.image} />
      <TitleBook>
        <p dangerouslySetInnerHTML={{ __html: data?.title }} />
      </TitleBook>
      <AuthorDetail>
        <p dangerouslySetInnerHTML={{ __html: data?.author }} />
      </AuthorDetail>
      <StarContainer>
        <StarBox />
      </StarContainer>
      <DescriptionDetail>
        <p dangerouslySetInnerHTML={{ __html: data?.description }} />
      </DescriptionDetail>
      <Row className='al-ct js-sb'>
        <Price>
          <p>{data.price}</p>
          <p>가격</p>
        </Price>
        <Bar />
        <Price>
          <p>{data.publisher}</p>
          <p>출판사</p>
        </Price>
        <Bar />
        <Price>
          <p>{data.pubdate}</p>
          <p>출판일</p>
        </Price>
      </Row>
      <Row className='al-ct js-sb'>
        <Link>
          <a href={data.link} type='text/html' target='_blank'>
            사러가기
          </a>
        </Link>
        <SaveComment>감상평 남기기</SaveComment>
      </Row>
    </Container>
  );
};

export default DetailModule;
