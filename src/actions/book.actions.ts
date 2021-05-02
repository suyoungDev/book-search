import axios from 'axios';
import { Dispatch } from 'redux';
import {
  fetchDispatchType,
  FETCH_SUCCESS,
  FETCH_FAIL,
} from './book.actions.types';
import KEY from '../key';

const URL = '/v1/search/book.json';

export const fetchBooks = (query: string) => async (
  dispatch: Dispatch<fetchDispatchType>
) => {
  let cancel;
  try {
    const response = await axios.get(URL, {
      params: { query, display: 10, start: 1 },
      headers: {
        'X-Naver-Client-Id': KEY.CLIENT_ID,
        'X-Naver-Client-Secret': KEY.CLIENT_SERVER,
      },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    });

    const {
      data: { items },
    } = response;

    dispatch({
      type: FETCH_SUCCESS,
      payload: items,
    });
  } catch (error) {
    if (axios.isCancel(error)) return;
    dispatch({
      type: FETCH_FAIL,
    });
  }
};
