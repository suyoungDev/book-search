import styled, { css } from 'styled-components';

interface BurgerProps {
  open: boolean;
}

export const StyledBurger = styled.div<BurgerProps>`
  width: 30px;
  height: 30px;
  position: fixed;

  top: 15px;
  left: 15px;

  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  div {
    width: 30px;
    height: 2px;
    background-color: ${({ open }) => (open ? 'red' : 'blue')};
    border-radius: 10px;
    transform-origin: 1px;
    transition: 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

export const MenuContainer = styled.div<BurgerProps>`
  display: ${({ open }) => (open ? 'flex' : 'none')};
`;
