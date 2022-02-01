import {
  fetchPokemonsPending,
  fetchPokemonsSuccess,
  fetchPokemonsError,
} from '../pokemon/pokemon';
import { pokemonsType } from '../../API/pokemonAPI';

const FILTER_TYPE = 'FILTER_TYPE';

export const changeType = (type) => ({
  type: FILTER_TYPE,
  category: type,
});

export const fetchPokemons = (type) => async (dispatch) => {
  dispatch(fetchPokemonsPending());
  try {
    const response = await pokemonsType(type);
    const pokemons = response.pokemon.map(async (pok) => {
      const res = await fetch(pok.pokemon.url);
      return res.json();
    });
    const pokemonsData = await Promise.all(pokemons);
    const payload = pokemonsData.map((data) => ({
      name: data.name,
      image: data.sprites.front_default,
      weight: data.weight,
    }));
    dispatch(fetchPokemonsSuccess(payload));
    dispatch(changeType(type));
    return response;
  } catch (e) {
    dispatch(fetchPokemonsError(e));
    return e;
  }
};

const filterType = (state = 'normal', action) => {
  switch (action.type) {
    case FILTER_TYPE:
      return action.category;
    default:
      return state;
  }
};

export const getPokemonType = (category) => category;

export default filterType;
