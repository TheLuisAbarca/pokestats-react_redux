import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const reducer = combineReducers({

});

const middleWares = [thunk, logger];

const store = createStore(
  reducer,
  applyMiddleware(...middleWares),
);

export default store;
