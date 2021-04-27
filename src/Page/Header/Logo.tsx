import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: none;
  width: 100%;

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
      <h1>READ</h1>
    </Wrapper>
  );
};

export default Logo;
