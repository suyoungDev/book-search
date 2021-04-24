import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 2rem 0 0 2rem;
`;

const Logo: React.FC = () => {
  return (
    <Wrapper>
      <h1>
        <a>Book</a>
      </h1>
    </Wrapper>
  );
};

export default Logo;
