import { applyMiddleware, createStore } from 'redux';
import rootReducer from './index';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootReducerType = ReturnType<typeof rootReducer>;

export default store;
