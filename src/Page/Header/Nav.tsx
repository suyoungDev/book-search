import React from 'react';
import styled from 'styled-components';
import LinkButton from '../../Components/LinkButton';

const NavWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 2rem;

  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    list-style: none;

    li {
      padding: 0 1rem;
    }

    li:not(:first-of-type) {
      margin-top: 0.5rem;
    }
  }
`;

const NAV_LIST = [
  { url: '/', title: 'logo' },
  {
    url: '/',
    title: '첫 화면',
  },
  {
    url: '/record',
    title: '기록',
  },
];

const Nav: React.FC = () => {
  return (
    <NavWrapper>
      <ul>
        {NAV_LIST.map((item) => (
          <li key={item.url}>
            <LinkButton url={item.url} title={item.title} />
          </li>
        ))}
      </ul>
    </NavWrapper>
  );
};

export default Nav;
