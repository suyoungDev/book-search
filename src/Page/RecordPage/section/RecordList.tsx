import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootReducerType } from '../../../reducer/store';
import RecordModule from './RecordModule';

const ListContainer = styled.div`
  margin: 2rem 0;
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  grid-gap: 1rem;
  padding: 0 2rem;

  ${(props) => props.theme.media.tablet} {
  }
  ${(props) => props.theme.media.desktop} {
    max-width: 1200px;
  }
`;

const RecordList = () => {
  const { comments } = useSelector(
    (state: RootReducerType) => state.recordReducer
  );

  return (
    <ListContainer>
      {comments?.map((item) => (
        <RecordModule
          key={item.isbn}
          title={item.title}
          image={item.image}
          comment={item.comment}
        />
      ))}
    </ListContainer>
  );
};

export default RecordList;
