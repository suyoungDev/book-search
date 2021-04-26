import React from 'react';

import Logo from './Logo';
import Nav from './Nav';
import Toggle, { Props } from './Toggle';
import { LeftWrapper } from '../../Components/SideWrapper';

const Header: React.FC<Props> = ({ toggle }) => {
  return (
    <LeftWrapper width={20} maxWidth={250}>
      <header>
        <Logo />
        <Nav />
        <Toggle toggle={toggle} />
      </header>
    </LeftWrapper>
  );
};

export default Header;
