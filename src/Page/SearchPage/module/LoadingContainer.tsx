import React from 'react';
import {
  DummyImg,
  Wrapper,
  DummyTitle,
  DummyAuthor,
  DummyDescription,
  DummyContainer,
} from './SearchModule.styles';

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
