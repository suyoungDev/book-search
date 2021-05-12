import { combineReducers } from 'redux';
import bookReducer from './book.reducer';
import detailReducer from './detail.reducer';
import modalReducer from './modal.reducer';
import recordReducer from './record.reducer';

const rootReducer = combineReducers({
  bookReducer,
  detailReducer,
  modalReducer,
  recordReducer,
});

export default rootReducer;
