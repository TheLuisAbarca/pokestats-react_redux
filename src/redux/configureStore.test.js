import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import {
  FETCH_POKE_PENDING, FETCH_POKE_SUCCESS,
} from './pokemon/pokemon';
import {
  FILTER_TYPE, fetchPokemons,
} from './filter/filter';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Actions of APIs', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates FETCH_POKEMONS_SUCCESS when fetching pokemons has been done', () => {
    fetchMock.get('https://pokeapi.co/api/v2/type/normal', {
      pokemons: [
        {
          pokemon: {
            name: 'pidgey',
            url: 'https://pokeapi.co/api/v2/pokemon/16/',
          },
          slot: 1,
        },
      ],
    },
    { delay: 1000 });

    const expectedActions = [
      {
        type: FETCH_POKE_PENDING,
      },
      {
        type: FETCH_POKE_SUCCESS,
        pokemons: [],
      },
      {
        type: FILTER_TYPE,
        category: 'normal',
      },
    ];
    const store = mockStore({
      data: {
        pokemons: [],
        pending: true,
        error: null,
      },
      filter: 'normal',
    });

    return store.dispatch(fetchPokemons('normal')).then(() => {
      expect(store.getActions()).not.toBe(expectedActions);
    });
  });
});
