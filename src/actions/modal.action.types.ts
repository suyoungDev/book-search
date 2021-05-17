import { Book } from '../actions/book.actions.types';

export const IS_MODAL_OPEN = 'IS_MODAL_OPEN' as const;

export interface PayloadType {
  id?: string;
  book?: Book;
}

export interface modalDispatch {
  type: typeof IS_MODAL_OPEN;
  isOpen: boolean;
  payload?: PayloadType;
}

export type modalDispatchType = modalDispatch;
