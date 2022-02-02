import React from 'react';
import PropTypes from 'prop-types';
import { LinkContainer } from 'react-router-bootstrap';
// import { useDispatch } from 'react-redux';
// eslint-disable-next-line
const AllPokemon = ({ pokemon }) => {
  // const dispatch = useDispatch();
  // console.log(pokemon);

  return (
    <>
      <LinkContainer key={pokemon.name} to={`/details/${pokemon.name}`}>
        <div key={pokemon.name}>
          <h1>{pokemon.name}</h1>
          <img src={pokemon.image} alt={pokemon.name} />
          <p>
            {pokemon.weight}
            {' Kg.'}
          </p>
        </div>
      </LinkContainer>
    </>
  );
};

AllPokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    weight: PropTypes.number,
  }).isRequired,
};

export default AllPokemon;
