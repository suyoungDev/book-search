import React from 'react';
import styled from 'styled-components';
import { CgClose, CgBandAid } from 'react-icons/cg';

interface Props {
  title: string;
}

const Module = styled.div`
  padding: 0.3rem 0.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 0.85rem;

  .icons {
    margin-right: 0.5rem;
  }
  :hover {
    background-color: ${(props) => props.theme.colors.body50};
  }
`;

const MenuModule: React.FC<Props> = ({ title }) => {
  return (
    <Module>
      {title === '삭제' && <CgClose />}
      {title === '수정' && <CgBandAid />}
      <span>{title}</span>
    </Module>
  );
};

export default MenuModule;
