import { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPokemon } from '../../redux/pokemon/pokemon';
import DetailCard from '../DetailCard/DetailCard';

// eslint-disable-next-line
const Details = () => {
  const params = useParams();
  const { name } = params;
  // const pokemonData = useSelector((state) => state.pokemons);
  const pokemonData = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();
  useEffect(() => {
    // if (pokemonData.pending === true) return;
    dispatch(fetchPokemon(name));
    // dispatch(fetchPokemon(name));
  }, [dispatch]);
  console.log(pokemonData);
  /* console.log(pokemonData.pendingPokemon);
  console.log(pokemonData.pokemons[0]); */
  /* const lol = `${pokemonsData.pokemons[0].name}
  ${pokemonsData.pokemons[0].sprites.front_default}`; */
  /*
  const test = (
    <div>
      { (pokemonData.pendingPokemon)
        ? (
          0)
        : (
          pokemonData.pokemons[0].sprites.front_default)}
    </div>
  );
  */
  const loader = <div className="loader bg-black">Cargando</div>;

  return (
    <Row>
      <Col>
        <h1>Details</h1>
        { /* pokemonData.pokemons[0].name */}
        { /* pokemonData.details.name }
        { pokemonData.details.sprites.front_default */ }
        { /* (pokemonsData.pendingPokemon) ? loader : lol */ }
        { /* (pokemonData.pendingPokemon) ? loader : pokemonData.pokemons[0].name */ }
        { (pokemonData.pendingPokemon) ? loader : <DetailCard pokemon={pokemonData} /> }
        {/* pokemonsData.pendingPokemon && loader */}
        {/* !pokemonsData.pendingPokemon && lol */}
        {/* !pokemonsData.pendingPokemon && pokemonComponents */}
      </Col>
    </Row>
  );
};

export default Details;
