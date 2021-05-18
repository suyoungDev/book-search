import React from 'react';

import Nav from './Nav';
import Info from './Info';
import { Props } from './Toggle';
import { LeftWrapper } from '../../Components/SideWrapper';
import Burger from './Burger';

const Header: React.FC<Props> = ({ toggle }) => {
  return (
    <>
      <LeftWrapper>
        <Nav />
        <Info toggle={toggle} />
        <Burger />
      </LeftWrapper>
    </>
  );
};

export default Header;
