import React from 'react';
import styled from 'styled-components';

const NavWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
  width: 100%;

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;

    li {
      padding: 0.8rem;
      :not(:first-of-type) {
        margin-top: 1rem;
      }
    }
  }
`;

const Nav: React.FC = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <a>
            <span>홈</span>
          </a>
        </li>
        <li>
          <a>
            <span>기록</span>
          </a>
        </li>
      </ul>
    </NavWrapper>
  );
};

export default Nav;
