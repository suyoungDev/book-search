import { combineReducers } from 'redux';
import bookReducer from './book.reducer';
import detailReducer from './detail.reducer';
import modalReducer from './modal.reducer';

const rootReducer = combineReducers({
  bookReducer,
  detailReducer,
  modalReducer,
});

export default rootReducer;
