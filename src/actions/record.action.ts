import { Dispatch } from 'redux';
import { Book } from './book.actions.types';
import {
  ADD_COMMENT,
  REMOVE_COMMENT,
  MODIFY_COMMENT,
  commentDispatchType,
} from './record.action.types';

// 액션 생성 함수
export const removeComment = (id: string) => ({
  type: REMOVE_COMMENT,
  payload: id,
});

export const modifyComment = (id: string, comment: string, rate: number) => ({
  type: MODIFY_COMMENT,
  payload: { id, comment, rate },
});

export const addComment =
  (comment: string, bookInfo: Book, rate = 0) =>
  (dispatch: Dispatch<commentDispatchType>) => {
    const id: string = Math.random().toString(36).substr(2, 9);

    const payload = {
      comment,
      bookInfo,
      rate,
      createdAt: new Date(),
      id,
    };

    dispatch({ type: ADD_COMMENT, payload });
  };
