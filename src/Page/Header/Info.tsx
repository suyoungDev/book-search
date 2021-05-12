import React from 'react';
import styled from 'styled-components';
import Toggle from './Toggle';
import { BsHeartFill } from 'react-icons/bs';

const Container = styled.section`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`;

const HeartWrapper = styled.div`
  position: relative;
  height: 1.3rem;

  .icons {
    font-size: 1.4rem;
  }
`;

const Count = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  pointer-events: none;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;

  span {
    font-size: 0.5rem;
    color: ${(props) => props.theme.colors.invert};
  }
`;

export interface Props {
  toggle: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Info: React.FC<Props> = ({ toggle }) => {
  return (
    <Container>
      <Toggle toggle={toggle} />
      <div>
        <HeartWrapper>
          <BsHeartFill />
          <Count>
            <span>01</span>
          </Count>
        </HeartWrapper>
      </div>
    </Container>
  );
};

export default Info;
