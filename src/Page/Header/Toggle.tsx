import React from 'react';

export interface Props {
  toggle: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Side: React.FC<Props> = ({ toggle }) => {
  return <button onClick={toggle}>토글</button>;
};

export default Side;
