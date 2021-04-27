import React from 'react';

import Logo from './Logo';
import Nav from './Nav';
import Info from './Info';
import Toggle, { Props } from './Toggle';
import { LeftWrapper } from '../../Components/SideWrapper';
import styled from 'styled-components';

const Container = styled.header`
  width: 100%;
  position: relative;
`;

const Header: React.FC<Props> = ({ toggle }) => {
  return (
    <LeftWrapper>
      <Container>
        <Logo />
        <Nav />
        <Info toggle={toggle} />
      </Container>
    </LeftWrapper>
  );
};

export default Header;
