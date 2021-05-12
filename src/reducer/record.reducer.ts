import { LOAD_MORE_SUCCESS } from '../actions/book.actions.types';
import {
  Comment,
  commentDispatchType,
  LOAD_COMMENTS,
  LOAD_COMMENTS_FAIL,
  LOAD_COMMENTS_SUCCESS,
  SAVE_COMMENT,
} from '../actions/record.action.types';

type InitialState = {
  comments: Comment[] | null;
  isLoading: boolean;
  isSaved: boolean;
  success: boolean;
};

const initialState: InitialState = {
  comments: null,
  isLoading: false,
  isSaved: false,
  success: false,
};

const RecordReducer = (
  state = initialState,
  action: commentDispatchType
): InitialState => {
  switch (action.type) {
    case LOAD_COMMENTS:
      return { ...state, isLoading: true };

    case LOAD_COMMENTS_FAIL:
      return {
        ...state,
        isLoading: false,
        success: false,
      };

    case LOAD_COMMENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        comments: action.comments,
        success: true,
      };

    case SAVE_COMMENT:
      return {
        ...state,
        isSaved: action.isSaved,
      };

    default:
      return state;
  }
};

export default RecordReducer;
