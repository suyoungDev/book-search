import React from 'react';
import {
  DummyImg,
  Wrapper,
  DummyWrapper,
  DummyTitle,
  DummyAuthor,
  DummyDescription,
} from './SearchModule.styles';

const LoadingContainer = () => {
  return (
    <div>
      <DummyWrapper>
        <DummyImg />
        <Wrapper>
          <DummyTitle />
          <DummyAuthor />
          <DummyDescription />
        </Wrapper>
      </DummyWrapper>
    </div>
  );
};

export default LoadingContainer;
