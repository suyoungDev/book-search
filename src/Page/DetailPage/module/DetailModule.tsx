import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducerType } from '../../../reducer/store';
import { ImgDetail } from '../../SearchPage/module/SearchModule.styles';
import {
  Container,
  SaveComment,
  Link,
  DataContainer,
  ButtonContainer,
} from './DetailModule.styles';
import DetailSection from '../section/DetailSection';
import BookTitle from '../section/BookTitle';
import BookAuthor from '../section/BookAuthor';
import BookDescription from '../section/BookDescription';
import { openModal } from '../../../actions/modal.action';

const DetailModule: React.FC = () => {
  const { data } = useSelector((state: RootReducerType) => state.detailReducer);
  const dispatch = useDispatch();

  if (!data) return null;

  const handleModal = () => {
    dispatch(openModal(true));
  };

  return (
    <Container>
      <DataContainer>
        <ImgDetail source={data.image} />
        <BookTitle title={data.title} />
        <BookAuthor author={data.author} />
        <DetailSection
          price={data.price}
          publisher={data.publisher}
          pubdate={data.pubdate}
        />
        <BookDescription description={data.description} />
      </DataContainer>

      <ButtonContainer>
        <Link>
          <a href={data.link} type='text/html' target='_blank' rel='noreferrer'>
            사러가기
          </a>
        </Link>
        <SaveComment onClick={handleModal}>감상평 남기기</SaveComment>
      </ButtonContainer>
    </Container>
  );
};

export default DetailModule;
