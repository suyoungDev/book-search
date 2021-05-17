import React, { useState } from 'react';

import P from '../../../Components/P';
import { Row } from '../../../Components/Row';
import StarBox from '../../../Components/StarBox';
import {
  ImgBook,
  Container,
  Wrapper,
  RecordTitleBook,
  RecordDescription,
} from '../../SearchPage/module/SearchModule.styles';
import { RecordBar } from '../../DetailPage/module/DetailModule.styles';
import ViewMenuButton from './ViewMenuButton';
import PubDateContainer from '../../DetailPage/module/PubDateContainer';

interface Props {
  title: string;
  comment: string;
  image: string;
  createdAt: Date;
  id: string;
}

const RecordModule: React.FC<Props> = ({
  title,
  comment,
  image,
  createdAt,
  id,
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const clickHandler = () => {
    setIsClicked(!isClicked);
  };

  return (
    <Container onClick={clickHandler}>
      <ImgBook source={image} />
      <Wrapper>
        <Row className='al-fs js-sb'>
          <Row className='al-ct'>
            <RecordTitleBook>
              <P text={title} />
            </RecordTitleBook>
            <RecordBar />
            <PubDateContainer createdAt={createdAt} />
          </Row>
          <ViewMenuButton id={id} />
        </Row>
        <StarBox />
        <RecordDescription className={`${isClicked && 'active'}`}>
          <P text={comment} />
        </RecordDescription>
      </Wrapper>
    </Container>
  );
};

export default RecordModule;
