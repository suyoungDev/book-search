import React from 'react';
import PubDate from '../../DetailPage/module/PubDate';
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
import P from '../../../Components/P';

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
            <P text={title} />
          </TitleBook>
          <PubDate pubdate={pubdate} />
        </Row>
        <AuthorBook>
          <P text={author} />
        </AuthorBook>
        <Description>
          <P text={description} />
        </Description>
      </Wrapper>
    </Container>
  );
};

export default SearchModule;
