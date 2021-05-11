// 액션 타입
export const FETCH = 'FETCH';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';
export const LOAD_MORE_DATA = 'LOAD_MORE_DATA';
export const LOAD_MORE_SUCCESS = 'LOAD_MORE_SUCCESS';
export const CANCLE_FETCH = 'CANCLE_FETCH';
export const NEW_FETCH = 'NEW_FETCH';

// 액션 생성 함수
export const loadMoreData = () => ({ type: LOAD_MORE_DATA });
export const cancleFetch = () => ({ type: CANCLE_FETCH });
export const newFetch = () => ({ type: NEW_FETCH });

// 타입
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

// 시도
export interface fetchDispatch {
  type: typeof FETCH;
}

// 실패
export interface fetchFailDispatch {
  type: typeof FETCH_FAIL;
}

// 성공
export interface fetchSuccessDispatch {
  type: typeof FETCH_SUCCESS;
  data: Book[] | null;
  hasMore: boolean;
  query: string;
}

// 더 가져오기
export interface loadDispatch {
  type: typeof LOAD_MORE_DATA;
}

export interface loadSuccessDispatch {
  type: typeof LOAD_MORE_SUCCESS;
  data: Book[];
  hasMore: boolean;
}

export interface cancleFetchDispatch {
  type: typeof CANCLE_FETCH;
}
export interface newFetchDispatch {
  type: typeof NEW_FETCH;
}

export type fetchDispatchType =
  | fetchFailDispatch
  | fetchSuccessDispatch
  | fetchDispatch
  | loadDispatch
  | loadSuccessDispatch
  | cancleFetchDispatch
  | newFetchDispatch;
