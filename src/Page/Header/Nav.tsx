import React from 'react';
import NavLink from './NavLink';
import { NavWrapper, NavLi, NavUL } from './Nav.styles';

const NAV_LIST = [
  {
    url: '/',
    title: '처음으로',
  },
  {
    url: '/record',
    title: '기록',
  },
];

const Nav: React.FC = () => {
  return (
    <NavWrapper>
      <NavUL>
        <NavLi className='logo'>
          <NavLink url='/' title='logo' />
        </NavLi>
        {NAV_LIST.map((item) => (
          <NavLi key={item.title}>
            <NavLink url={item.url} title={item.title} />
          </NavLi>
        ))}
      </NavUL>
    </NavWrapper>
  );
};

export default Nav;
