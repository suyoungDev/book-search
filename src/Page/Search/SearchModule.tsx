import React from 'react';
import StarBox from './StarBox';
import PubDate from './section/PubDate';
import { Row } from '../../Components/Row';
import {
  Container,
  ContainerButton,
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
      <ContainerButton>
        <ImgBook source={image} />
        <Wrapper>
          <TitleBook>
            <p dangerouslySetInnerHTML={{ __html: title }} />
          </TitleBook>
          <AuthorBook>
            <p dangerouslySetInnerHTML={{ __html: author }} />
          </AuthorBook>
          <Description>
            <p dangerouslySetInnerHTML={{ __html: description }} />
          </Description>
          <Row className='js-sb al-ct'>
            <StarBox />
            <PubDate pubdate={pubdate} />
          </Row>
        </Wrapper>
      </ContainerButton>
    </Container>
  );
};

export default SearchModule;
