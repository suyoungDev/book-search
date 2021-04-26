import React from 'react';
import styled from 'styled-components';
import { UpperWrapper } from '../../../Components/SideWrapper';

const Container = styled.div`
  margin-left: 2rem;
  color: ${(props) => props.theme.colors.primary50};
`;

const Title = () => {
  return (
    <UpperWrapper>
      <Container>
        <h3>HOME</h3>
      </Container>
    </UpperWrapper>
  );
};

export default Title;
