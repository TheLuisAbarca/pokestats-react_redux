import { fetchPokemon } from './pokemon';
jest.mock('./pokemon');

describe('Api Response Pokemon', () => {
  it('Returns single pokemon object/array', async () => {
    const pokemon = {
      name: 'squirtle',
      abilities: [{
        ability: {
          name: 'rain-dish',
          url: 'https://pokeapi.co/api/v2/ability/44/',
        },
        is_hidden: true,
        slot: 3,
      },
      {
        ability: {
          name: 'torrent',
          url: 'https://pokeapi.co/api/v2/ability/67/',
        },
        is_hidden: false,
        slot: 1,
      }],
      sprites: {
        back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png',
        back_female: null,
        back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/7.png',
        back_shiny_female: null,
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
        front_female: null,
        front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/7.png',
        front_shiny_female: null,
      },
      stats: [
        {
          base_stat: 43,
          effort: 0,
          stat: {
            name: 'speed',
            url: 'https://pokeapi.co/api/v2/stat/6/',
          },
        },
      ],
    };

    fetchPokemon.mockResolvedValue({ pokemon });
    const pokemonObject = await fetchPokemon('squirtle');
    expect(pokemonObject).toEqual({ pokemon });
  });

  it('Returns error when pokemon is not found by name', async () => {
    const error = 'Not Found';

    fetchPokemon.mockResolvedValue({ error });
    const pokemonError = await fetchPokemon('jjjjjj');
    expect(pokemonError).toEqual({ error });
  });
});