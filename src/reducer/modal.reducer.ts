import {
  modalDispatchType,
  IS_MODAL_OPEN,
} from '../actions/modal.action.types';
import { PayloadType } from '../actions/modal.action.types';

type InitialState = {
  isOpen: boolean;
  modalPayload?: PayloadType | null;
};

const initialState: InitialState = {
  isOpen: false,
  modalPayload: null,
};

const ModalReducer = (
  state = initialState,
  action: modalDispatchType
): InitialState => {
  switch (action.type) {
    case IS_MODAL_OPEN:
      return {
        isOpen: action.isOpen,
        modalPayload: action.modalPayload,
      };

    default:
      return state;
  }
};

export default ModalReducer;
