import {
  BOOK_DETAIL,
  bookDetailDispatchType,
} from '../actions/detail.action.types';
import { Book } from '../actions/book.actions.types';

interface InitialState {
  data: Book | null;
}

const initialState: InitialState = {
  data: null,
};

const BookDetailReducer = (
  state = initialState,
  action: bookDetailDispatchType
): InitialState => {
  switch (action.type) {
    case BOOK_DETAIL:
      return {
        data: action.data,
      };

    default:
      return state;
  }
};

export default BookDetailReducer;
