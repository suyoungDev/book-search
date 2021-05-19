import React from 'react';
import { TiStarFullOutline } from 'react-icons/ti';
import { RatedInputLabel, RatedRowStars } from './StarBox.styles';

interface Prop {
  rate: number;
}

const RatedStarBox: React.FC<Prop> = ({ rate }) => {
  return (
    <RatedRowStars>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <RatedInputLabel>
            <input type='radio' name='rating' value={rate} />
            <TiStarFullOutline
              color={ratingValue <= rate ? '#45AE9E' : '#8d8d8d'}
            />
          </RatedInputLabel>
        );
      })}
    </RatedRowStars>
  );
};

export default RatedStarBox;
