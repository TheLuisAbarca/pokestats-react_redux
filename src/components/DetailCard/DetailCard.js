import PropTypes from 'prop-types';
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import {
  Radar, RadarChart, PolarGrid,
  PolarAngleAxis, PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';

const DetailCard = ({ pokemon }) => {
  const data = pokemon.details.stats.map((stats) => {
    const container = {};
    container.name = stats.stat.name.toUpperCase();
    container.x = stats.base_stat;
    container.y = 'N/A';
    container.y1 = 'N/A';

    return container;
  });

  return (
    <div className="card body-dark">
      <Row className="card-title font-app">
        <h2>{pokemon.details.name.toUpperCase()}</h2>
      </Row>
      <Row
        className="justify-content-center align-items-center"
      >
        {pokemon.details.abilities.map((type) => (
          <Col
            key={`${pokemon.details.name}-${type.ability.name}`}
            xs={12}
            sm={12}
            md={3}
            lg={4}
            className="d-flex justify-content-center abilities"
          >
            <div
              className="badge badge-pill mb-2 mb-md-0 bg-dark2 text-app"
            >
              {type.ability.name.toUpperCase()}
              {' '}
            </div>
          </Col>
        ))}
      </Row>
      <Row
        className="justify-content-center"
      >
        <Col
          xs={12}
          sm={12}
          md={6}
          lg={6}
          width={420}
          height={500}
          className="card-image d-flex justify-content-center align-items-center"
        >
          <img
            src={pokemon.details.sprites.front_default}
            alt={pokemon.details.name}
            style={
              {
                height: '500px',
                width: '420px',
              }
            }
            className="img-fluid"
          />
        </Col>
        <Col
          xs={12}
          sm={12}
          md={6}
          lg={6}
          width={500}
          height={500}
          className="card-image d-flex justify-content-center align-items-center"
        >
          <ResponsiveContainer>
            <RadarChart
              height={500}
              width={500}
              outerRadius="80%"
              stroke="#8884d8"
              style={
                {
                  textAnchor: 'middle',
                  fontSize: '100%',
                  fontWeight: 'bold',
                  fill: '#ecb365',
                }
              }
              data={data}
            >
              <PolarGrid />
              <PolarAngleAxis
                dataKey="name"
              />
              <PolarRadiusAxis />
              <Radar
                dataKey="x"
                stroke="green"
                fill="green"
                fillOpacity={0.5}
              />
            </RadarChart>
          </ResponsiveContainer>
        </Col>
      </Row>
    </div>
  );
};

DetailCard.propTypes = {
  pokemon: PropTypes.shape({
    details: PropTypes.shape({
      name: PropTypes.string.isRequired,
      sprites: PropTypes.shape({ front_default: PropTypes.string }),
      abilities: PropTypes.arrayOf(
        PropTypes.shape({
          ability: PropTypes.shape({
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
          }),
          is_hidden: PropTypes.bool.isRequired,
          slot: PropTypes.number.isRequired,
        }),
      ),
      stats: PropTypes.arrayOf(
        PropTypes.shape({
          base_stat: PropTypes.number.isRequired,
        }),
      ),
    }).isRequired,
    pendingPokemon: PropTypes.bool,
  }).isRequired,
};

export default DetailCard;
