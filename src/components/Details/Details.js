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
  const pokemonData = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPokemon(name));
  }, [dispatch]);

  const loader = <div className="loader bg-black">Loading</div>;

  return (
    <Row>
      <Col
        className="pt-3"
      >
        { (pokemonData.pendingPokemon) ? loader : <DetailCard pokemon={pokemonData} /> }
      </Col>
    </Row>
  );
};

export default Details;
