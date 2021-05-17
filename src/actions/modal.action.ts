import { Dispatch } from 'redux';
import { IS_MODAL_OPEN, modalDispatchType } from './modal.action.types';
import { PayloadType } from './modal.action.types';

export const openModal =
  (isOpen: boolean, payload?: PayloadType) =>
  (dispatch: Dispatch<modalDispatchType>) => {
    if (payload) dispatch({ type: IS_MODAL_OPEN, isOpen, payload });
    else dispatch({ type: IS_MODAL_OPEN, isOpen });
  };
