import { pokemonProps } from '../../API/pokemonAPI';

const FETCH_POKE_PENDING = 'FETCH_POKE_PENDING';
const FETCH_POKE_SUCCESS = 'FETCH_POKE_SUCCESS';
const FETCH_POKE_ERROR = 'FETCH_POKE_ERROR';
const FETCH_ONEPOKE_PENDING = 'FETCH_ONEPOKE_PENDING';
const FETCH_ONEPOKE_SUCCESS = 'FETCH_ONEPOKE_SUCCESS';
const FETCH_ONEPOKE_ERROR = 'FETCH_ONEPOKE_ERROR';

export const fetchPokemonsPending = () => ({
  type: FETCH_POKE_PENDING,
});

export const fetchPokemonsSuccess = (data) => ({
  type: FETCH_POKE_SUCCESS,
  pokemons: data,
});

export const fetchPokemonsError = (error) => ({
  type: FETCH_POKE_ERROR,
  error,
});

export const fetchSinglePokemonPending = () => ({
  type: FETCH_ONEPOKE_PENDING,
});

export const fetchSinglePokemonSuccess = (pokemon) => ({
  type: FETCH_ONEPOKE_SUCCESS,
  pokemons: pokemon,
});

export const fetchSinglePokemonError = (error) => ({
  type: FETCH_ONEPOKE_ERROR,
  error,
});

export const fetchPokemon = (name) => async (dispatch) => {
  dispatch(fetchSinglePokemonPending());
  try {
    const response = await pokemonProps(name);
    const pokemon = {
      name: response.name,
      abilities: response.abilities,
      sprites: response.sprites,
      stats: response.stats,
    };
    dispatch(fetchSinglePokemonSuccess(pokemon));
    return pokemon;
  } catch (e) {
    dispatch(fetchSinglePokemonError(e));
    return e;
  }
};

const pokemonsReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_POKE_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_POKE_SUCCESS:
      return {
        ...state,
        pending: false,
        pokemons: action.pokemons,
      };
    case FETCH_POKE_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    case FETCH_ONEPOKE_PENDING:
      return {
        ...state,
        pendingPokemon: true,
      };
    case FETCH_ONEPOKE_SUCCESS:
      return {
        ...state,
        pendingPokemon: false,
        pokemons: [action.pokemons],
      };
    case FETCH_ONEPOKE_ERROR:
      return {
        ...state,
        pendingPokemon: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export const getPokemons = (state) => state.pokemons;
export const getPokemonsPending = (state) => state.pending;
export const getPokemonPending = (state) => state.pendingPokemon;
export const getPokemonsError = (state) => state.error;

export default pokemonsReducer;
