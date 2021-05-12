import React from 'react';

import Logo from './Logo';
import Nav from './Nav';
import Info from './Info';
import { Props } from './Toggle';
import { LeftWrapper } from '../../Components/SideWrapper';

const Header: React.FC<Props> = ({ toggle }) => {
  return (
    <LeftWrapper>
      <div>
        <Logo />
        <Nav />
      </div>
      <Info toggle={toggle} />
    </LeftWrapper>
  );
};

export default Header;
