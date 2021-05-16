import React, { useRef, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CgClose } from 'react-icons/cg';

import { Background, ModalWrapper, ButtonWrapper } from './Modal.styles';
import { CirceButton } from '../Components/Button';

import { RootReducerType } from '../reducer/store';
import { openModal } from '../actions/modal.action';

const Modal: React.FC<{}> = ({ children }) => {
  const { isOpen } = useSelector(
    (state: RootReducerType) => state.modalReducer
  );
  const dispatch = useDispatch();

  const modalRef = useRef<HTMLDivElement>(null);

  const closeModal = useCallback(() => {
    dispatch(openModal(false));
  }, [dispatch]);

  const closeModalOutside = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (modalRef.current === e.target) closeModal();
    },
    [closeModal]
  );

  const keyPress = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    },
    [closeModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => {
      document.addEventListener('keydown', keyPress);
    };
  }, [keyPress]);

  if (!isOpen) return null;

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
