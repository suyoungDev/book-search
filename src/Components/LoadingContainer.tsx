import React from 'react';
import {
  DummyImg,
  Wrapper,
  DummyTitle,
  DummyAuthor,
  DummyDescription,
  DummyContainer,
} from '../Page/SearchPage/module/SearchModule.styles';

const LoadingContainer: React.FC = () => {
  return (
    <DummyContainer>
      <DummyImg />
      <Wrapper>
        <DummyTitle />
        <DummyAuthor />
        <DummyDescription />
      </Wrapper>
    </DummyContainer>
  );
};

export default LoadingContainer;
