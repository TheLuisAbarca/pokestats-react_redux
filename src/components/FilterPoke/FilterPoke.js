import React from 'react';
import { useDispatch } from 'react-redux';
import { Col } from 'react-bootstrap';
import { fetchPokemons } from '../../redux/filter/filter';
import { changeName } from '../../redux/search/search';

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
      dispatch(changeName(''));
    }
    e.preventDefault();
  };

  return (
    <Col
      xs={12}
      sm={12}
      md={6}
      lg={6}
      xl={6}
    >
      <h3 className="d-flex justify-content-center align-items-center text-app">
        Pokemon Type:
        <span className="ml-2">
          <select name="category" className="custom-select" value={category} onChange={(e) => handleFilterChange(e)}>
            <option value="">Select category</option>
            {pokemonCategories.map((type) => (<option key={type} value={type}>{type}</option>))}
          </select>
        </span>
      </h3>
    </Col>
  );
};

PokeFilterTypes.defaultProps = {
  category: 'normal',
};

export default PokeFilterTypes;
