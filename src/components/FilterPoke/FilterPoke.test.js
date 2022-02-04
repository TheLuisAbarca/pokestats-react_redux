import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import PokeFilterTypes from './FilterPoke';
import store from '../../redux/configureStore';

describe('Filter Type', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <PokeFilterTypes />
      </Provider>,
    );
  });

  it('Renders 18 filter types preseted', () => {
    expect(wrapper.find('option')).toHaveLength(18);
  });

  it('Select "category as default"', () => {
    expect(wrapper.find('option').at(0).text()).toBe('Select category');
  });
});
