import React from 'react';
import RecordModule from './RecordModule';
import { ListContainer } from '../../SearchPage/SearchList.styles';
import { CommentType } from '../../../actions/record.action.types';

interface Prop {
  payload: CommentType[];
}

const RecordList: React.FC<Prop> = ({ payload }) => {
  return (
    <ListContainer>
      {payload?.map((item) => (
        <li key={item.id}>
          <RecordModule
            title={item.bookInfo.title}
            image={item.bookInfo.image}
            comment={item.comment}
            createdAt={item.createdAt}
          />
        </li>
      ))}
    </ListContainer>
  );
};

export default RecordList;
