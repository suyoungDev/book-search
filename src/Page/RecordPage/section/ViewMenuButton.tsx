import React, { useState, useEffect, useRef } from 'react';
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

  const toggle = (): void => {
    setIsOpen(!isOpen);
  };

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener('mousedown', (event: MouseEvent) => {
      const target: HTMLElement | null = event.target;
      if (!menuRef.current?.contains(target)) setIsOpen(false);
    });
    return () => {};
  }, []);

  return (
    <>
      <CirceButton className='record' onClick={toggle}>
        <IoIosMore />
      </CirceButton>
      <MenuContainer className={`${isOpen && 'active'}`} ref={menuRef}>
        <Menu />
      </MenuContainer>
    </>
  );
};

export default ViewMenuButton;
