export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';

export type Book = {
  author: string;
  description: string;
  image: string;
  pubdate: string;
  title: string;
  discount?: string;
  publisher?: string;
  isbn?: string;
  link?: string;
  price?: string;
};

// 실패
export interface fetchFailDispatch {
  type: typeof FETCH_FAIL;
}

// 성공
export interface fetchSuccessDispatch {
  type: typeof FETCH_SUCCESS;
  payload: Book[];
}

export type fetchDispatchType = fetchFailDispatch | fetchSuccessDispatch;
