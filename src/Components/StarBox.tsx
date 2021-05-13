import React from 'react';
import {
  TiStarOutline,
  TiStarHalfOutline,
  TiStarFullOutline,
} from 'react-icons/ti';
import { RowStars } from './Row';

const StarBox = ({ ...props }) => {
  return (
    <RowStars {...props}>
      <TiStarFullOutline />
      <TiStarHalfOutline />
      <TiStarOutline />
      <TiStarOutline />
      <TiStarOutline />
    </RowStars>
  );
};

export default StarBox;
