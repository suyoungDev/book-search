import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootReducerType } from '../../../reducer/store';
import RecordModule from './RecordModule';
import { ListContainer } from '../../SearchPage/SearchList.styles';

const RecordList = () => {
  const { comments } = useSelector(
    (state: RootReducerType) => state.recordReducer
  );

  return (
    <ListContainer>
      {comments?.map((item) => (
        <li key={item.isbn}>
          <RecordModule
            title={item.title}
            image={item.image}
            comment={item.comment}
          />
        </li>
      ))}
    </ListContainer>
  );
};

export default RecordList;
