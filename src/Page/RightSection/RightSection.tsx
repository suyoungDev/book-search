import React from 'react';
import { RightWrapper } from '../../Components/SideWrapper';
import DetailModule from '../Search/DetailModule';

const RightSection: React.FC = () => {
  return (
    <RightWrapper width={30} maxWidth={400}>
      <DetailModule />
    </RightWrapper>
  );
};

export default RightSection;
