import React from 'react';
import styled from 'styled-components';
import Toggle from './Toggle';
import Heart from './Heart';

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
  }

  ${(props) => props.theme.media.tablet} {
    flex-direction: row;
  }
`;

export interface Props {
  toggle: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Info: React.FC<Props> = ({ toggle }) => {
  return (
    <Container>
      <Toggle toggle={toggle} />
      <Heart />
    </Container>
  );
};

export default Info;
