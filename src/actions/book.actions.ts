import axios from 'axios';
import { Dispatch } from 'redux';
import {
  fetchDispatchType,
  FETCH_SUCCESS,
  FETCH_FAIL,
  FETCH,
  LOAD_MORE_SUCCESS,
} from './book.actions.types';
import KEY from '../key';

const URL = '/v1/search/book.json';

let cancel: any;

export const fetchBooks = (query: string, page = 1) => async (
  dispatch: Dispatch<fetchDispatchType>
) => {
  dispatch({ type: FETCH });

  cancel && cancel();
  if (!query) return;

  try {
    const {
      data: { items, total },
    } = await axios.get(URL, {
      params: { query, display: 8 * page, start: page },
      headers: {
        'X-Naver-Client-Id': KEY.CLIENT_ID,
        'X-Naver-Client-Secret': KEY.CLIENT_SERVER,
      },
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
