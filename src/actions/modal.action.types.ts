export const IS_MODAL_OPEN = 'IS_MODAL_OPEN';

export interface modalDispatch {
  type: typeof IS_MODAL_OPEN;
  isOpen: boolean;
}

export type modalDispatchType = modalDispatch;
