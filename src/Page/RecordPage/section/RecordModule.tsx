import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import P from '../../../Components/P';
import { Row } from '../../../Components/Row';
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
import { StyledLink } from '../../../Components/StyledLink';

import { Book } from '../../../actions/book.actions.types';
import { getBookDetail } from '../../../actions/detail.action';
import RatedStarBox from '../../../Components/RatedStarBox';

interface Props {
  title: string;
  comment: string;
  image: string;
  createdAt: Date;
  id: string;
  bookInfo: Book;
  rate: number;
}

const RecordModule: React.FC<Props> = ({
  title,
  comment,
  image,
  createdAt,
  id,
  rate,
  bookInfo,
}) => {
  const dispatch = useDispatch();

  const [isViewMore, setIsViewMore] = useState(false);

  const showMore = useCallback(() => {
    setIsViewMore((prev) => !prev);
  }, []);

  const viewMoreDetail = useCallback(
    (item: Book) => {
      dispatch(getBookDetail(item));
    },
    [dispatch]
  );

  return (
    <Container>
      <StyledLink
        to={`/book/${bookInfo.isbn}`}
        onClick={() => viewMoreDetail(bookInfo)}
      >
        <ImgBook source={image} />
      </StyledLink>
      <Wrapper>
        <Row className='al-fs js-sb'>
          <Row className='al-ct'>
            <StyledLink
              to={`/book/${bookInfo.isbn}`}
              onClick={() => viewMoreDetail(bookInfo)}
            >
              <RecordTitleBook>
                <P text={title} />
              </RecordTitleBook>
            </StyledLink>
            <RecordBar />
            <PubDateContainer createdAt={createdAt} />
          </Row>
          <ViewMenuButton id={id} />
        </Row>
        <RatedStarBox rate={rate} />
        <RecordDescription
          className={`${isViewMore && 'active'}`}
          onClick={showMore}
        >
          <P text={comment} />
        </RecordDescription>
      </Wrapper>
    </Container>
  );
};

export default React.memo(RecordModule);
