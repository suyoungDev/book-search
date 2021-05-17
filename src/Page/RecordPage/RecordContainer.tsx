import React from 'react';
import { useSelector } from 'react-redux';
import { SmallWrapper } from '../../Components/Wrapper';
import { RootReducerType } from '../../reducer/store';
import RecordList from './section/RecordList';

const RecordContainer = () => {
  const { payload } = useSelector(
    (state: RootReducerType) => state.recordReducer
  );
  console.log(payload);

  if (!payload.length)
    return <SmallWrapper>먼저 감상을 남겨주세요.</SmallWrapper>;

  return <RecordList payload={payload} />;
};

export default RecordContainer;
