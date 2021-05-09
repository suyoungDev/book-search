import {
  modalDispatchType,
  IS_MODAL_OPEN,
} from '../actions/modal.action.types';

type InitialState = {
  isOpen: boolean;
};

const initialState: InitialState = {
  isOpen: false,
};

const ModalReducer = (
  state = initialState,
  action: modalDispatchType
): InitialState => {
  switch (action.type) {
    case IS_MODAL_OPEN:
      return {
        isOpen: action.isOpen,
      };

    default:
      return state;
  }
};

export default ModalReducer;
