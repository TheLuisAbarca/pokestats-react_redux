import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './redux/configureStore';
// import { fetchPokemons } from './redux/filter/filter';
import './index.css';
import App from './App';

// store.dispatch(fetchPokemons('normal'));
const URL = process.env.PUBLIC_URL;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router basename={URL}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
