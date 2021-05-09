import styled from 'styled-components';

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.colors.modalBackground};
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
  display: grid;
  grid-template-rows: 3rem 1fr;
  width: 400px;
  height: 400px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.body50};
  position: relative;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
`;
