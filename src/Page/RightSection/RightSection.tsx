import React from 'react';
import { RightWrapper } from '../../Components/SideWrapper';
import Input from '../../Components/Input';
import { Wrapper } from '../../Components/Wrapper';
import DetailModule from '../Search/DetailModule';

const RightSection = () => {
  return (
    <RightWrapper width={30} maxWidth={400}>
      <DetailModule />
    </RightWrapper>
  );
};

export default RightSection;
