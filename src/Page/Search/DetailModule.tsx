import React from 'react';
import { useSelector } from 'react-redux';
import { RootReducerType } from '../../reducer/store';
import { ImgDetail } from './SearchModule.styles';
import {
  Container,
  SaveComment,
  Link,
  StarContainer,
  Section,
} from './DetailModule.styles';
import StarBox from './StarBox';
import DetailSection from './section/DetailSection';
import BookTitle from './section/BookTitle';
import BookAuthor from './section/BookAuthor';
import BookDescription from './section/BookDescription';
import { StyledLink } from '../../Components/StyledLink';

const DetailModule: React.FC = () => {
  const { data } = useSelector((state: RootReducerType) => state.detailReducer);

  if (!data) return null;

  return (
    <Container>
      <ImgDetail source={data.image} />
      <BookTitle title={data.title} />
      <BookAuthor author={data.author} />
      <StarContainer>
        <StarBox />
      </StarContainer>
      <DetailSection
        price={data.price}
        publisher={data.publisher}
        pubdate={data.pubdate}
      />
      <BookDescription description={data.description} />
      <Section>
        <Link>
          <a href={data.link} type='text/html' target='_blank' rel='noreferrer'>
            사러가기
          </a>
        </Link>
        <StyledLink to={`/record/${data.isbn}`}>
          <SaveComment>감상평 남기기</SaveComment>
        </StyledLink>
      </Section>
    </Container>
  );
};

export default DetailModule;
