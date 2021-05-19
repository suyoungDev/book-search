import React from 'react';
import { IoMoon, IoSunny } from 'react-icons/io5';
import {
  CheckBoxLabel,
  CheckBoxInput,
  CheckBoxWrapper,
  Ball,
} from './Toggle.styles';

export interface Props {
  toggle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  theme: boolean;
}

const Side: React.FC<Props> = ({ toggle, theme }) => {
  return (
    <CheckBoxWrapper>
      <CheckBoxInput
        type='checkbox'
        name='toggle'
        id='toggle'
        checked={theme}
        onChange={toggle}
      />
      <CheckBoxLabel htmlFor='toggle'>
        <Ball />
        <IoSunny />
        <IoMoon />
      </CheckBoxLabel>
    </CheckBoxWrapper>
  );
};

export default Side;
