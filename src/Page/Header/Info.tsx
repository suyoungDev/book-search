import React from 'react';
import styled from 'styled-components';
import Toggle from './Toggle';
import Heart from './Heart';
import { Props } from './Toggle';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  width: 50%;

  ${(props) => props.theme.media.phone} {
    width: 100%;
    justify-content: space-around;
    margin-bottom: 0.7rem;
  }

  ${(props) => props.theme.media.tablet} {
    flex-direction: row;
    margin-bottom: 1rem;
  }
`;

const Info: React.FC<Props> = ({ toggle, theme }) => {
  return (
    <Container>
      <Toggle toggle={toggle} theme={theme} />
      <Heart />
    </Container>
  );
};

export default Info;
