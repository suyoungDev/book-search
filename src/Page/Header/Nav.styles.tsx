import styled from 'styled-components';

export const NavWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;

  ${(props) => props.theme.media.phone} {
    align-items: flex-end;
    justify-content: flex-end;
  }
  ${(props) => props.theme.media.desktop} {
    margin-right: 2rem;
  }
`;

export const NavUL = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style: none;

  ${(props) => props.theme.media.phone} {
    width: auto;
    flex-direction: column;
    align-items: flex-end;
    margin-top: 2rem;
  }
`;

export const NavLi = styled.li`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) => props.theme.media.phone} {
    justify-content: flex-start;
    width: 100%;
  }

  &.logo {
    display: none;
    ${(props) => props.theme.media.desktopL} {
      display: flex;
    }
  }
`;
