export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';

export type BookType = {
  books: Book[];
};

export type Book = {
  author: string;
  description: string;
  discount: string;
  image: string;
  isbn: string;
  link: string;
  price: string;
  pubdate: string;
  publisher: string;
  title: string;
};

// 실패
export interface fetchFailDispatch {
  type: typeof FETCH_FAIL;
}

// 성공
export interface fetchSuccessDispatch {
  type: typeof FETCH_SUCCESS;
  payload: {
    books: Book[];
  };
}

export type fetchDispatchType = fetchFailDispatch | fetchSuccessDispatch;
