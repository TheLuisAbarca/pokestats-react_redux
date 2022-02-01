import React from 'react';
// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { fetchPokemons } from '../../redux/filter/filter';

const PokeFilterTypes = () => {
  const pokemonCategories = [
    'normal',
    'fire',
    'water',
    'grass',
    'electric',
    'ice',
    'fighting',
    'poison',
    'ground',
    'psychic',
    'bug',
    'rock',
    'ghost',
    'dark',
    'dragon',
    'steel',
    'fairy',
  ];

  const [category, setCategory] = React.useState('normal');
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    if (e.target.value !== '') {
      setCategory(e.target.value);
      dispatch(fetchPokemons(e.target.value));
    }
    e.preventDefault();
  };

  return (
    <div className="form-group w-75 m-auto">
      <h3 className="d-flex justify-content-center align-items-center">
        Pokemon Type:
        <span className="ml-2">
          <select name="category" className="custom-select" value={category} onChange={(e) => handleFilterChange(e)}>
            <option value="">Select category</option>
            {pokemonCategories.map((type) => (<option key={type} value={type}>{type}</option>))}
          </select>
        </span>
      </h3>
      <h3>{ category }</h3>
    </div>
  );
};

PokeFilterTypes.defaultProps = {
  category: 'normal',
};

export default PokeFilterTypes;
