import {
  Link, Route, Routes, useLocation,
} from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navbar, Row, Col } from 'react-bootstrap';
import Details from './components/Details/Details';
import Home from './components/Home/Home';
import { changeName } from './redux/search/search';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import music from './assets/110-pokemon_center.mp3';
import musicvtt from './assets/110-pokemon_center.mp3.vtt';

const App = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const play = () => {
    const rotateLogo = document.querySelector('img[alt="Pokemon World"]');
    const audio = document.querySelector('audio');
    const icon = document.querySelector('#playControl');
    if (audio.paused) {
      audio.volume = 0.1;
      audio.play();
      icon.classList.remove('fa-pause-circle');
      icon.classList.add('fa-play-circle');
      rotateLogo.classList.add('App-logo');
    } else {
      audio.removeAttribute('autoplay');
      audio.removeAttribute('loop');
      audio.pause();
      icon.classList.remove('fa-play-circle');
      icon.classList.add('fa-pause-circle');
      rotateLogo.classList.remove('App-logo');
    }
    // button.classList.add('fade');
  };

  window.addEventListener('DOMContentLoaded', () => {
    const audio = document.querySelector('audio');
    audio.volume = 0.2;
    const rotateLogo = document.querySelector('img[alt="Pokemon World"]');
    const startPlayPromise = audio.play();

    if (startPlayPromise !== undefined) {
      startPlayPromise.then(() => {
        // console.log('Estoy bien');
      }).catch((error) => {
        if (error.name === 'NotAllowedError') {
          const audioMessage = document.querySelector('#audioMessage');
          rotateLogo.classList.remove('App-logo');
          audioMessage.classList.remove('d-none');
          audioMessage.classList.add('d-flex');
          setTimeout(() => {
            audioMessage.classList.remove('d-flex');
            audioMessage.classList.add('d-none');
          }, 15000);
        } else {
          // console.log('Estoy mal 2');
        }
      });
    }
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <div className="container-fluid min-width">
        <Row
          id="audioMessage"
          className="d-none justify-content-center align-items-center"
        >
          <Col
            className="text-app text-center fw-bold"
          >
            Please check out your permissions for automatic audio play, and enable it.
          </Col>
        </Row>
        <audio
          controls
          autoPlay
          loop
          preload="none"
          className="d-none justify-content-center align-items-center"
        >
          <source src={music} type="audio/mp3" />
          <track src={musicvtt} kind="captions" srcLang="en" label="English" />
        </audio>
        <header>
          <Navbar className="px-4 text-app bg-dark1 d-flex justify-content-between">
            <Link
              to="/"
              className="text-decoration-none text-app fw-bold"
              onClick={() => dispatch(changeName(''))}
            >
              &#60; HOME
            </Link>
            <h3 className="m-0">PokeStats</h3>
            <span>
              <button
                id="audioControl"
                type="button"
                className="h-btn me-4"
                onClick={() => { play(); }}
              >
                <i id="playControl" className="fas fa-play-circle" />
              </button>
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
      </div>
    </>
  );
};

export default App;
