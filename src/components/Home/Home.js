import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
// import Spinner from 'react-bootstrap/Spinner';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokemons } from '../../redux/filter/filter';
import AllPokemon from '../AllPokemon/AllPokemon';
import FilterPoke from '../FilterPoke/FilterPoke';
import PokeWorld from '../../assets/pokeball.svg';

const Home = () => {
  const pokemonsData = useSelector((state) => state.pokemons);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPokemons('normal'));
  }, [dispatch]);
  console.log(pokemonsData);

  // const loader = <div className="loader" />;
  // const loader = <div className="loader bg-black">Loading</div>;
  /*
  const loader = (
    <div className="d-flex justify-content-center">
      <Spinner animation="grow" />
    </div>
  );
  */
  // const loader = <Spinner animation="border" />;
  // const loader = <div className="bg-black text-app">Loading</div>;
  const loader = (
    <div className="d-flex justify-content-center">
      <div className="loader" />
    </div>
  );

  return (
    <div className="body-dark">
      <Row className="m-0">
        <Col xs={6} sm={6} md={6} className="d-flex justify-content-end">
          <img
            src={PokeWorld}
            alt="Pokemon World"
            height="150px"
            className="App-logo"
          />
        </Col>
        <Col xs={6} sm={6} md={6} className="p-0 text-white d-flex flex-column justify-content-center">
          <h1 className="fw-bold m-0">GLOBAL</h1>
          <p>
            { (pokemonsData.pending) ? 0 : pokemonsData.pokemons.length }
            {' '}
            Pokemons in this category
            {' '}
            {filter}
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <FilterPoke />
          </div>
        </Col>
      </Row>
      <Row className="pt-3 m-0 mt-4 bg-dark1" style={{ height: '70vh' }}>
        <Col
          xs={12}
          sm={12}
          md={12}
          className="d-flex flex-column justify-content-start"
        >
          <h6 className="text-app fw-bold m-0 p-2 d-inline-block">{`Pokemons of ${filter.toUpperCase()} type`}</h6>
        </Col>
        { /* (pokemonsData.pending) ? loader : pokemonsData.pokemons.map((pokemon, index) => (
          <AllPokemon key={pokemon.name} pokemon={pokemon} index={index} />
        )) */}
        { (pokemonsData.pending) && loader }
        { (!pokemonsData.pending) && pokemonsData.pokemons.map((pokemon, index) => (
          <AllPokemon key={pokemon.name} pokemon={pokemon} index={index} />
        )) }
      </Row>
    </div>
  );
};

export default Home;
