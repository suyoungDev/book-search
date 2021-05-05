import {
  FETCH_FAIL,
  FETCH_SUCCESS,
  Book,
  fetchDispatchType,
} from '../actions/book.actions.types';

interface InitialState {
  success: boolean;
  isLoading?: boolean;
  hasMore?: boolean;
  book?: Book[];
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
      return {
        ...state,
        success: true,
        book: action.payload,
      };

    default:
      return state;
  }
};

export default BookReducer;
