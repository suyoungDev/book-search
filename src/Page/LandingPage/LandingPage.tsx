import React from 'react';
import { Wrapper } from '../../Components/Wrapper';
import styled from 'styled-components';
import Title from './Section/Title';
import BookStore from './Section/BookStore';
import SearchModule from '../Search/SearchModule';

const Main = styled.main`
  width: 100%;
`;

const LandingPage: React.FC = () => {
  return (
    <Main>
      <Title />
      <Wrapper>
        <BookStore />
        <SearchModule />
      </Wrapper>
    </Main>
  );
};

export default LandingPage;
