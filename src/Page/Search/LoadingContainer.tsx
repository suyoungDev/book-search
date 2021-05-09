import React from 'react';
import {
  DummyImg,
  Wrapper,
  DummyContainerButton,
  DummyTitle,
  DummyAuthor,
  DummyDescription,
  DummyContainer,
} from './SearchModule.styles';

const LoadingContainer: React.FC = () => {
  return (
    <DummyContainer>
      <DummyContainerButton as='div'>
        <DummyImg />
        <Wrapper>
          <DummyTitle />
          <DummyAuthor />
          <DummyDescription />
        </Wrapper>
      </DummyContainerButton>
    </DummyContainer>
  );
};

export default LoadingContainer;
