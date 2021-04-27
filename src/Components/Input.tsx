import React, { useState } from 'react';
import styled from 'styled-components';
import { GoSearch } from 'react-icons/go';

import useSearch from '.././hook/useSearch';

export const InputContainer = styled.div`
  padding: 1em;
  background-color: ${(props) => props.theme.colors.inputBg};
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid ${(props) => props.theme.colors.inputBorder};
  border-radius: 24px;

  .icons {
    color: ${(props) => props.theme.colors.ink50};
    margin-right: 1rem;
  }
`;

export const InputBox = styled.input`
  background-color: ${(props) => props.theme.colors.inputBg};
  border: none;
  outline: none;
  font-size: 0.8rem;
  ::placeholder {
    color: ${(props) => props.theme.colors.ink40};
  }
`;

interface Props {
  placeholder?: string;
}

const Input: React.FC<Props> = ({ placeholder }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e: any) => {
    setQuery(e.currentTarget.value);
  };

  useSearch(query);

  return (
    <InputContainer>
      <GoSearch />
      <InputBox
        placeholder={placeholder}
        type='text'
        value={query}
        onChange={handleSearch}
      />
    </InputContainer>
  );
};

export default Input;
