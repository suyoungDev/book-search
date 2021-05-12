export const SAVE_COMMENT = 'SAVE_COMMENT';
export const LOAD_COMMENTS = 'LOAD_COMMENTS';
export const LOAD_COMMENTS_SUCCESS = 'LOAD_COMMENTS_SUCCESS';
export const LOAD_COMMENTS_FAIL = 'LOAD_COMMENTS_FAIL';

// 액션 생성 함수
export const loadComments = () => ({ type: LOAD_COMMENTS });
export const loadFailComments = () => ({ type: LOAD_COMMENTS_FAIL });

export type Comment = {
  isbn: string;
  comment: string;
  title: string;
  image: string;
  rate?: number;
};

export interface SaveCommentDispatch {
  type: typeof SAVE_COMMENT;
  isSaved: boolean;
}

export interface LoadDispatch {
  type: typeof LOAD_COMMENTS;
}

export interface LoadSuccessDispatch {
  type: typeof LOAD_COMMENTS_SUCCESS;
  comments: Comment[];
}

export interface LoadFailDispatch {
  type: typeof LOAD_COMMENTS_FAIL;
}

export type commentDispatchType =
  | SaveCommentDispatch
  | LoadDispatch
  | LoadSuccessDispatch
  | LoadFailDispatch;
