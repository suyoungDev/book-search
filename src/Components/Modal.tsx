import React, { useRef, useCallback, useEffect } from 'react';
import { CgClose } from 'react-icons/cg';

import { Background, ModalWrapper, ButtonWrapper } from './Modal.styles';
import { CirceButton } from '../Components/Button';
import { useHistory } from 'react-router';

const Modal: React.FC = ({ children }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const history = useHistory();

  const closeModal = useCallback(() => {
    history.goBack();
  }, []);

  const closeModalOutside = useCallback(
    (e) => {
      if (modalRef.current === e.target) closeModal();
    },
    [closeModal]
  );

  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => {
      document.addEventListener('keydown', keyPress);
    };
  }, [keyPress]);

  return (
    <Background ref={modalRef} onClick={closeModalOutside}>
      <ModalWrapper>
        <ButtonWrapper>
          <CirceButton onClick={closeModal}>
            <CgClose />
          </CirceButton>
        </ButtonWrapper>
        {children}
      </ModalWrapper>
    </Background>
  );
};

export default Modal;
