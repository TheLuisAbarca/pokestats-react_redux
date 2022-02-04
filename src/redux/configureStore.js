import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import pokemonsReducer from './pokemon/pokemon';
import filterReducer from './filter/filter';

const reducer = combineReducers({
  pokemons: pokemonsReducer,
  filter: filterReducer,
});

const middleWares = [thunk, logger];

const store = createStore(
  reducer,
  applyMiddleware(...middleWares),
);

export default store;
