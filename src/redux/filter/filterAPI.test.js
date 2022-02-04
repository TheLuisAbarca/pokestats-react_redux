import { fetchPokemons } from './filter';
jest.mock('./filter');

describe('Api Response Filter', () => {
  it('Returns a list of existent pokemons', async () => {
    const pokemons = [
      {
        pokemon: {
          name: 'pidgey',
          url: 'https://pokeapi.co/api/v2/pokemon/16/',
        },
        slot: 1,
      },
      {
        pokemon: {
          name: 'pidgeotto',
          url: 'https://pokeapi.co/api/v2/pokemon/17/',
        },
        slot: 1,
      },
      {
        pokemon: {
          name: 'pidgeot',
          url: 'https://pokeapi.co/api/v2/pokemon/18/',
        },
        slot: 1,
      },
      {
        pokemon: {
          name: 'rattata',
          url: 'https://pokeapi.co/api/v2/pokemon/19/',
        },
        slot: 1,
      },
    ];
    fetchPokemons.mockResolvedValue({ pokemons });
    const pokemonList = await fetchPokemons('normal');
    expect(pokemonList).toEqual({ pokemons });
  });

  it('Returns error when type is not found', async () => {
    const error = 'Not Found';
    fetchPokemons.mockResolvedValue({ error });
    const pokemonListError = await fetchPokemons('n');
    expect(pokemonListError).toEqual({ error });
  });
});