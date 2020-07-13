import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../test/testUtils.js';
import Input from './Input';

/**
 *
 * Factory function to create a ShallowWrapper fro the Input component.
 * @function setup
 * @param {obj} initialState - initial state fro this setup
 * @returns {ShallowWrapper}
 */

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrpapper = shallow(<Input store={store} />);
  console.log(wrapper.debug());
};

setup();

describe('render', () => {
  describe('word has not been guessed', () => {
    test('renders component without error', () => {});
    test('renders input box', () => {});
    test('renders submit button', () => {});
  });
  describe('word has been guessed', () => {
    test('renders component without error', () => {});
    test('do not renderinput box', () => {});
    test('doen not render submit button', () => {});
  });
});
describe('update state', () => {});
