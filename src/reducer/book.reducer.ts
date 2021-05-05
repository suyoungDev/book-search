import {
  FETCH_FAIL,
  FETCH_SUCCESS,
  FETCH,
  Book,
  fetchDispatchType,
} from '../actions/book.actions.types';

interface InitialState {
  success: boolean;
  isLoading?: boolean;
  hasMore?: boolean;
  isError?: boolean;
  data?: Book[] | null;
}

const initialState: InitialState = {
  isLoading: false,
  isError: false,
  success: false,
  data: null,
};

const BookReducer = (
  state = initialState,
  action: fetchDispatchType
): InitialState => {
  switch (action.type) {
    case FETCH:
      return {
        ...state,
        isLoading: true,
        data: null,
        isError: false,
      };

    case FETCH_FAIL:
      return {
        ...state,
        isLoading: false,
        success: false,
        isError: true,
      };

    case FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        data: action.data,
        isError: false,
      };

    default:
      return state;
  }
};

export default BookReducer;
