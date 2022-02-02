import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokemons } from '../../redux/filter/filter';
// import { fetchPokemons } from '../../redux/filter/filter';
// import { getPokemonsPending } from '../../redux/pokemon/pokemon';
import AllPokemon from '../AllPokemon/AllPokemon';
import FilterPoke from '../FilterPoke/FilterPoke';

const Home = () => {
  const pokemonsData = useSelector((state) => state.pokemons);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPokemons('normal'));
  }, [dispatch]);
  console.log(pokemonsData);

  const loader = <div className="loader">Cargando</div>;

  return (
    <div className="container bg-black">
      <Row className="justify-content-center">
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h1 className="text-center text-white">
              { (pokemonsData.pending) ? 0 : pokemonsData.pokemons.length }
              {' '}
              Pokemons in this category
              {' '}
              {filter}
            </h1>
            <h3 className="text-center text-white">
              Pokemons
            </h3>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <FilterPoke />
          </div>
        </Col>
      </Row>
      { (!pokemonsData.pending) ? pokemonsData.pokemons.map((pokemon) => (
        <AllPokemon key={pokemon.name} pokemon={pokemon} />
      )) : loader }
    </div>
  );
};
/*
{!pokemonsData.pending && loader}
{pokemonsData.pending && pokemonComponents}
<FilterPoke setTypePokemon={() => handleFilterChange} category={category} />
*/
export default Home;
