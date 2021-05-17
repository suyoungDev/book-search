import {
  commentDispatchType,
  CommentType,
  ADD_COMMENT,
  REMOVE_COMMENT,
  MODIFY_COMMENT,
} from '../actions/record.action.types';

type InitialState = {
  payload: CommentType[];
};

const initialState: InitialState = {
  payload: [],
};

const RecordReducer = (
  state: InitialState = initialState,
  action: commentDispatchType
): InitialState => {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        payload: state.payload?.concat({
          id: action.payload.id,
          comment: action.payload.comment,
          bookInfo: action.payload.bookInfo,
          rate: action.payload.rate,
          createdAt: action.payload.createdAt,
        }),
      };

    case REMOVE_COMMENT:
      return {
        payload: state.payload.filter(
          (comment) => comment.id !== action.payload
        ),
      };

    case MODIFY_COMMENT:
      return {
        payload: state.payload.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                comment: action.payload.comment,
                rate: action.payload.rate,
              }
            : item
        ),
      };

    default:
      return state;
  }
};

export default RecordReducer;
