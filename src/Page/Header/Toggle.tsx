import React from 'react';
import styled from 'styled-components';

const Option = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export interface Props {
  toggle: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Side: React.FC<Props> = ({ toggle }) => {
  return <button onClick={toggle}>토글</button>;
};

export default Side;
