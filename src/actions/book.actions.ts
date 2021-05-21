import axios from 'axios';
import { Dispatch } from 'redux';
import {
  fetchDispatchType,
  FETCH_SUCCESS,
  FETCH_FAIL,
  FETCH,
  LOAD_MORE_SUCCESS,
  CANCLE_FETCH,
} from './book.actions.types';
import dotenv from 'dotenv';
dotenv.config();

const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';

const URL = `${PROXY}/v1/search/book.json`;

let cancel: () => void;

const instance = axios.create({
  headers: {
    'X-Naver-Client-Id': process.env.REACT_APP_CLIENT_ID,
    'X-Naver-Client-Secret': process.env.REACT_APP_CLIENT_SERVER,
  },
});

export const searchBooks =
  (query: string, page = 1) =>
  async (dispatch: Dispatch<fetchDispatchType>) => {
    if (!query) return;
    dispatch({ type: FETCH });

    cancel && cancel();

    try {
      const {
        data: { items, total },
      } = await instance.get(URL, {
        params: { query, display: 8 * page, start: page },
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      });

      if (page === 1) {
        dispatch({
          type: FETCH_SUCCESS,
          data: items,
          hasMore: page * 8 < total,
          query: query,
        });
      } else {
        dispatch({
          type: LOAD_MORE_SUCCESS,
          data: items,
          hasMore: page * 8 < total,
        });
      }
    } catch (error) {
      if (axios.isCancel(error)) return;
      dispatch({
        type: FETCH_FAIL,
      });
    }
  };
