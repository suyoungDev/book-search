import React from 'react';
import styled from 'styled-components';
import { Wrapper } from '../../Components/Wrapper';
import Side from '../Side/Side';
import Input from '../../Components/Input';

const LandingPage = () => {
  return (
    <main>
      <Wrapper>
        <label>하이</label>
        <Input />
      </Wrapper>
      <Wrapper>
        <Side />
      </Wrapper>
    </main>
  );
};

export default LandingPage;
