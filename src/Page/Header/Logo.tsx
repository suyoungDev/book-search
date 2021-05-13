import React from 'react';
import styled from 'styled-components';
import { BiBookReader } from 'react-icons/bi';

const Wrapper = styled.div`
  display: none;

  ${(props) => props.theme.media.desktopL} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Logo: React.FC = () => {
  return (
    <Wrapper>
      <BiBookReader />
    </Wrapper>
  );
};

export default Logo;
