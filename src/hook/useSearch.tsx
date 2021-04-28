import { useEffect, useState } from 'react';
import axios from 'axios';
import KEY from './key';

const URL = '/v1/search/book.json';

const useSearch = (query: string, pageNumber: number) => {
  interface BookProps {
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
  }

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [books, setBooks] = useState<BookProps[] | undefined>([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    let cancel: any;
    setLoading(true);
    setError(false);

    const fetchData = async (query: string) => {
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

        setBooks(items);
        setHasMore(items.length > 0);
        setLoading(false);
      } catch (error: any) {
        if (axios.isCancel(error)) return;
        setError(true);
      }
    };

    fetchData(query);
    return () => cancel();
  }, [query, pageNumber]);

  return { loading, hasMore, books, error };
};

export default useSearch;
