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
  data?: Book[];
}

const initialState: InitialState = {
  success: false,
  isLoading: false,
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
      };

    case FETCH_FAIL:
      return {
        ...state,
        isLoading: false,
        success: false,
      };

    case FETCH_SUCCESS:
      return {
        ...state,
        success: true,
        isLoading: false,
        data: action.data,
      };

    default:
      return state;
  }
};

export default BookReducer;
