import React from 'react';

import Logo from './Logo';
import Nav from './Nav';
import Toggle, { Props } from './Toggle';
import { LeftWrapper } from '../../Components/SideWrapper';
import styled from 'styled-components';

const Container = styled.header`
  width: 100%;
`;

const Header: React.FC<Props> = ({ toggle }) => {
  return (
    <LeftWrapper>
      <Container>
        <Logo />
        <Nav />
        <Toggle toggle={toggle} />
      </Container>
    </LeftWrapper>
  );
};

export default Header;
