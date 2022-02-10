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
          style={{ height: '136px' }}
        >
          <Row
            className={`
            
            w-100
            `}
          >
            <Col
              xs={12}
              sm={4}
              md={4}
              lg={4}
              xl={4}
            >
              <img
                src={pokemon.image}
                alt={pokemon.name}
                className="justify-content-center align-items-center"
              />
              <i className="d-sm-none justify-content-end far fa-arrow-alt-circle-right text-app mt-1 mb-4 h5 rightUpperIcon" />
            </Col>
            <Col
              xs={12}
              sm={8}
              md={8}
              lg={8}
              xl={8}
            >
              <Row>
                <Col
                  xs={12}
                  className="d-none d-sm-flex justify-content-end"
                >
                  <i className="far fa-arrow-alt-circle-right text-app mt-1 mb-4 h5" />
                </Col>
              </Row>
              <span
                className="d-flex flex-column align-items-end text-white mt-4"
                style={{ cursor: 'pointer' }}
              >
                <h5
                  className="d-inline-block m-0 text-end fw-bold font-app"
                  style={{ fontSize: '0.8rem' }}
                >
                  {pokemon.name.toUpperCase()}
                </h5>
                <p
                  className="font-app text-end fw-bold"
                  style={{ width: '80px', fontSize: '0.8rem' }}
                >
                  {
                  Number(pokemon.weight).toLocaleString()
                  }
                  {' Kg.'}
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
