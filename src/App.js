import {
  Link, Route, Routes, useLocation,
} from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar } from 'react-bootstrap';
import Details from './components/Details/Details';
import Home from './components/Home/Home';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <header>
        <Navbar className="px-4 text-white bg-black d-flex justify-content-between">
          <Link to="/" className="text-decoration-none text-white fw-bold">
            &#60; HOME
          </Link>
          <h3 className="m-0">PokeStats</h3>
          <span>
            <i className="me-4 fas fa-microphone" />
            <i className="fas fa-cog" />
          </span>
        </Navbar>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="details/:name" element={<Details />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
