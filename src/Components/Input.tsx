import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { CgClose, CgSearch } from 'react-icons/cg';

import { fetchBooks } from '../actions/book.actions';
import { newFetch } from '../actions/book.actions.types';
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

  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  }, []);

  const submit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      if (event) event.preventDefault();
      dispatch(fetchBooks(query));
    },
    [dispatch, query]
  );

  const cancel = useCallback(() => {
    setQuery('');
  }, []);

  return (
    <form onSubmit={submit}>
      <InputContainer>
        <ButtonBox>
          <CgSearch />
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
          <CgClose />
        </CircleReverseButton>
      </InputContainer>
    </form>
  );
};

export default React.memo(Input);
