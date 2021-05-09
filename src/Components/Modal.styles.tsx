import styled from 'styled-components';

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  cursor: auto;
  backdrop-filter: blur(2px);
`;

export const ModalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: auto;
  border-radius: 10px;
  background-color: white;
  position: relative;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  padding: 2rem;
`;
