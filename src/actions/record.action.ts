import { Dispatch } from 'redux';
import {
  SAVE_COMMENT,
  LOAD_COMMENTS,
  commentDispatchType,
  LOAD_COMMENTS_SUCCESS,
  LOAD_COMMENTS_FAIL,
} from './record.action.types';

export const saveComment =
  (
    comment: string,
    isbn: string | undefined,
    image: string,
    title: string,
    rate = 0
  ) =>
  (dispatch: Dispatch<commentDispatchType>) => {
    dispatch({ type: SAVE_COMMENT, isSaved: false });

    const savedData = localStorage.getItem('book_comments');
    let savingData = [];

    if (savedData) {
      const parsedItem = JSON.parse(savedData);
      savingData.push(...parsedItem);
    }

    const data = { comment, isbn, image, title, rate };
    savingData.push(data);

    localStorage.setItem('book_comments', JSON.stringify(savingData));

    dispatch({ type: SAVE_COMMENT, isSaved: true });
  };

export const loadComments = () => (dispatch: Dispatch<commentDispatchType>) => {
  dispatch({ type: LOAD_COMMENTS });
  const savedData = localStorage.getItem('book_comments');

  // 가져온게 없으면 리턴
  if (!savedData) return dispatch({ type: LOAD_COMMENTS_FAIL });

  let parsedItem = JSON.parse(savedData);
  dispatch({ type: LOAD_COMMENTS_SUCCESS, comments: parsedItem });
};
