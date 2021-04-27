import React from 'react';
import {
  TiStarOutline,
  TiStarHalfOutline,
  TiStarFullOutline,
} from 'react-icons/ti';
import styled from 'styled-components';
import { RowStars } from '../../Components/Row';

const StarBox: React.FC = () => {
  return (
    <RowStars>
      <TiStarFullOutline />
      <TiStarHalfOutline />
      <TiStarOutline />
      <TiStarOutline />
      <TiStarOutline />
    </RowStars>
  );
};

export default StarBox;
