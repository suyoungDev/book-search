import React from 'react';
import PubDate from '../../DetailPage/section/PubDate';
import { Row } from '../../../Components/Row';
import {
  Container,
  ImgBook,
  Wrapper,
  TitleBook,
  AuthorBook,
  Description,
} from './SearchModule.styles';
import { Book } from '../../../actions/book.actions.types';

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
        <Row className='js-sb al-ct'>
          <TitleBook>
            <p dangerouslySetInnerHTML={{ __html: title }} />
          </TitleBook>
          <PubDate pubdate={pubdate} />
        </Row>
        <AuthorBook>
          <p dangerouslySetInnerHTML={{ __html: author }} />
        </AuthorBook>
        <Description>
          <p dangerouslySetInnerHTML={{ __html: description }} />
        </Description>
      </Wrapper>
    </Container>
  );
};

export default SearchModule;
