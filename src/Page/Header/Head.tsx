import React from 'react';

import Logo from './Logo';
import Nav from './Nav';
import Toggle, { Props } from './Toggle';
import { Wrapper } from '../../Components/SideWrapper';

const Header: React.FC<Props> = ({ toggle }) => {
  return (
    <Wrapper width={20} maxWidth={300}>
      <header>
        <Logo />
        <Nav />
        <Toggle toggle={toggle} />
      </header>
    </Wrapper>
  );
};

export default Header;
