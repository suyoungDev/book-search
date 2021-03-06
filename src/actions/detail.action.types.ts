import { Book } from './book.actions.types';

export const BOOK_DETAIL = 'BOOK_DETAIL' as const;

export interface getBookDetail {
  type: typeof BOOK_DETAIL;
  data: Book;
}

export type bookDetailDispatchType = getBookDetail;
