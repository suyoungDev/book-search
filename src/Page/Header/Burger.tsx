import React, { useState } from 'react';
import useClickOutside from '../../Hook/useClickOutside';
import { StyledBurger, MenuContainer } from './Burger.styles';

const Burger = () => {
  const [open, setOpen] = useState(false);

  const close = () => {
    setOpen(false);
  };

  const openMenu = () => {
    setOpen(!open);
  };

  let domNode = useClickOutside(() => close());

  return (
    <>
      <StyledBurger open={open} onClick={openMenu}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <MenuContainer open={open} ref={domNode}>
        이게 보였다 안보였다해야댐
      </MenuContainer>
    </>
  );
};

export default Burger;
