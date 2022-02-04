import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
// import { useDispatch } from 'react-redux';
// eslint-disable-next-line
const AllPokemon = ({ pokemon, index }) => {
  // const dispatch = useDispatch();
  // console.log(pokemon);

  return (
    <>
      <LinkContainer
        key={pokemon.name}
        to={`/details/${pokemon.name}`}
        style={{ cursor: 'pointer' }}
      >
        <Col
          xs={6}
          sm={6}
          md={3}
          className={`
          d-flex flex-column justify-content-between
          align-items-end
          ${([1, 0, 0, 1][index % 4]) ? 'bg-dark1' : 'bg-dark2'}
        `}
        >
          <Row>
            <Col
              xs={6}
            >
              <img src={pokemon.image} alt={pokemon.name} />
            </Col>
            <Col
              xs={6}
            >
              <Row>
                <Col
                  xs={12}
                  className="d-flex justify-content-end"
                >
                  <i className="far fa-arrow-alt-circle-right text-app mt-1 mb-4 h5" />
                </Col>
              </Row>
              <span
                className="d-flex flex-column align-items-end text-white mt-4"
                style={{ cursor: 'pointer' }}
              >
                <h5 className="d-inline-block m-0 text-end fw-bold font-app">{pokemon.name.toUpperCase()}</h5>
                <p className="font-app">
                  {
                  Number(pokemon.weight).toLocaleString()
                }
                  {' '}
                  Kg.
                </p>
              </span>
            </Col>
          </Row>
        </Col>
      </LinkContainer>
    </>
  );
};

AllPokemon.DefaultPropTypes = {
  index: PropTypes.number,
};

AllPokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    weight: PropTypes.number,
  }).isRequired,
};

export default AllPokemon;
