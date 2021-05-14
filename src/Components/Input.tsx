import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BiX, BiSearch } from 'react-icons/bi';

import { fetchBooks } from '../actions/book.actions';
import { cancleFetch, newFetch } from '../actions/book.actions.types';
import { InputContainer, InputBox, ButtonBox } from './Input.styles';
import { CircleReverseButton } from './Button';

interface Props {
  placeholder?: string;
}

const Input: React.FC<Props> = ({ placeholder }) => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (query.length) {
      dispatch(newFetch());
      dispatch(fetchBooks(query, 1));
    }
  }, [query, dispatch]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    if (event) event.preventDefault();
    dispatch(fetchBooks(query));
  };

  const cancel = () => {
    setQuery('');
    dispatch(cancleFetch());
  };

  return (
    <form onSubmit={submit}>
      <InputContainer>
        <ButtonBox>
          <BiSearch />
        </ButtonBox>
        <InputBox
          placeholder={placeholder}
          type='text'
          value={query}
          onChange={onChange}
        />
        <CircleReverseButton
          onClick={cancel}
          type='button'
          className={`${query && 'active'}`}
        >
          <BiX />
        </CircleReverseButton>
      </InputContainer>
    </form>
  );
};

export default Input;
