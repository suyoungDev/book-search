import React, { useState } from 'react';
import { IoIosMore } from 'react-icons/io';
import { CirceButton } from '../../../Components/Button';

import P from '../../../Components/P';
import { Row } from '../../../Components/Row';
import StarBox from '../../../Components/StarBox';
import PubDate from '../../DetailPage/module/PubDate';
import {
  ImgBook,
  Container,
  Wrapper,
  RecordTitleBook,
  RecordDescription,
} from '../../SearchPage/module/SearchModule.styles';
import { RecordBar } from '../../DetailPage/module/DetailModule.styles';

interface Props {
  title: string;
  comment: string;
  image: string;
}

const RecordModule: React.FC<Props> = ({ title, comment, image }) => {
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
            <PubDate pubdate='20200511' />
          </Row>
          <CirceButton className='record'>
            <IoIosMore />
          </CirceButton>
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
