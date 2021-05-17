import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducerType } from '../../../reducer/store';
import {
  AuthorDetail,
  DescriptionDetail,
  ImgDetail,
  TitleDetail,
} from '../../SearchPage/module/SearchModule.styles';
import {
  Container,
  SaveComment,
  Link,
  DataContainer,
  ButtonContainer,
} from './DetailModule.styles';
import DetailSection from './DetailSection';
import { openModal } from '../../../actions/modal.action';
import P from '../../../Components/P';

const DetailModule: React.FC = () => {
  const { data } = useSelector((state: RootReducerType) => state.detailReducer);
  const dispatch = useDispatch();

  if (!data) return null;

  const handleModal = () => {
    dispatch(openModal(true, { book: data }));
  };

  return (
    <Container>
      <DataContainer>
        <ImgDetail source={data.image} />
        <TitleDetail>
          <P text={data.title} />
        </TitleDetail>
        <AuthorDetail>
          <P text={data.author} />
        </AuthorDetail>
        <DetailSection
          price={data.price}
          publisher={data.publisher}
          pubdate={data.pubdate}
        />
        <DescriptionDetail>
          <P text={data.description} />
        </DescriptionDetail>
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
