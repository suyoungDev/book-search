import React from 'react';
import P from '../../../Components/P';
import { Row } from '../../../Components/Row';
import StarBox from '../../../Components/StarBox';
import PubDate from '../../DetailPage/module/PubDate';
import {
  ImgBook,
  Container,
  Wrapper,
  TitleBook,
  Description,
} from '../../SearchPage/module/SearchModule.styles';

interface Props {
  title: string;
  comment: string;
  image: string;
}

const RecordModule: React.FC<Props> = ({ title, comment, image }) => {
  return (
    <Container>
      <ImgBook source={image} />
      <Wrapper>
        <Row>
          <TitleBook>
            <P text={title} />
          </TitleBook>
          <PubDate pubdate='20200511' />
        </Row>
        <StarBox />

        <Description>
          <P text={comment} />
        </Description>
      </Wrapper>
    </Container>
  );
};

export default RecordModule;
