import { Dispatch } from 'redux';
import { IS_MODAL_OPEN, modalDispatchType } from './modal.action.types';

export const openModal = (isOpen: boolean) => (
  dispatch: Dispatch<modalDispatchType>
) => {
  dispatch({ type: IS_MODAL_OPEN, isOpen });
};
