import React from 'react';
import StarBox from './StarBox';
import PubDate from './PubDate';
import { Row } from '../../Components/Row';
import {
  Container,
  ImgBook,
  Wrapper,
  TitleBook,
  AuthorBook,
  Description,
} from './SearchModule.styles';
import { Book } from '../../actions/book.actions.types';

const SearchModule: React.FC<Book> = ({
  title,
  image,
  pubdate,
  author,
  description,
}) => {
  return (
    <Container>
      <ImgBook source={image} />
      <Wrapper>
        <TitleBook>
          <p dangerouslySetInnerHTML={{ __html: title }} />
        </TitleBook>
        <AuthorBook>{author}</AuthorBook>
        <Description>
          <p dangerouslySetInnerHTML={{ __html: description }} />
        </Description>
        <Row className='js-sb'>
          <StarBox />
          <PubDate pubdate={pubdate} />
        </Row>
      </Wrapper>
    </Container>
  );
};

export default SearchModule;
