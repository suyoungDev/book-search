import {
  FETCH_FAIL,
  FETCH_SUCCESS,
  BookType,
  fetchDispatchType,
} from '../actions/book.actions.types';

interface InitialState {
  success: boolean;
  book?: BookType;
}

const initialState: InitialState = {
  success: false,
};

const BookReducer = (
  state = initialState,
  action: fetchDispatchType
): InitialState => {
  switch (action.type) {
    case FETCH_FAIL:
      return {
        ...state,
        success: false,
      };

    case FETCH_SUCCESS:
      const { books } = action.payload;
      return {
        ...state,
        success: true,
        book: {
          books,
        },
      };

    default:
      return state;
  }
};

export default BookReducer;
