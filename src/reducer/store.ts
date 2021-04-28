import { applyMiddleware, createStore } from 'redux';
import rootReducer from './index';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootReducerType = ReturnType<typeof rootReducer>;

export default store;
