import React from 'react';
import { CgClose, CgBandAid } from 'react-icons/cg';
import { Container, Module } from './Menu.styles';
import { useDispatch } from 'react-redux';
import { removeComment } from '../../../../actions/record.action';
import { openModal } from '../../../../actions/modal.action';

interface Prop {
  id: string;
}

const Menu = ({ id }: Prop) => {
  const dispatch = useDispatch();

  const modifyComment = () => {
    dispatch(openModal(true, { id }));
  };

  const deleteComment = () => {
    dispatch(removeComment(id));
  };

  return (
    <Container>
      <ul>
        <li>
          <Module onClick={modifyComment}>
            <CgBandAid /> <span>수정</span>
          </Module>
        </li>
        <li>
          <Module onClick={deleteComment}>
            <CgClose />
            <span>삭제</span>
          </Module>
        </li>
      </ul>
    </Container>
  );
};

export default Menu;
