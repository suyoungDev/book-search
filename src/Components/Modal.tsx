import React, { useRef, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CgClose } from 'react-icons/cg';

import { RootReducerType } from '../reducer/store';
import { openModal } from '../actions/modal.action';
import { Background, ModalWrapper } from './Modal.styles';

const Modal: React.FC = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector(
    (state: RootReducerType) => state.modalReducer
  );

  const closeModal = useCallback(() => {
    dispatch(openModal(false));
  }, [dispatch]);

  const closeModalOutside = useCallback(
    (e) => {
      if (modalRef.current === e.target) closeModal();
    },
    [closeModal]
  );

  const modalRef = useRef<HTMLDivElement>(null);

  const keyPress = useCallback((e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => {
      document.addEventListener('keydown', keyPress);
    };
  }, [keyPress]);

  return (
    <>
      {isOpen && (
        <Background ref={modalRef} onClick={closeModalOutside}>
          <ModalWrapper>
            <button onClick={closeModal}>
              <CgClose />
            </button>
          </ModalWrapper>
        </Background>
      )}
    </>
  );
};

export default Modal;
