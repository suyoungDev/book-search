import {
  FETCH_FAIL,
  FETCH_SUCCESS,
  FETCH,
  LOAD_MORE,
  LOAD_MORE_FAIL,
  LOAD_MORE_SUCCESS,
  CANCLE_FETCH,
  Book,
  fetchDispatchType,
} from '../actions/book.actions.types';

interface InitialState {
  success: boolean;
  isLoading?: boolean;
  hasMore?: boolean;
  isError?: boolean;
  data?: Book[] | null;
  pageNumber: number;
}

const initialState: InitialState = {
  isLoading: false,
  isError: false,
  success: false,
  data: null,
  pageNumber: 1,
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
        isError: false,
      };

    case FETCH_FAIL:
      return {
        ...state,
        isLoading: false,
        success: false,
        isError: true,
        pageNumber: 1,
      };

    case FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        data: action.data,
        isError: false,
        hasMore: action.hasMore,
      };

    case LOAD_MORE:
      return {
        ...state,
        pageNumber: state.pageNumber + 1,
      };

    case LOAD_MORE_SUCCESS:
      const newData = action.data;
      // const { data } = state;

      return {
        ...state,
        data: newData,
        isLoading: false,
        hasMore: action.hasMore,
      };

    case LOAD_MORE_FAIL:
      return {
        ...state,
        isLoading: false,
        success: false,
        isError: true,
      };

    case CANCLE_FETCH:
      return {
        ...state,
        data: [],
        isLoading: false,
        success: false,
      };

    default:
      return state;
  }
};

export default BookReducer;
