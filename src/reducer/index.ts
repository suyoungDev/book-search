import { combineReducers } from 'redux';
import bookReducer from './book.reducer';
import detailReducer from './detail.reducer';

const rootReducer = combineReducers({ bookReducer, detailReducer });

export default rootReducer;
