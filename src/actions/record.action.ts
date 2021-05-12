import { Dispatch } from 'redux';
import {
  SAVE_COMMENT,
  LOAD_COMMENTS,
  commentDispatchType,
  LOAD_COMMENTS_SUCCESS,
  LOAD_COMMENTS_FAIL,
} from './record.action.types';

export const saveComment =
  (comment: string, isbn: string | undefined, rate?: number) =>
  (dispatch: Dispatch<commentDispatchType>) => {
    dispatch({ type: SAVE_COMMENT, isSaved: false });

    const savedData = localStorage.getItem('book_comments');
    let savingData = [];

    if (savedData) {
      const parseItem = JSON.parse(savedData);
      savingData.push(...parseItem);
    }

    const data = { comment, isbn };
    savingData.push(data);

    localStorage.setItem('book_comments', JSON.stringify(savingData));

    dispatch({ type: SAVE_COMMENT, isSaved: true });
  };

export const loadComments = () => (dispatch: Dispatch<commentDispatchType>) => {
  dispatch({ type: LOAD_COMMENTS });
  let comments = localStorage.getItem('book_comments');

  // 가져온게 없으면 리턴
  if (!comments) return dispatch({ type: LOAD_COMMENTS_FAIL });

  comments = JSON.parse(comments);
  // dispatch({ type: LOAD_COMMENTS_SUCCESS, comments });
};
