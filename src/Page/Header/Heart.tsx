import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BsHeartFill } from 'react-icons/bs';
import { HeartWrapper, Count } from './Heart.styles';
import { RootReducerType } from '../../reducer/store';

const Heart = () => {
  const [numberOfLikes, setNumberOfLikes] = useState(0);
  const { payload } = useSelector(
    (state: RootReducerType) => state.recordReducer
  );

  useEffect(() => {
    let number = payload?.length;
    if (number) setNumberOfLikes(number);
  }, [payload]);

  return (
    <HeartWrapper>
      <BsHeartFill />
      <Count>
        <span>{numberOfLikes}</span>
      </Count>
    </HeartWrapper>
  );
};

export default Heart;
