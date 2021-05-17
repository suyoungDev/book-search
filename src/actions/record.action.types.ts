import { Book } from './book.actions.types';

export const ADD_COMMENT = 'ADD_COMMENT' as const;
export const REMOVE_COMMENT = 'REMOVE_COMMENT' as const;
export const MODIFY_COMMENT = 'MODIFY_COMMENT' as const;

export interface CommentType {
  id: string;
  comment: string;
  bookInfo: Book;
  rate: number;
  createdAt: Date;
}

export interface AddCommentDispatch {
  type: typeof ADD_COMMENT;
  payload: CommentType;
}
export interface RemoveCommentDispatch {
  type: typeof REMOVE_COMMENT;
  payload: string;
}

export interface ModifyType {
  id: string;
  rate: number;
  comment: string;
}

export interface ModifyCommentDispatch {
  type: typeof MODIFY_COMMENT;
  payload: ModifyType;
}

export type commentDispatchType =
  | AddCommentDispatch
  | RemoveCommentDispatch
  | ModifyCommentDispatch;
