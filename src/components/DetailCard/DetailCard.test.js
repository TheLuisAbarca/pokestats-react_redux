import { mount } from 'enzyme';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import DetailCard from './DetailCard';

describe('DetailCard test', () => {
  let wrapper;
  const pokemon = {
    details: {
        name: 'charizard',
        abilities: [
          {
            ability: {
              name: 'solar-power',
              url: 'https://pokeapi.co/api/v2/ability/94/',
            },
            is_hidden: true,
            slot: 3,
          },
        ],
        sprites: {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
        },
        stats: [
          {
            base_stat: 100,
            effort: 0,
            stat: {
              name: 'speed',
              url: 'https://pokeapi.co/api/v2/stat/6/',
            },
          },
        ],
    },
  };

  beforeEach(() => {
    wrapper = mount(
      <Router>
        <DetailCard pokemon={pokemon} />
      </Router>,
    );
  });

  it('Renders pokemon image', () => {
    expect(wrapper.find({ alt: pokemon.details.name })).toHaveLength(1);
  });

  it('Renders pokemon abilities', () => {
    expect(wrapper.find('.abilities')).toHaveLength(2);
  });
});