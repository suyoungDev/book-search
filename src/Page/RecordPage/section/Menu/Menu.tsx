import React from 'react';
import styled from 'styled-components';
import MenuModule from './MenuModule';

const Container = styled.div`
  border: 1px solid ${(props) => props.theme.colors.border};
  background-color: ${(props) => props.theme.colors.body60};
  color: ${(props) => props.theme.colors.ink50};

  ul {
    list-style: none;
  }

  li:first-child {
    border-bottom: 1px solid ${(props) => props.theme.colors.border};
  }
`;

const MENU_LIST = [
  { title: '삭제', id: 'delete' },
  { title: '수정', id: 'modify' },
];

const Menu = () => {
  return (
    <Container>
      <ul>
        {MENU_LIST.map((item) => (
          <li key={item.id} onClick={() => console.log('hehe')}>
            <MenuModule title={item.title} />
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Menu;
