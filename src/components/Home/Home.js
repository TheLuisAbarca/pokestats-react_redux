import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
// import Spinner from 'react-bootstrap/Spinner';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokemons } from '../../redux/filter/filter';
import { changeName } from '../../redux/search/search';
import AllPokemon from '../AllPokemon/AllPokemon';
import FilterPoke from '../FilterPoke/FilterPoke';
import PokeWorld from '../../assets/pokeball.svg';
import InputSearch from '../FilterSearch/FilterSearch';

const Home = () => {
  const pokemonsData = useSelector((state) => state.pokemons);
  const filter = useSelector((state) => state.filter);
  const filterStr = useSelector((state) => state.search);

  const pokemonsFiltered = pokemonsData.pokemons.filter(
    (pokemon) => pokemon.name.includes(filterStr.toLowerCase()),
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPokemons('normal'));
  }, [dispatch]);

  const loader = (
    <div className="d-flex justify-content-center">
      <div className="loader" />
    </div>
  );

  return (
    <div className="body-dark">
      <Row className="m-0">
        <Col
          xs={6}
          sm={6}
          md={6}
          className="d-flex justify-content-end mt-2"
        >
          <a href="/">
            <img
              src={PokeWorld}
              alt="Pokemon World"
              height="150px"
              className="App-logo"
            />
          </a>
        </Col>
        <Col xs={6} sm={6} md={6} className="p-0 text-white d-flex flex-column justify-content-center">
          <h1 className="fw-bold m-0 text-uppercase">{filter}</h1>
          <p>
            { (pokemonsData.pending) ? 0 : pokemonsData.pokemons.length }
            {' '}
            Pokemons in this category
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          <Row
            // className="d-flex flex-column justify-content-center align-items-center"
            className="mt-2 justify-content-center align-items-center"
          >
            <FilterPoke />
            <InputSearch
              placeholder="Search by pokemon name"
              name="filter-input"
              value={filterStr}
              action={changeName}
            />
          </Row>
        </Col>
      </Row>
      <Row className="pt-2 m-0 mt-2 bg-dark1" style={{ height: '70vh' }}>
        <Col
          xs={12}
          sm={12}
          md={12}
          className="d-flex flex-column justify-content-start"
        >
          <h6 className="font-app fw-bold m-0 p-2 d-inline-block">{`Pokemons of ${filter.toUpperCase()} type`}</h6>
        </Col>
        { (pokemonsData.pending) ? loader : pokemonsFiltered.map((pokemon, index) => (
          <AllPokemon key={pokemon.name} pokemon={pokemon} index={index} />
        )) }
      </Row>
    </div>
  );
};

export default Home;
