import React from 'react';
import styled from 'styled-components';

const Option = styled.div`
  width: 10vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export interface Props {
  toggle: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Side: React.FC<Props> = ({ toggle }) => {
  return (
    <Option>
      <button onClick={toggle}>토글</button>
    </Option>
  );
};

export default Side;
