import React from 'react';
import { useSelector } from 'react-redux';
import { RootReducerType } from '../../reducer/store';
import {
  ImgDetail,
  TitleBook,
  AuthorDetail,
  DescriptionDetail,
} from './SearchModule.styles';
import { Container, StarContainer } from './DetailModule.styles';
import StarBox from './StarBox';

const DetailModule: React.FC = () => {
  const { data } = useSelector((state: RootReducerType) => state.detailReducer);

  if (!data) return <div>업슴</div>;

  return (
    <Container>
      <ImgDetail source={data.image} />
      <TitleBook>
        <p dangerouslySetInnerHTML={{ __html: data?.title }} />
      </TitleBook>
      <AuthorDetail>
        <p dangerouslySetInnerHTML={{ __html: data?.author }} />
      </AuthorDetail>
      <StarContainer>
        <StarBox />
      </StarContainer>
      <DescriptionDetail>
        <p dangerouslySetInnerHTML={{ __html: data?.description }} />
      </DescriptionDetail>
    </Container>
  );
};

export default DetailModule;
