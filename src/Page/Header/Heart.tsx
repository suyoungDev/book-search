import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { BsHeartFill } from 'react-icons/bs';

import { RootReducerType } from '../../reducer/store';

const HeartWrapper = styled.div`
  position: relative;
  height: 1.3rem;

  .icons {
    font-size: 1.4rem;
  }
`;

const Count = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  pointer-events: none;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;

  span {
    font-size: 0.5rem;
    color: ${(props) => props.theme.colors.invert};
  }
`;

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
