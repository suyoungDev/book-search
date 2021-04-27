import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import Nav from './Nav';
import Info from './Info';
import { Props } from './Toggle';
import { LeftWrapper } from '../../Components/SideWrapper';

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
