import { useEffect, useState } from 'react';
import axios from 'axios';
import { Simulate } from 'react-dom/test-utils';
import KEY from './key';

const URL = '/v1/search/book.json';

const useSearch = (query: string) => {
  useEffect(() => {
    const data = axios({
      method: 'get',
      url: URL,
      params: { query, sort: 'sim' },
      headers: {
        'X-Naver-Client-Id': KEY.CLIENT_ID,
        'X-Naver-Client-Secret': KEY.CLIENT_SERVER,
      },
    });

    console.log(data);
  }, [query]);

  return {};
};

export default useSearch;
