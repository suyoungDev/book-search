import React from 'react';

import Nav from './Nav';
import Info from './Info';
import { Props } from './Toggle';
import { LeftWrapper } from '../../Components/SideWrapper';

const Header: React.FC<Props> = ({ toggle, theme }) => {
  return (
    <LeftWrapper>
      <Nav />
      <Info toggle={toggle} theme={theme} />
    </LeftWrapper>
  );
};

export default Header;
