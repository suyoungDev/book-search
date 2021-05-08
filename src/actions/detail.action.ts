import { Dispatch } from 'redux';
import { BOOK_DETAIL, bookDetailDispatchType } from './detail.action.types';
import { Book } from './book.actions.types';

export const getBookDetail = (data: Book) => (
  dispatch: Dispatch<bookDetailDispatchType>
) => {
  dispatch({ type: BOOK_DETAIL, data });
};
