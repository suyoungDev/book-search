import React from 'react';
import styled from 'styled-components';
import Toggle from './Toggle';
import Heart from './Heart';

const Container = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;

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
