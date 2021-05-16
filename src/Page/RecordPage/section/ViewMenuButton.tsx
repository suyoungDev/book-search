import React, { useState, useEffect, useRef, useCallback } from 'react';
import { IoIosMore } from 'react-icons/io';
import styled from 'styled-components';
import { CirceButton } from '../../../Components/Button';
import Menu from './Menu/Menu';

const MenuContainer = styled.div`
  display: none;

  &.active {
    display: flex;
    position: absolute;
    right: 1rem;
  }
`;

const ViewMenuButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  const escapeMenu = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') close();
  }, []);

  const closeMenu = useCallback((event) => {
    const target: HTMLDivElement = event.target;
    if (!menuRef.current?.contains(target)) close();
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', closeMenu);
    document.addEventListener('keydown', escapeMenu);
    return () => {
      document.removeEventListener('mousedown', closeMenu);
      document.removeEventListener('keydown', escapeMenu);
    };
  }, [escapeMenu, closeMenu]);

  return (
    <>
      <CirceButton className='record' onClick={open} title='추가메뉴'>
        <IoIosMore />
      </CirceButton>
      <MenuContainer className={`${isOpen && 'active'}`} ref={menuRef}>
        <Menu />
      </MenuContainer>
    </>
  );
};

export default ViewMenuButton;
