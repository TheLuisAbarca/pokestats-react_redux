import PropTypes from 'prop-types';

const DetailCard = ({ pokemon }) => {
  console.log(pokemon);
  if (pokemon.pendingPokemon) {
    console.log('pending');
    return true;
  }
  console.log('not pending');
  return (
    <div className="card">
      <div className="card-title">
        <h2>{pokemon.details.name}</h2>
      </div>
      <div className="card-image">
        <img
          src={pokemon.details.sprites.front_default}
          alt={pokemon.details.name}
        />
      </div>
      {pokemon.details.abilities.map((type) => (
        <span key={`${pokemon.details.name}-${type.ability.name}`}>
          {type.ability.name}
          {' '}
        </span>
      ))}
      {pokemon.details.stats.map((stats) => (
        <span key={stats.stat.name} className="mb-3">
          <span>
            {stats.stat.name}
            :
          </span>
          {' '}
          {stats.base_stat}
        </span>
      ))}
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
