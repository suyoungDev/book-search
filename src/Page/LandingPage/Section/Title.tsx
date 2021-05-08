import React from 'react';
import styled from 'styled-components';
import { UpperWrapper } from '../../../Components/SideWrapper';
import Input from '../../../Components/Input';

const Container = styled.div`
  color: ${(props) => props.theme.colors.primary50};
  margin-left: 2rem;
`;

const InputWrapper = styled.div`
  display: flex;
  margin-right: 2rem;
`;

const Title = () => {
  return (
    <UpperWrapper>
      <Container>
        <h3>HOME</h3>
      </Container>
      <InputWrapper>
        <Input />
      </InputWrapper>
    </UpperWrapper>
  );
};

export default Title;
