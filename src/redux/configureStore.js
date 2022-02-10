import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import pokemonsReducer from './pokemon/pokemon';
import filterReducer from './filter/filter';
import searchReducer from './search/search';

const reducer = combineReducers({
  pokemons: pokemonsReducer,
  filter: filterReducer,
  search: searchReducer,
});

const middleWares = [thunk, logger];

const store = createStore(
  reducer,
  applyMiddleware(...middleWares),
);

export default store;
