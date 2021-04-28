import { combineReducers } from 'redux';
import bookReducer from './book.reducer';

const rootReducer = combineReducers({ bookReducer });

export default rootReducer;
