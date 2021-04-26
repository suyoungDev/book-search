import React from 'react';
import { Wrapper } from '../../Components/Wrapper';
import styled from 'styled-components';
import Title from './Section/Title';
import BookStore from './Section/BookStore';

const Main = styled.main`
  width: 100%;
`;

const LandingPage: React.FC = () => {
  return (
    <Main>
      <Title />
      <Wrapper>
        <BookStore />
        <div> 이번엔 어떤걸 추가해야할까 ..^^</div>
      </Wrapper>
    </Main>
  );
};

export default LandingPage;
