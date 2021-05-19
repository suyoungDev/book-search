import React, { useState } from 'react';
import { TiStarFullOutline } from 'react-icons/ti';
import { InputLabel, RowStars } from './StarBox.styles';

interface Props {
  rate: number;
  rating: (ratingValue: number) => void;
}

const StarBox: React.FC<Props> = ({ rate, rating }) => {
  const [hover, setHover] = useState(0);

  return (
    <RowStars>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <InputLabel key={index}>
            <input
              type='radio'
              name='rating'
              value={ratingValue}
              onClick={() => rating(ratingValue)}
            />
            <TiStarFullOutline
              color={ratingValue <= (hover | rate) ? '#45AE9E' : '#8d8d8d'}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(0)}
            />
          </InputLabel>
        );
      })}
    </RowStars>
  );
};

export default React.memo(StarBox);
