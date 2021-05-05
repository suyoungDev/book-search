import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { GoSearch } from 'react-icons/go';

// import useSearch from '.././hook/useSearch';
import { fetchBooks } from '../actions/book.actions';

import { InputContainer, InputBox } from './Input.styles';

interface Props {
  placeholder?: string;
}

const Input: React.FC<Props> = ({ placeholder }) => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  // const { books, hasMore, loading, error } = useSearch(query, pageNumber);
  const onSearch = () => {
    dispatch(fetchBooks(query));
  };

  return (
    <InputContainer>
      <GoSearch />
      <InputBox
        placeholder={placeholder}
        type='text'
        value={query}
        onChange={onChange}
      />
      <button onClick={onSearch}>찾기</button>
    </InputContainer>
  );
};

export default Input;
