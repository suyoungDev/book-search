import {
  FETCH_FAIL,
  FETCH_SUCCESS,
  FETCH,
  LOAD_MORE_DATA,
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
  query: string;
  loadMore?: boolean;
}

const initialState: InitialState = {
  isLoading: false,
  isError: false,
  success: false,
  data: null,
  pageNumber: 1,
  query: '',
  loadMore: false,
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
        query: action.query,
      };

    case LOAD_MORE_DATA:
      return {
        ...state,
        pageNumber: state.pageNumber + 1,
        loadMore: true,
      };

    case LOAD_MORE_SUCCESS:
      return {
        ...state,
        data: action.data,
        hasMore: action.hasMore,
        loadMore: false,
        isLoading: false,
      };

    case CANCLE_FETCH:
      return {
        ...state,
        isError: false,
        data: [],
        isLoading: false,
        success: false,
        pageNumber: 1,
      };

    default:
      return state;
  }
};

export default BookReducer;
