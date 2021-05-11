import React from 'react';
import styled from 'styled-components';
import { IoBookOutline } from 'react-icons/io5';

const Wrapper = styled.div`
  display: none;

  ${(props) => props.theme.media.desktopL} {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
  }
`;

const Logo: React.FC = () => {
  return (
    <Wrapper>
      <h1>
        <IoBookOutline />
      </h1>
    </Wrapper>
  );
};

export default Logo;
