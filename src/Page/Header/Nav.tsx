import React from 'react';
import styled from 'styled-components';
import LinkButton from '../../Components/LinkButton';

const NavWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 4.5rem;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    list-style: none;

    li {
      :not(:first-of-type) {
        margin-top: 1rem;
      }
    }
  }
`;

const NAV_LIST = [
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
