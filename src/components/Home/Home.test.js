import { mount } from 'enzyme';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';

describe('PokemonList testing', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <Home />
      </Provider>,
    );
  });
  it('Renders pokeball image', () => {
    expect(wrapper.find({ alt: "Pokemon World" })).toHaveLength(1);
  });
});

test('Should display the header', () => {
  const { container } = render(
    <Provider store={store}>
      <Home />
    </Provider>,
  );
  expect(container.querySelector('h1')).toHaveTextContent('GLOBAL');
});
