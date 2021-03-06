import React from 'react';
import { ReactComponent as Bg } from '../../../image/bookshop.svg';
import {
  SectionContainer,
  Container,
  ContextContainer,
  Title,
  Content,
  ImageContainer,
} from './BookStore.styles';

const BookStore: React.FC = () => {
  return (
    <SectionContainer>
      <Container>
        <ContextContainer>
          <Title>
            <h1>독서를 기록으로 남기세요.</h1>
          </Title>
          <Content>
            <p>새로운 책을 발견하고, 새로운 세상을 접하세요.</p>
            <p>세상의 모든 책을 읽어보세요.</p>
          </Content>
        </ContextContainer>
        <ImageContainer>
          <Bg />
        </ImageContainer>
      </Container>
    </SectionContainer>
  );
};

export default BookStore;
