import React from 'react';
import { RightWrapper } from '../../Components/SideWrapper';
import Input from '../../Components/Input';
import { Wrapper } from '../../Components/Wrapper';

const RightSection = () => {
  return (
    <RightWrapper width={30} maxWidth={400}>
      <Wrapper>
        <Input placeholder='검색하기' />
      </Wrapper>

      <div>
        <div>
          <h2>BOOK DETAIL</h2>
        </div>
        <div>img</div>
        <div>description blahblha blahblhablahblhablahblha</div>
      </div>
    </RightWrapper>
  );
};

export default RightSection;
